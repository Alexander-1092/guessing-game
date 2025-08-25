class GuessingGame {
  arr = [];

  left = 0;

  right = 0;

  mid = 0;

  setRange(min, max) {
    for (let index = min + 1; index < max; index += 1) {
      this.arr.push(index);
    }
    this.right = this.arr.length - 1;
  }

  guess() {
    if (this.left <= this.right) {
      this.mid = Math.ceil((this.right + this.left) / 2);
    }
    return this.arr[this.mid];
  }

  lower() {
    this.right = this.mid - 1;
  }

  greater() {
    this.left = this.mid + 1;
  }
}

module.exports = GuessingGame;

const arr = [1, 2, 3, 4, 5];

const rez = arr.map((item) => item + 1);
rez.reduce((acc, item) => acc + item);
