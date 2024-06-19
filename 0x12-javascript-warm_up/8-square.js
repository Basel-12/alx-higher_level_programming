#!/usr/bin/node
const n = parseInt(process.argv[2]);
if (isNaN(n)) { console.log('Missing size'); } else if (n > 0) {
  const mystr = 'x'.repeat(n);
  for (let i = 0; i < n; i++) { console.log(mystr); }
}
