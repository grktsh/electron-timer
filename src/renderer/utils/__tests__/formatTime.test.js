import formatTime from '../formatTime';

it('should format to HH:mm:ss.SSS', () => {
  const date = Date.UTC(1970, 0, 2, 3, 4, 5, 678);
  expect(formatTime(date)).toBe('27:04:05.678');
});

it('should format large hours and small milliseconds', () => {
  const date = Date.UTC(1970, 0, 6, 3, 4, 5, 0);
  expect(formatTime(date)).toBe('123:04:05.000');
});

it('should format float time', () => {
  const date = Date.UTC(1970, 0, 6, 3, 4, 5, 1) + 0.2;
  expect(formatTime(date)).toBe('123:04:05.001');
});
