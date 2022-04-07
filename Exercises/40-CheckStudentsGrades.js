let studentsGrades = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];

function checkStudentsGrades(studentsGrades)
{
    let results = [];

    for(i = 0; i < studentsGrades.length; i++)
    {        
        if(studentsGrades[i] >= 0 && studentsGrades[i] < 5)
        {
            results.push(`D`);
        }
        else if(studentsGrades[i] >= 5 && studentsGrades[i] < 7)
        {
            results.push(`C`);
        }
        else if(studentsGrades[i] >= 7 && studentsGrades[i] < 9)
        {
            results.push(`B`);
        }
        else if(studentsGrades[i] >= 9 && studentsGrades[i] <= 10)
        {
            results.push(`A`);
        }
        else
        {
            results.push(`Invalid Grade`);
        }
    }

    console.log(`Students Grades: ` + `[` + results + `]`);
}

checkStudentsGrades(studentsGrades);