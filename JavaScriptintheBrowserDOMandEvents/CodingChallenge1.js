
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
let score = 20;
function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.secret-number').textContent = '?';
  document.querySelector('.guessinput').value = ''; // Reset ô input
}

function guessNumber(){
    const valueGuess = document.querySelector('.guessinput').value;
    if(!valueGuess){
       document.querySelector('.message').textContent ='Chưa nhập số!';
    }else{
        let secretNumber = Math.trunc(Math.random() * 10) + 1;
        if(valueGuess==secretNumber){
            score++;
            document.querySelector('.score').textContent = score;
            document.querySelector('.secret-number').textContent =secretNumber ;
             document.querySelector('.message').textContent ='Tiếp tục đoán';
        }else{
            document.querySelector('.message').textContent ='Sai rồi';
        }
    }
}
document.querySelector('.guess').addEventListener('click',guessNumber);
document.querySelector('.again').addEventListener('click', resetGame);

