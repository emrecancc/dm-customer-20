const { User } = require('../models');
const { sequelize } = require('../db');

describe('User model', () => {
  beforeEach(() => {
    return User.destroy({ where: {}, truncate: true });
  });

  it('creates a user', async () => {
    await User.create({ email: 'test@example.com', name: 'Test' });
    const count = await User.count();
    expect(count).toBe(1);
  });

  it('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });

});