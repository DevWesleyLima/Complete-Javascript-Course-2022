let strScores = "10, 20, 20, 08, 25, 03, 0, 30, 01"

function checkScores(strScores)
{
    let scores = strScores.split(", ");
    let bestscoreQty = 0;
    let worseGame = 0;
    let minScore = scores[0];
    let maxScore = scores[0];

    for(let i = 1; i < scores.length; i++)
    {
        if(scores[i] < minScore)
        {
            minScore = scores[i];
            worseGame = i + 1;
        }
        else if (scores[i] > maxScore)
        {
            maxScore = scores[i];
            bestscoreQty++;
        }
    }  
    
    return console.log(`Best Score: ` + bestscoreQty + ` Times`, `\n` + `Worse Game: No. ` + worseGame);
}

checkScores(strScores);
