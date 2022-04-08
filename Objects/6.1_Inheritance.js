//Prototype Chain
const grandDad = { attr1: 'A' };
const dad = { __proto__: grandDad, attr2: 'B' };
const son = { __proto__: dad, attr3: 'C' };

console.log(son.attr1);
console.log(``);

//Example1
Object.prototype.attr0 = '0'; //Avoid it
const grandDad1 = { attr1: 'A' };
const dad1 = { __proto__: grandDad, attr2: 'B', attr3: '3' };
const son1 = { __proto__: dad, attr3: 'C' };

console.log(son1.attr0, son1.attr1, son1.attr2, son1.attr3);
console.log(``);

//Example2
const car = 
{
     speed: 0,
     topSpeed: 200,
     speedUp(x) 
     {
        if(this.speed + x <= this.topSpeed)
        {
            this.speed += x;
        }
        else
        {
            this.speed = this.topSpeed
        }
     },
     status()
     {
         return `${this.speed}km/h of ${this.topSpeed}km/h`
     }
};

const ferrari = 
{
    model: `F40`,
    topSpeed: 324 //shadowing car's topSpeed
};

Object.setPrototypeOf(ferrari, car);

const volvo = 
{
    model: `V40`,
    status()
    {
        return `${this.model}: ${super.status()}`
    }
};

Object.setPrototypeOf(volvo, car);

console.log(ferrari);
console.log(volvo);
console.log(``);

volvo.speedUp(100);
console.log(volvo.status());

ferrari.speedUp(300)
console.log(ferrari.status());


