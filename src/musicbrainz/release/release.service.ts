import type {Client} from '@elastic/elasticsearch/api/new';
import {SearchRequest} from '@elastic/elasticsearch/api/types';
import {Inject, Injectable} from '@nestjs/common';
import {ElasticsearchService} from '@nestjs/elasticsearch';
import {cursorToOffset} from '../../core/utils/cursor-to-offset';
import {ReleasesArgs} from './dto/releases.args';
import {ReleaseMapping} from './mappings/release.mapping';

@Injectable()
export class ReleaseService {
  constructor(@Inject(ElasticsearchService) private elastic: Client) {}

  async findMany(args: ReleasesArgs) {
    const req: SearchRequest = {
      index: 'release',
      sort: ['id'],
    };
    if (args.query) {
      req.body = {
        query: {
          match: {
            title: args.query,
          },
        },
      };
    }
    if (args.first) {
      req.size = args.first;
      if (args.after) {
        // @ts-expect-error @elastic/elasticsearch
        req.search_after = [cursorToOffset(args.after)];
      }
    }
    if (args.last) {
      req.size = args.last;
      // @ts-expect-error @elastic/elasticsearch
      req.sort = {id: {order: 'desc'}};
      if (args.before) {
        // @ts-expect-error @elastic/elasticsearch
        req.search_after = [cursorToOffset(args.before)];
      }
    }
    const res = await this.elastic.search<ReleaseMapping>(req);
    // @ts-expect-error @elastic/elasticsearch
    const total = res.body.hits.total.value as number;
    const releases = res.body.hits.hits.map(h => h._source) as ReleaseMapping[];
    return {total, releases};
  }

  async findById(id: string) {
    const index = 'release';
    const result = await this.elastic.get({id, index});
    return result.body._source;
  }
}
