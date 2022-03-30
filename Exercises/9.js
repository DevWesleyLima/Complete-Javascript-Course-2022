function checkStdGrade(stdName, stdGrade)
{
    let roundStdGrade = 0;
    
    if((stdGrade % 5) >= 3 && stdGrade >= 38 && stdGrade <= 100)
    {
        roundStdGrade =  stdGrade + (5 - (stdGrade % 5))           
    }
    else
    {
        roundStdGrade = stdGrade;
    }
    
    if(roundStdGrade < 40)
    {
        console.log(
            stdName.charAt(0).toUpperCase() 
            + stdName.slice(1).toLowerCase() 
            + ` you have got an F!!! Grade: ` 
            + roundStdGrade);
    }
    else if(roundStdGrade >= 40 && roundStdGrade <= 100)
    {
        console.log(
            stdName.charAt(0).toUpperCase() 
            + stdName.slice(1).toLowerCase() 
            + ` you are approved!!! Grade: ` 
            + roundStdGrade);
    }
    else
    {
        console.log(
            `The Maximum Grade is 100, please check ${stdName.charAt(0).toUpperCase() + stdName.slice(1).toLowerCase()} Grade's value! Grade: ` + roundStdGrade);
    }
}

checkStdGrade(`Marie`, 34); //Marie you have got an F!!! Grade: 34
checkStdGrade(`billie`, 37); //Billie you have got an F!!! Grade: 37
checkStdGrade(`ANNIE`, 38); //Annie you are approved!!! Grade: 40
checkStdGrade(`jhon`, 40); //Jhon you are approved!!! Grade: 40
checkStdGrade(`Phelipa`, 84); //Phelipa you are approved!!! Grade: 85
checkStdGrade(`Joe`, 86); //Joe you are approved!!! Grade: 86
checkStdGrade(`JaMes`, 98); //James you are approved!!! Grade: 100
checkStdGrade(`Gary`, 104); //The Maximum Grade is 100, please check Gary Grade's value!