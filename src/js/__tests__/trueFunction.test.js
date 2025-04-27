import getHealthColor from '../trueFunction.js';

test('healthy', () => {
  const result = getHealthColor({name: 'Маг', health: 90});

  expect(result).toBe('healthy');
});

test('wounded', () => {
  const result = getHealthColor({name: 'Маг', health: 50});

  expect(result).toBe('wounded');
});

test('critical', () => {
  const result = getHealthColor({name: 'Маг', health: 14});

  expect(result).toBe('critical');
});
