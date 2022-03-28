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

//Factory Function
const createPeople = name =>
{
    const x = 
    {
        talk: () => console.log(`My name is: ${name}`)
    }
    return x;
}

const p2 = createPeople(`Jhon2`);
p2.talk();
