#!/usr/bin/node
if (process.argv.length <= 3) { console.log(0); } else {
  const arr = process.argv.slice(2).map(arg => parseInt(arg, 10));
  arr.sort((a, b) => b - a);
  console.log(arr[1]);
}
