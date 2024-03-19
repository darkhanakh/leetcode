const maximumOddBinaryNumber = (s: string): string => {
  let counter = 0;
  for (const c of s) {
    if (c === "1") counter++;
  }
  // @ts-ignore
  return "1".repeat(counter - 1) + "0".repeat(s.length - counter) + "1";
};

console.log(maximumOddBinaryNumber("100100"));
