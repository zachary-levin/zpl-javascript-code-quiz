var questions = [
    // Question 1
    {
        id: 1,
        question: "What is the file format for JavaScript files?",
        a: ".script",
        b: ".java",
        c: ".js",
        d: ".javascript",
        answer: "a"
    },
    // Question 2
    {
        id: 2,
        question: "What can you place in an array?",
        a: "Only strings",
        b: "Only integers",
        c: "Only strings and integers", 
        d: "Anything",
        answer: "d"
    },
    // Question 3
    {
        id: 3,
        question: "What tag do you use to link a JavaScript file in an HTML document?",
        a: "<script>", 
        b: "<link>",
        c: "<js>",
        d: "<html>",
        answer: "a"
    },
    // Question 4
    {
        id: 4,
        question: "Which statement lets you enter debug mode?",
        a: "debug;",
        b: "debug-mode;", 
        c: "debugger;", 
        d: "debugger-mode",
        answer: "c"
    },
    // Question 5
    {
        id: 5,
        question: "How do you add the equivalent of 'AND' to a loop?",
        a: "||",
        b: "and",
        c: "AND",
        d: "&&",
        answer: "d"
    },
    // Question 6
    {
        id: 6,
        question: "How do you add the equivalent of 'OR' to a loop?",
        a: "OR", 
        b: "||", 
        c: "or", 
        d: "&&",
        answer: "b"
    },
    // Question 7 
    {
        id: 7,
        question: "What does break do in a function?",
        a: "Stops the function from working", 
        b: "Exits the function", 
        c: "Breaks the entire program",
        d: "Breaks the rest of the program",
        answer: "b"
    },
    // Question 8
    {
        id: 8,
        question: "Consider the following code:  let str = ''; 'for (let i = 0; i < 9; i++) {str = str + i;} console.log(str); What should be the expected output? ",
        a: "123456789", 
        b: "9", 
        c: "1", 
        d: "19",
        answer: "a"
    },
    // Question 9
    {
        id: 9,
        question: "How do you format a variable in JavaScript?",
        a: "UPPERCASE", 
        b: "lowercase", 
        c: "camelCase", 
        d: "snake_case",
        answer: "c" 
    },
    // Question 10
    {
        id: 10,
        question: "Which of these is NOT a type of loop?",
        a: "for loop", 
        b:"while", 
        c: "if else", 
        d: "do-while",
        answer: "c"
    }
    
];


const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answers"));
const questionCounterText = document.getElementById('counter');
const scoreText = document.getElementById("score");

console.log(questions);
let questionCounter;
let score;
const MAX_QUESTIONS = 10;

let acceptingAnswers;

startGame = () => {
    questionCounter = 0;
    score = 0;
    acceptingAnswers = true;
    availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
        console.log(availableQuestions);
        getNewQuestion();
};

const getRandomQuestions = (arr, n) => {
    let len = arr.length;
    if (n > len){
        throw new RangeError(
            "getRandomQuestions: more elements taken than available"
        );
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return(selected = shuffled.slice(0, n));
};

const getNewQuestion = () => {
    if (availableQuestions.length === 0) {
        alert("End of the game");
        alert("You scored " + score + " points!")
        return;
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    currentQuestion = availableQuestions[0];
    console.log("current question --> ", currentQuestion.question);
    question.innerText = currentQuestion.question;
    
    answers.forEach((answer) => {
        answer.innerText = currentQuestion[answer.dataset["answer"]];
    });

    //TODO add randomization

    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
            if(!acceptingAnswers){
                //console.log("not accepting");
                return;
            }
            acceptingAnswers = false;
            const clickedAnswer = e.target;
            const answeredLetter = clickedAnswer.dataset["answer"]

            
            let classToApply = "incorrect";


            if (answeredLetter === currentQuestion.answer) {
                score++;
                scoreText.innerText = score;
                classToApply = "correct";
                console.log("correct!")
            } else {
                score--;
                scoreText.innerText = score;
                classToApply = "incorrect";
                console.log("incorrect")
            }

            clickedAnswer.parentElement.classList.add(classToApply);

            setTimeout(() => {
                clickedAnswer.parentElement.classList.add(classToApply);
                getNewQuestion();
                acceptingAnswers = true;
            }, 1000);
        });
    });
    availableQuestions.shift();
};

startGame();

var highScore = [];


//click a start button
//show first question
//click a answer
//compare what they clicked to the correct answer
//if correct, show "correct!"
//if not correct, show "wrong" and deduct the score
//repeat 10 times or until last questions
//at the end show scores
