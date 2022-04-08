const a = 1;
const b = 2;
const c = 3;

const obj1 = {a:a, b:b, c:c};
const obj2 = {a, b, c};

console.log(obj1, obj2);

const attrName = 'Grade';
const  attrValue = 7.87;

const obj3 = {};
obj3[attrName] =  attrValue;
console.log(obj3);

const obj4 = {[attrName]: attrValue};
console.log(obj4);

const obj5 = 
{
    function1: function()
    {
        //Example1
    },
    function2()
    {
        //Example2
    }
};

console.log(obj5);