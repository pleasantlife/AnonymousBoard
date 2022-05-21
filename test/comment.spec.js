import request from 'supertest';
import loadExpress from '../src/expressLoader.js';

let app;
let commentId;

beforeAll(() => {
  app = loadExpress();
});

describe('comment test', () => {
  it('get comments', async () => {
    request(app).get('/comment').expect(200);
  });

  it('create comment', async () => {
    const body = {
      title: 'make new post',
      author: 'supertest',
      body: 'This post made by supertest',
      password: 'postpassword',
    };
    const newPost = await request(app)
      .post('/post/create')
      .set('Accept', 'application/json')
      .send(body)
      .expect(201);
    const postId = newPost.body.id;

    const commentBody = {
      body: 'test comment',
      author: 'tester',
      postId,
    };
    await request(app)
      .post('/comment/create')
      .set('Accept', 'application/json')
      .send(commentBody)
      .expect(201);
  });
});
