import {ConnectionArgs} from '../dto/connection.args';
import {Node} from '../interfaces/node.interface';
import {offsetToCursor} from './offset-to-cursor';

export function connectionFromArray<T extends Node>(
  nodes: T[],
  args: ConnectionArgs,
  totalCount?: number
) {
  const edges = nodes.map(node => ({
    node,
    cursor: offsetToCursor(node.id),
  }));

  return {
    nodes,
    edges,
    // pageInfo,
    totalCount,
  };
}
