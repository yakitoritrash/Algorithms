function isValid(s) {
  const stack = [];
  const closeToopen = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let c of s) {
    if (closeToopen[c]) {
      if (stack.length > 0 && stack[stack.length - 1] === closeToopen[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}

isValid('((([]{})))');
