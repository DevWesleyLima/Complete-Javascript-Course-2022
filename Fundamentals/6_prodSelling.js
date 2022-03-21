console.log(`***** Data Example *****`);
{
    //Product Data declaration
    var prodId = 4902505322723;
    var prodName = "Pen";
    var prodStock = 10;
    var prodPrice = 6.4;
    var prodTaxVAT = 1.5;
    var prodTax = 1;
    var prodUnTotalTax = prodTaxVAT + prodTax;
    var prodUnSellingPrice = prodPrice + prodUnTotalTax;

    //Product Data Print
    console.log(`Product: ` + prodId + ` - ` + prodName);
    console.log(`Stock: ` + prodStock + ` un`);
    console.log('Unit Price (before tax): £' + prodPrice + ` ea`);
    console.log('Unit Total Tax: £' + prodUnTotalTax + ` ea`);
    console.log('Unit Selling Price: £' + prodUnSellingPrice + ` ea`);
}

console.log('-----');

{
    //Selling Data Declaration
    let prodQtSold = 3;
    let prodTotalPrice = prodPrice * prodQtSold;
    let prodTotalTax = prodUnTotalTax * prodQtSold;
    let prodTotalInvoice = prodTotalPrice + prodTotalTax;

    //Selling Data Print
    console.log(`Product: `
        + prodId
        + ` - `
        + prodName
        + ` | `
        + prodQtSold
        + ` un | Total: £`
        + prodTotalInvoice.toFixed(2)
    );
}