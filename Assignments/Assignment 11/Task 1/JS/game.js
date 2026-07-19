let ContinueProgram = true ;
var FlagOne = 0
var FlagTwo = 0

while(ContinueProgram)
{

    var UserOneChoice = prompt(`Player One Choice "1-Rock 2-Paper 3-Scissors"'Type The Name of Choice'`);

    switch(UserOneChoice) 
    {
        case `Rock`:
            break;

        case `Paper`:
            break;

        case `Scissors`:
            break;

        default :
        console.log(`Type the Word of Choice`);

    }

    var UserTwoChoice = prompt(`Player Two Choice "1-Rock 2-Paper 3-Scissors"'Type The Name of Choice'`);

    switch(UserTwoChoice) 
    {
        case `Rock`:
            break;

        case `Paper`:
            break;

        case `Scissors`:
            break;

        default :
        console.log(`Type the Word of Choice`);

    }

    if (UserOneChoice == UserTwoChoice) {
        console.log(`Draw`);
    }
    else if 
        (
            (UserOneChoice === `Rock` && UserTwoChoice === `Scissors`) ||
            (UserOneChoice === `Paper` && UserTwoChoice === `Rock`)    ||
            (UserOneChoice === `Scissors` && UserTwoChoice === `Paper`)
        ) {

            console.log(`Player One Win`);
            FlagOne++;

    }

    else {
            console.log(`Player Two Win`);
            FlagTwo++;
    }


    ContinueProgram=prompt(`Continue"true" Or Exit"false" choose true or false`);
}

console.log(`Player One Score ${FlagOne}  \n Player Two Score ${FlagTwo}`);
if(FlagOne > FlagTwo) console.log(`Player One Win`);
else console.log(`Player Two Win`);
