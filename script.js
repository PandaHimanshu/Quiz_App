const questions = [
    {
      id: 1,
      question: "Which of the following is not a primitive data type in JavaScript?",
      options: ["string", "number", "boolean", "array"],
      correctAnswer: "array"
    },
    {
      id: 2,
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: ["the current function", "the global object", "the calling object", "the parent function"],
      correctAnswer: "the calling object"
    },
    {
      id: 3,
      question: "What method is used to remove the last element from an array and return that element?",
      options: ["pop()", "shift()", "remove()", "slice()"],
      correctAnswer: "pop()"
    },
    {
      id: 4,
      question: "What is the result of 'typeof undefined' in JavaScript?",
      options: ["undefined", "null", "object", "string"],
      correctAnswer: "undefined"
    },
    {
      id: 5,
      question: "Which of the following is used to declare a constant variable in JavaScript?",
      options: ["var", "let", "const", "const var"],
      correctAnswer: "const"
    },
    {
      id: 6,
      question: "What is the purpose of the 'break' statement in JavaScript?",
      options: ["to end the current loop or switch statement", "to exit a function", "to create a line break in code", "to skip the current iteration of a loop"],
      correctAnswer: "to end the current loop or switch statement"
    },
    {
      id: 7,
      question: "What does NaN stand for in JavaScript?",
      options: ["Not a Null", "Not a Number", "Null and None", "Neither a Null nor a Number"],
      correctAnswer: "Not a Number"
    },
    {
      id: 8,
      question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
      options: ["push()", "append()", "addToEnd()", "concat()"],
      correctAnswer: "push()"
    },
    {
      id: 9,
      question: "What is the result of the expression '5 == '5' in JavaScript?",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: "true"
    },
    {
      id: 10,
      question: "What is the JavaScript operator used for concatenating two or more strings?",
      options: ["&", "+", "*", "||"],
      correctAnswer: "+"
    }
  ];

  let data;
  let i=0;
  let correct=0;
  let wrong =0;
  const showquestion = document.querySelector(".question")
  const options=document.querySelectorAll(".options")

  function getquestion(){
    if(i==questions.length){
        endQuiz();
    }
    data=questions[i]
    showquestion.innerText=`${i+1}.${data.question}`
    options[0].innerHTML=`<input name="option" type="radio"> ${data.options[0]}`
    options[1].innerHTML=`<input name="option" type="radio"> ${data.options[1]}`
    options[2].innerHTML=`<input name="option" type="radio"> ${data.options[2]}`
    options[3].innerHTML=`<input name="option" type="radio"> ${data.options[3]}`
    console.log(data)
  }
  function getAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.nextSibling.textContent.trim(); // Get the text content of the selected option

        if (userAnswer === data.correctAnswer) {
            correct++
            console.log(correct)
        } else {
            wrong++
        }
    } 
    i++;
    getquestion()
}
    document.getElementById("check").addEventListener("click",(e)=>{
    document.querySelector("p").textContent=`The previous answer is : ${data.correctAnswer}`
    nextquiz()
  })
  function nextquiz(){
    getAnswer()

  }
  function endQuiz(){
    document.querySelector(".card").innerHTML=`
    <h1>Thank you for playing the Quiz</h1>
    <p></p>
    <h2>${correct}/${questions.length} are correct</h2>`
  }
getquestion()
