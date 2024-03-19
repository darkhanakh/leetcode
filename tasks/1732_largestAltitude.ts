const largestAltitude = (gain: number[]): number => {
  const psum = [0];
  for (let i = 0; i < gain.length; i++) {
    psum.push(psum[i] + gain[i]);
  }

  const res = psum.sort((a, b) => a - b);
  return res[res.length - 1];
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
