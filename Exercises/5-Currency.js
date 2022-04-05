function formatCurrencyBRL(result)
{    
    console.log(`R$ ${result.toFixed(2).toString().replace(".", ",")}`);   
}

formatCurrencyBRL(0.1 + 0.2);