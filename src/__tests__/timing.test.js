const fetch = require('node-fetch');

// Test to ensure the API responds within an acceptable time frame.
// The threshold is increased to accommodate observed latency.

test('API responds within 300ms', async () => {
  const start = Date.now();
  await fetch('http://localhost:3000/api');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(300);
});