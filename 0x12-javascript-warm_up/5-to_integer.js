#!/usr/bin/node
const intNumber = parseInt(process.argv[2]);
if (isNaN(intNumber)) {
  console.log('Not a number');
} else {
  console.log('My number:', intNumber);
}
