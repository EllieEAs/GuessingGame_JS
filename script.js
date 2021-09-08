'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.guess').value = 10);

// defining random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

// delacaring and initializing score
let score = 20;

let highScore =0;

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // when there is not guess
    if(!guess)
    {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }

    // when user wins
    else if(guess == secretNumber)
    {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
   // when guess is wrong
   else if (guess != secretNumber)
   {
    if(score > 0)
    {
    document.querySelector('.message').textContent =  guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'; 
    score--;
    document.querySelector('.score').textContent = score;
    }   
    else {
    document.querySelector('.message').textContent = '💥 You lost the game!'; 
    document.querySelector('body').style.backgroundColor = 'Red';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = 0;
   
    }
   }
    // else if(guess > secretNumber)
    // {
        
    // }

    // else if (guess < secretNumber)
    // {
    //     if(score > 0)
    //     {
    //     document.querySelector('.message').textContent = '📉 Too Low!'; 
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }
    //     else
    //     {
    //     document.querySelector('.message').textContent = '💥 You lost the game!'; 
    //     document.querySelector('body').style.backgroundColor = 'Red';
    //     document.querySelector('.number').textContent = secretNumber;
    //     document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener
('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing ...!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';

});
