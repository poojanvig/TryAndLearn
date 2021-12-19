const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".Option-container");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// push the questions into availableQuestions Array
function setAvailableQuestions() {
  const totalQuestions = quiz.length;
  for (let i = 0; i < totalQuestions; i++) {
    availableQuestion.push(quiz[i]);
  }
  // console.log(availableQuestion)
}
//  set question number and question and option
function getNewQuestion() {
  // set question number
  questionNumber.innerHTML =
    "Question " + (questionCounter + 1) + " of " + quiz.length;

  // set questions text
  // get random questions
  const questionIndex =
    availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  // console.log(questionIndex)
  // get the position of 'questionIndex' from the availableQuestion Array;
  const index1 = availableQuestion.indexOf(questionIndex);
  // remove the 'questionIndex' from the availableQuestion Array,so that the questions does not repeat
  availableQuestion.splice(index1, 1);
  // console.log(questionIndex)
  // console.log(availableQuestion)

  // set options
  // get the length of options
  const optionLen = currentQuestion.options.length;
  // console.log(currentQuestion.options)

  // to put options into availableOptions Array
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }
  optionContainer.innerHTML = "";
  // console.log(availableOptions)
  let animationDelay = 0.2;
  // creating options in html
  for (let i = 0; i < optionLen; i++) {
    // random option
    const optonIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    // get the position of  'optonIndex' from the 'availableOptions'
    const index2 = availableOptions.indexOf(optonIndex);
    // remove the 'optonIndex' from the 'availableOptions', so that the opy
    availableOptions.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optonIndex];
    option.id = optonIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.2;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }
  questionCounter++;
}
// grtting result of current attemp question
function getResult(element) {
  const id = parseInt(element.id);
  // get the answer by comparing the id of clicked option
  console.log(typeof id);
  if (id === currentQuestion.answer) {
    // green -->correct
    element.classList.add("correct");
    correctAnswers++;
  } else {
    // red-->wrong
    element.classList.add("wrong");

    // if the answer  is incorrect then show correct option
    const optioLen = optionContainer.children.length;
    for (let i = 0; i < optioLen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }
  // console.log(optonElement)
  attempt++;
  unclickableOptions();
}
// making all the option unclicable once the option is selected
function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add("answered");
  }
}
function next() {
  if (questionCounter === quiz.length) {
    console.log("quiz over");
    quizOver();
  } else {
    getNewQuestion();
  }
}

function quizOver() {
  // hide quizbox
  quizBox.classList.add("hide");

  // resultBox
  resultBox.classList.remove("hide");
  quizResult();
}

function quizResult() {
  resultBox.querySelector(".total-questions").innerHTML = quiz.length;
  resultBox.querySelector(".total-attemps").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  resultBox.querySelector(".total-score").innerHTML =
    correctAnswers + "/" + quiz.length;
  // console.log(correctAnswers);
  var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
// var score = 5; //this needs to be changed with current score

var scores = localStorage.getItem("scores");

//checking if scores named object present or not in localstorage
if (scores == null || scores == undefined) {
  //if not present
  scores = [{ date: today, score: correctAnswers }]; // creating new
  var strScores = JSON.stringify(scores); // converting to string
  localStorage.setItem("scores", strScores); // storing in local storage
} else {
  //if present
  scores = JSON.parse(scores); // string to object / array converting

  //adding new data to current array
  scores.push({ date: today, score: correctAnswers }); // replace values with latest score
  strScores = JSON.stringify(scores); // converting to string
  localStorage.setItem("scores", strScores); // storing in local storage
}

}

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
}

function tryAgain() {
  // hide resultbox
  resultBox.classList.add("hide");
  // show quizebok
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}
function backToHome() {
  // hide result
  resultBox.classList.add("hide");
  // show result
  homeBox.classList.remove("hide");
  resetQuiz();
}
// starting  quiz
function startQuiz() {
  // hide home box
  homeBox.classList.add("hide");
  // shom quiz box
  quizBox.classList.remove("hide");

  // first we will set all questions in availableQuestion Array
  setAvailableQuestions();
  // second we will call  getNewQuestion(); function
  getNewQuestion();
}
