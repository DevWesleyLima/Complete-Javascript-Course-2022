function getMonthName(month)
{
  switch(month)
  {
    case 1:
        console.log(`January`);
        break;
    case 2:
        console.log(`February`);
        break;
    case 3:
        console.log(`March`);
        break;
    case 4:
        console.log(`April`);
        break;
    case 5:
        console.log(`May`);
        break;
    case 6:
        console.log(`June`);
        break;
    case 7:
        console.log(`July`);
        break;
    case 8:
        console.log(`August`);
        break;
    case 9:
        console.log(`September`);
        break;
    case 10:
        console.log(`October`);
        break;
    case 11:
        console.log(`November`);
        break;
    case 12:
        console.log(`December`);
        break;
    default:
        `Error: Invalid Month!`;
        break;
  }
}

function getCompoundInterest(capital, rate, time)
{    
    let amount = (capital * Math.pow((1 + (rate / 100)), time));
    return amount;  
}

function getMembershipAnnuity(month, membershipValue)
{
    if(month === 1)
    {   
        console.log(`*********************************`);
        getMonthName(1);
        console.log(`Membership Annuity Value: £` + membershipValue.toFixed(2));
        console.log(`*********************************`);
        console.log(``);
    }    
    if(month !== 1 && month <= 12) 
    {   
        let updatedMembershipValue = 0; 

        for(i = 1; i < month; i++)
        {   
            updatedMembershipValue = getCompoundInterest(membershipValue,5,i);
        }       
        console.log(`*********************************`);
        getMonthName(i);
        console.log(`Membership Annuity Value: £` + updatedMembershipValue.toFixed(2));
        console.log(`*********************************`);
        console.log(``);
    }
    if(month <= 0 || month > 12)
    {
        console.log(`Error: Invalid Month Inserted!`);
    }
}

getMembershipAnnuity(1, 100);
getMembershipAnnuity(2, 100);
getMembershipAnnuity(3, 100);
getMembershipAnnuity(4, 100);
getMembershipAnnuity(5, 100);
getMembershipAnnuity(6, 100);
getMembershipAnnuity(7, 100);
getMembershipAnnuity(8, 100);
getMembershipAnnuity(9, 100);
getMembershipAnnuity(10, 100);
getMembershipAnnuity(11, 100);
getMembershipAnnuity(12, 100);
getMembershipAnnuity(13, 100);