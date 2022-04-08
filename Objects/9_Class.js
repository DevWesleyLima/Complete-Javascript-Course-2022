class Entry
{
    constructor(name = 'Generic', value = 0)
    {
        this.name = name;
        this.value = value;
    }
};


class FinancialCycle
{
    constructor(month, year)
    {
        this.month = month;
        this.year = year;
        this.entries = [];
    }

    addEntries(...entries)
    {
        entries.forEach(l => this.entries.push(l))
    }

    summary()
    {
        let consolidatedValue = 0;
        this.entries.forEach(l => 
        {
            consolidatedValue += l.value;
        })
        return consolidatedValue;
    }
};

const salary = new Entry('Salary: ', 45000);
const eletricityBill = new Entry('Eletricity: ', -220);

const bills = new FinancialCycle(6, 2018);
bills.addEntries(salary, eletricityBill);
console.log(bills.summary());