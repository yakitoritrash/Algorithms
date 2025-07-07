function validParantheses(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch(c) {
      case '(': arr.push(')');
      break;
      case '[': arr.push(']');
      break;
      case '{': arr.push('}');
      break;
      default:
      if (c !== arr.pop()) {
        console.log(false);
        return false;    
      }
    }
  }
  console.log(true);
  return arr.length === 0;
}

validParantheses('()[]{}')
