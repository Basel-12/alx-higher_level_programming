#!/usr/bin/node
let x = parseInt(process.argv[2]);
console.log(x);
while (x !== 0 && x !== undefined) {
  console.log('C is fun');
  x--;
}
