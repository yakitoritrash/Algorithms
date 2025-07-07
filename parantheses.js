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
        console.log(false);
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  if (stack.length === 0) {
    console.log(true);
  }
  return stack.length === 0;
}

isValid('((([]{}))))');
