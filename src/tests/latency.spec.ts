import request from 'supertest';
import app from '../app';

describe('Latency test', () => {
  it('API responds within 700ms', async () => {
    const start = Date.now();
    await request(app).get('/health');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(700);
  });
});