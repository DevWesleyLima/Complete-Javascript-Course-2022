function getFruits(fruit)
{
    switch(fruit.toLowerCase())
    {
        case `apple`: 
            console.log(`Sorry, we don't sell apples here.`);
            break;
        case `kiwi`:
            console.log(`Sorry, we have no more kiwis in stock.`);
            break;
        case `watermelon`: 
            console.log(`We have a lot of watermelon in stock!`);
            console.log(`It is R$ 3,00 per kg`);
            break;        
        default:
            console.log(`Error: Invalid Fruit`);
            break;
    }
}

getFruits(`ApPle`);
console.log(`---`);
getFruits(`KiwI`);
console.log(`---`);
getFruits(`WaTermeLon`);
console.log(`---`);
getFruits(`GRAPEs`);
