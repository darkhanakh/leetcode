function minRemoveToMakeValid(s: string): string {
  const stack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length > 0 && s[stack[stack.length - 1]] === "(") {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }

  // Remove characters at indices in the stack
  return s
    .split("")
    .filter((char, index) => !stack.includes(index))
    .join("");
}
