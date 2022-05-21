import request from 'supertest';
import loadExpress from '../src/expressLoader.js';

let app;

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

  it('create reply', async () => {
    // --runInBand로 순차실행하여 위에서 comment를 한 개 생성
    // 대댓글에서 parentId는 상위댓글의 id
    const replyBody = {
      body: 'test reply',
      author: 'replytester',
      parentId: 1,
    };
    await request(app)
      .post('/comment/reply')
      .set('Accept', 'application/json')
      .send(replyBody)
      .expect(201);
  });
});
