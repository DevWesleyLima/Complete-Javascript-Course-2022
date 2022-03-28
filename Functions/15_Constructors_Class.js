class Car {
    constructor(maxSpeed = 200, delta = 5) {
        //Private attribute
        let speed = 0;

        //Public method 
        this.speedUp = function () {
            if (speed + delta <= maxSpeed) {
                speed += delta;
            }

            else {
                speed = maxSpeed;
            }
        };

        //Public method
        this.getSpeed = function () {
            return speed;
        };
    }
}

const defaultCar = new Car(160, 10.98) 
defaultCar.speedUp();
console.log(`Popular Car: ` + defaultCar.getSpeed() + ` m/s`);

const golf = new Car(238, 14.28);
golf.speedUp();
console.log(`Golf: ` + golf.getSpeed() + ` m/s`);

const ferrari = new Car(340, 34.48);
ferrari.speedUp();
console.log(`Ferrari: ` + ferrari.getSpeed() + ` m/s`);

const lamborghini = new Car(355, 35.71);
lamborghini.speedUp();
console.log(`Lamborghini: ` + lamborghini.getSpeed() + ` m/s`);

console.log(typeof Car);
console.log(typeof ferrari);