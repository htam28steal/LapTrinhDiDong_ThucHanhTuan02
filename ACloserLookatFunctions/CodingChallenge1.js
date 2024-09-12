// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0), 
  
    registerNewAnswer(answer) {
  
        answer.forEach(element => {
            let answerNum = element;
            if (answerNum >= 0 && answerNum < 4) {
              this.answers[answerNum]++;
            } else {
              console.log('Invalid input! Please enter a valid number.');
            }
        });
        return this.answers;
    }
  };
  let answers = [1,1,1,1,1]
  console.log(poll.registerNewAnswer(answers))

//   1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)

let answers1 = ['1',2,'3',2,'1',1];

function checkTypeNumber(arr){
    let answerAfterCheck =[];
    arr.forEach(element=>{
        if(typeof element ==='number'){
            answerAfterCheck.push(element);
        }
    });
    return answerAfterCheck;
}
console.log(checkTypeNumber(answers1))
let afterCheck = checkTypeNumber(answers1)
console.log(poll.registerNewAnswer(afterCheck))


