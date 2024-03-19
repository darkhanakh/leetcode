function pivotInteger(n: number): number {
  if (n == 1) {
    return 1;
  }

  const prefix = [];
  const suffix = [];
  let prefixSum = 0;
  let suffixSum = 0;

  for (let i = 0; i < n; i++) {
    prefixSum += i;
    prefix.push(prefixSum);
  }

  for (let i = n; i > 0; i--) {
    suffixSum += i;
    suffix.unshift(suffixSum);
  }

  for (let i = 0; i < n - 1; i++) {
    if (prefix[i] === suffix[i + 1]) {
      return i + 1;
    }
  }

  return -1;
}

function pivotInteger2(n: number): number {
  let totalSum = (n * (n + 1)) / 2;

  let leftSum = 0;
  for (let i = 1; i <= n; i++) {
    totalSum -= i;
    if (leftSum === totalSum) {
      return i;
    }
    leftSum += i;
  }

  return -1;
}

console.log(pivotInteger2(8));
