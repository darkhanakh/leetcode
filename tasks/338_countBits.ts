const countBits = (n: number): number[] => {
  const r: number[] = []
  for(let i = 0; i <= n; i++) {
    r.push(countOne(i.toString(2)));
  }
  return r;
};

const countOne = (s: string) => {
  let count = 0;
  for(const c of s) {
    if(c === '1') count++;
  }
  return count;
}

console.log(countBits(3))