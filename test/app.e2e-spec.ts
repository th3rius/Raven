import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import request from 'supertest';
import {AppModule} from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should query helloWorld', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({query: '{ helloWorld }'})
      .expect(res => {
        expect(res.body.data.helloWorld).toEqual('Hello World!');
      });
  });
});
