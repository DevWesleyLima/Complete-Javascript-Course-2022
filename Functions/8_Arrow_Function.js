function people()
{
    this.age = 0;
    setInterval(() => 
    {
        this.age++;
        console.log(this.age);
    }, 500)
}

new people;