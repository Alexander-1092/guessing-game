class GuessingGame {

		arr = []
		left = 0
		right = 0
		mid = 0

    constructor() {}
    setRange(min, max) {
			for (let index = min + 1; index < max; index++) {
				this.arr.push(index)			
			}
			this.right = this.arr.length - 1
    }
    guess() {
			if (this.left <= this.right) {
				this.mid = Math.ceil((this.right + this.left) / 2)
			} 
			return this.arr[this.mid]
    }
    lower() {
			this.right = this.mid - 1;
    }
    greater() {
			this.left = this.mid + 1;
    }
}

module.exports = GuessingGame;

