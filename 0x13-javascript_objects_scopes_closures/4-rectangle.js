#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    const str = 'X'.repeat(this.width);
    for (let i = 0; i < this.height; i++) { console.log(str); }
  }

  rotate () {
    this.width = this.width + this.height;
    this.height = this.width - this.height;
    this.width = this.width - this.height;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;
