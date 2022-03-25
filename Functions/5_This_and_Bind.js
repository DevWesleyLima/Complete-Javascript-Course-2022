//This
const people = 
{
    greetings: `Morning!`,
    say()
    {
        console.log(this.greetings);
    }
}
people.say();
const say = people.say;
say();

//bind
const peopleSay = people.say.bind(people);
peopleSay();