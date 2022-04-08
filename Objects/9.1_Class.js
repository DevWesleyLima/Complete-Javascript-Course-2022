class GrandDad 
{
    constructor(surname)
    {
        this.surname = surname;
    }
};

class Dad extends GrandDad 
{
    constructor(surname, occupation = 'Professor')
    {
        super(surname);
        this.occupation = occupation;
    }
};

class Son extends Dad
{
    constructor()
    {
        super('silva');        
    }
};

const son = new Son;
console.log(son);