const providers = ["Mercedes", "Audi", "BMW"];

function print(name, index)
{
    console.log(`${index + 1}. ${name}`);
}

providers.forEach(print);
console.log(``);
providers.forEach(provider => console.log(provider));