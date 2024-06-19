#!/usr/bin/node
let x = parseInt(process.argv[2], 10);
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else if (x > 0) {
  while (x !== 0) {
    console.log('C is fun');
    x--;
  }
}
