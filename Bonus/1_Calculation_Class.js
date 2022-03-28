class Calculation {
    constructor(x, y) {
        let number = 0;

        this.getSum = function () {
            return x + y;
        };

        this.getSub = function () {
            return x - y;
        };

        this.getMul = function () {
            return x * y;
        };

        this.getDiv = function () {
            return x / y;
        };

    }
}

const myNumber = new Calculation(1, 2);
console.log(`Sum: ` + myNumber.getSum());
console.log(`Sub: ` + myNumber.getSub());
console.log(`Mul: ` + myNumber.getMul());
console.log(`Div: ` + myNumber.getDiv());