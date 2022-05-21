import assert from 'assert';
import request from 'supertest';
import loadExpress from '../src/expressLoader.js';

let app;
let postId;

beforeAll(() => {
  app = loadExpress();
});

describe('post api test', () => {
  it('get all posts', async () => {
    await request(app).get('/post').expect(200);
  });

  it('make new post', async () => {
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
    postId = newPost.body.id;
  });

  it('get all posts that find by title', async () => {
    await request(app).get('/post').query({ type: 'title', keyword: 'hello' }).expect(200);
  });

  it('get all posts that find by author', async () => {
    await request(app).get('/post').query({ type: 'author', keyword: 'hello' }).expect(200);
  });

  it('update post', async () => {
    const updateData = {
      body: 'update post',
      password: 'postpassword',
    };
    await request(app).put(`/post/${postId}`).set('Accept', 'application/json').send(updateData);
    const targetPost = await request(app).get(`/post/${postId}`).expect(200);
    assert.equal(targetPost.body.body, updateData.body);
  });

  it('delete post', async () => {
    const body = {
      password: 'postpassword',
    };
    await request(app)
      .delete(`/post/${postId}`)
      .set('Accept', 'application/json')
      .send(body)
      .expect(200);
  });
});
