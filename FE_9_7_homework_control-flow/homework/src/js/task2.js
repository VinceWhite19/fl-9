const gameMainWindow = (maxNumber, attemptsLeft, totalPrize, possiblePrize) => `
Enter a number from 0 to ${maxNumber}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$`;

const updateData = {
    prizeMultiplier: 3,
    numberMultiplier: 2,
    totalAttempts: 3
};


const gameOptions = {
    prize: 10,
    maxRangeValue: 5,
    totalPrize: 0
};

/* label to check, if user wants to play */
let playAgain = false;

if (confirm('Do you want to play a game?')) {
    do {
        /* reset the game*/
        playAgain = false;

        const randomNumber = getRandomValue(gameOptions.maxRangeValue);

        for (
            let currentAttempt = 1, possiblePrize = gameOptions.prize;
            currentAttempt <= updateData.totalAttempts; 
            currentAttempt++, possiblePrize = Math.floor(possiblePrize / 2)
        ) {

            /* main game box */
            const playBox = +prompt(
                gameMainWindow(
                    gameOptions.maxRangeValue,
                    updateData.totalAttempts - currentAttempt,
                    gameOptions.totalPrize,
                    possiblePrize
                )
            );

            if (playBox === randomNumber) {

                /* success if the number is correct */

                gameOptions.totalPrize += possiblePrize;
                if (confirm(`
                    Congratulation! Your prize is: ${gameOptions.totalPrize}$ 
                    Do you want to continue?`)) {
                    // update prize and maxRange values after correct guess
                    gameOptions.prize *= updateData.prizeMultiplier;
                    gameOptions.maxRangeValue *= updateData.numberMultiplier;

                    playAgain = true;
                    break;
                } else {
                    playAgain = false;
                    break;
                }
            } else if (currentAttempt === updateData.totalAttempts) {

                /* game over when attempts ended */

                alert(`Thank you for a game. Your prize is: ${gameOptions.totalPrize}$`);
                if (confirm(`Do you want to play again?`)) {
                    playAgain = true;
                    break;
                }
            } else if (playBox === null) {
                /* user cancelled the game */

                playAgain = false;
                break;
            }
        }
    } while (playAgain);
}

alert('You did not become a millionaire, but can.');

/* random numbers generator */
function getRandomValue(maxNumber) {
    return Math.floor(Math.random() * +maxNumber);
}