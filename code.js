export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

export function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

export function analyzeArray(arr) {
  if (arr.length < 1) throw Error("Array can't be empty");

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  const length = arr.length;

  for (let n of arr) {
    min = Math.min(min, n);
    max = Math.max(max, n);
    sum += n;
  }
  const average = sum / length;
  return { min, max, average, length };
}
