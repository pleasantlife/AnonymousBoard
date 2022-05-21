import request from 'supertest';
import loadExpress from '../src/expressLoader.js';

let app;

beforeAll(() => {
  app = loadExpress();
});

describe('post api test', () => {
  it('get all posts', async () => {
    await request(app).get('/post').expect(200);
  });

  it('get all posts that find by title', async () => {
    await request(app).get('/post').query({ type: 'title', keyword: 'hello' }).expect(200);
  });

  it('get all posts that find by author', async () => {
    await request(app).get('/post').query({ type: 'author', keyword: 'hello' }).expect(200);
  });

  it('make new post', async () => {
    const body = {
      title: 'make new post',
      author: 'supertest',
      body: 'This post made by supertest',
      password: 'postpassword',
    };
    await request(app)
      .post('/post/create')
      .set('Accept', 'application/json')
      .send(body)
      .expect(201);
  });
});
