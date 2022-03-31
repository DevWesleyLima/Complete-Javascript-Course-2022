function getOrder(productCode, quantity)
{
    switch(productCode)
    {
        case 100:
            console.log(`Product Code: ` + productCode);
            console.log(`Product: Hot Dog`);
            console.log(`Product Price: £3.00`);
            console.log(`Order's Quantity: ` + quantity);
            console.log(`Total Order: £` + (quantity * 3).toFixed(2));
            break;
        case 200:
            console.log(`Product Code: ` + productCode);
            console.log(`Product: Hamburger`);
            console.log(`Product Price: £4.00`);
            console.log(`Order's Quantity: ` + quantity);
            console.log(`Total Order: £` + (quantity * 4).toFixed(2));
            break;
        case 300:
            console.log(`Product Code: ` + productCode);
            console.log(`Product: Cheeseburger`);
            console.log(`Product Price: £5.50`);
            console.log(`Order's Quantity: ` + quantity);
            console.log(`Total Order: £` + (quantity * 5.5).toFixed(2));
            break;
        case 400:
            console.log(`Product Code: ` + productCode);
            console.log(`Product: Ham and Cheese Sandwich`);
            console.log(`Product Price: £7.50`);
            console.log(`Order's Quantity: ` + quantity);
            console.log(`Total Order: £` + (quantity * 7.5).toFixed(2));
            break;
        case 500:
            console.log(`Product Code: ` + productCode);
            console.log(`Product: Soft Drink`);
            console.log(`Product Price: £3.50`);
            console.log(`Order's Quantity: ` + quantity);
            console.log(`Total Order: £` + (quantity * 3.5).toFixed(2));
            break;
        case 600:
            console.log(`Product Code: ` + productCode);
            console.log(`Product: Natural Fruit Juice`);
            console.log(`Product Price: £2.80`);
            console.log(`Order's Quantity: ` + quantity);
            console.log(`Total Order: £` + (quantity * 2.8).toFixed(2));
            break;
        default:
            console.log(`Error: Invalid product!`);
            break;
    }
}

getOrder(100, 10);
console.log(`-----`);
getOrder(200, 10);
console.log(`-----`);
getOrder(300, 10);
console.log(`-----`);
getOrder(400, 10);
console.log(`-----`);
getOrder(500, 10);
console.log(`-----`);
getOrder(600, 10);
console.log(`-----`);
getOrder(999, 500);
console.log(`-----`);
