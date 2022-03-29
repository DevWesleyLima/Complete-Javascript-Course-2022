function checkTriangleType(x, y, z) {
    if(x == y && x == z && y == z)
    {
        return console.log(`Equilateral triangle`);
    }
    else if(x != y && x != z && y != z)
    {
        return console.log(`Scalene Triangle`);
    }    
    else
    {
        return console.log(`Isosceles Triangle`);
    }
}

const triangle = new checkTriangleType(1, 1, 1);
const triangle2 = new checkTriangleType(1, 2, 3);
//Validations
const triangle3 = new checkTriangleType(1, 1, 2);
const triangle3_1 = new checkTriangleType(1, 2, 2);
const triangle3_2 = new checkTriangleType(2, 1, 2);