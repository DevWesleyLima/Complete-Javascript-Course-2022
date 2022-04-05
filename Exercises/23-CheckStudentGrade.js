function getStudentGrade(grade1, grade2, grade3)
{
    if(grade1 > grade2 && grade1 > grade3)
    {
        return ((grade1 * 4) + (grade2 * 3) + (grade3 * 3))/10;
    }
    else if(grade2 > grade1 && grade2 > grade3)
    {
        return ((grade2 * 4) + (grade1 * 3) + (grade3 * 3))/10;
    }
    else
    {
        return ((grade3 * 4) + (grade1 * 3) + (grade2 * 3))/10;
    }
    
}

function checkStudentGrade(studentCode, grade1, grade2, grade3)
{
    if(getStudentGrade(grade1,grade2,grade3) >= 5)
    {
        console.log(`Congratulations, the Student nº ${studentCode} is APPROVED!!!. Student Grade: ${getStudentGrade(grade1,grade2,grade3)}`);
    }
    else
    {
        console.log(`Sorry, the Student nº ${studentCode} is not approved. Student Grade: ${getStudentGrade(grade1,grade2,grade3)}`);
    }
}

checkStudentGrade(991,1,2,3);
checkStudentGrade(992,1,3,2);
checkStudentGrade(993,3,2,1);
checkStudentGrade(994,5,5,5);
checkStudentGrade(995,10,10,10);
checkStudentGrade(996,10,8,6);
checkStudentGrade(123,2.8,6,3.5);


    

