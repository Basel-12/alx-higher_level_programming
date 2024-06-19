#!/usr/bin/node
if (process.argv[2] !== undefined) {
  console.log(process.argv[2]); // Print the first argument
} else {
  console.log('No argument'); // Print "No argument" if no argument is passed
}
