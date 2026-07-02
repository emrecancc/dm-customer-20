const nock = require('nock');
const apiClient = require('../src/apiClient');

describe('API client', () => {
  it('fetches user successfully', async () => {
    nock('https://api.example.com')
      .get('/users/1')
      .reply(200, { id: 1, name: 'Alice' });

    const user = await apiClient.getUser(1);
    expect(user).toEqual({ id: 1, name: 'Alice' });
  });

  it('handles 404', async () => {
    nock('https://api.example.com')
      .get('/users/999')
      .reply(404);

    const user = await apiClient.getUser(999);
    expect(user).toBeNull();
  });
});

afterEach(() => nock.cleanAll());