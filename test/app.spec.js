import request from 'supertest';
import loadExpress from '../src/expressLoader.js';

const app = loadExpress();

describe('user test', () => {
  it('health check test', async () => {
    const response = await request(app).get('/health').expect(200);
    expect(response.body.status).toBe('alive!');
  });
});
