class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        // Use binary search to make the next guess in the middle of the current range.
        this.currentGuess = Math.floor((((this.minRange + this.maxRange)) / 2));
        return this.currentGuess + 2; // Возвращаем на единицу больше
    }

    lower() {
        // Adjust the upper bound of the range to be one less than the current guess.
        this.maxRange = this.currentGuess - 1; // Также уменьшаем верхнюю границу на единицу
    }

    greater() {
        // Adjust the lower bound of the range to be one more than the current guess.
        this.minRange = this.currentGuess + 2; // И увеличиваем нижнюю границу на две единицы
    }
}

module.exports = GuessingGame;
