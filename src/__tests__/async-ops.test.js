const asyncOps = require('../async-ops');

describe('batch processing', () => {
  test('processes all items', async () => {
    const items = Array.from({ length: 10 }, (_, i) => i);
    const results = await Promise.all(items.map(item => asyncOps(item)));
    expect(results).toHaveLength(10);
  });
});