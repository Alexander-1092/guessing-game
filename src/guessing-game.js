class GuessingGame {
		arr = []
		left = 0
		right = 0
		mid
    constructor() {}
    setRange(min, max) {
			for (let index = min; index <= max; index++) {
				this.arr.push(index)			
			}
			this.right = this.arr.length - 1
    }
    guess() {
			this.mid = Math.floor((this.right + this.left) / 2) 
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

const game = new GuessingGame();
const number = 279;
game.setRange(0, 3445)

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();

game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();

result = game.guess();
game.lower();
result = game.guess();

game.greater();

result = game.guess();









