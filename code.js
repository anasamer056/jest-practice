export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

export function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i>=0; i--) {
    res += str[i];
  }
  return res;
}
