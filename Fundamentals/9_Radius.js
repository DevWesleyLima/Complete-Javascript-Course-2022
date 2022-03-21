{
    let typeObjA = `Circumference`;
    let radiusObjA = 10;
    let areaObjA = Math.PI * Math.pow(radiusObjA, 2);

    if (typeObjA === `Circumference`) {
        console.log(`Area of Object A: ` + areaObjA.toFixed(4));
    }
    else {
        console.log(`This object is not a Circumference!`);
    }
}