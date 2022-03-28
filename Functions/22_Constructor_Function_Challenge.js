//Class
class People 
{
    constructor(name)
    {
        this.name = name;
    }
    talk()
    {
        console.log(`My name is: ${this.name}`);
    }
}

const p1 = new People(`Jhon1`);
p1.talk();

//Constructor Function Challenge
function People2(name)
{    
    this.name = name;

    this.talk = function()
    {   
        return console.log(`My name is: ${this.name}`);
    }
} 

const p2 = new People2(`Jhon2`);
console.log(`My name is: ${p2.name}`);