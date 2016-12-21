const divmod = (a, b) => [Math.floor(a / b), a % b];

const pad = (n, size) => {
  const s = String(n);
  const count = size - s.length;
  return count > 0 ? '0'.repeat(count) + s : s;
};

const formatTime = (time) => {
  const [hours, t1] = divmod(time, 60 * 60 * 1000);
  const [minutes, t2] = divmod(t1, 60 * 1000);
  const [seconds, t3] = divmod(t2, 1000);
  const milliseconds = Math.floor(t3);
  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(milliseconds, 3)}`;
};

export default formatTime;
