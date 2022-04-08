const dad = 
{
    name: `Peter`,
    hairColour: `Black`
};

const son1 = Object.create(dad);
son1.name = `Annie`;
console.log(son1.hairColour);

const son2 = Object.create(dad, 
{
    name: 
    {   value: `Belatrix`,
        writable: false,
        enumerable: true
    }
});

console.log(son2.name);
son2.name = `Carly`;
console.log(`${son2.name} has ${son2.hairColour} hair`);

console.log(Object.keys(son1));
console.log(Object.keys(son2));

console.log(``);

for(let key in son2)
{
    console.log(key);
};

console.log(``);

for(let key in son2)
{
    son2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Inheritance: ${key}`);
};