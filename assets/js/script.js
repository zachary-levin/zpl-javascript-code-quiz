var questions = [
    // Question 1
    {
        id: 1,
        question: "What is the file format for JavaScript files?",
        
        //MAY HAVE TO CHANGE ANSWERS FROM AN ARRAY TO "a: '.script', b:'.java', c: '.js', and 'd: .javascript'"
        
        possibleAnswers: [".script", ".java", ".js", ".javascript"],
        correctAnswer: ".js"
    },
    // Question 2
    {
        id: 2,
        question: "What can you place in an array?",
        possibleAnswers: ["Only strings", "Only integers", "Only strings and integers", "Anything"],
        correctAnswer: "Anything"
    },
    // Question 3
    {
        id: 3,
        question: "What tag do you use to link a JavaScript file in an HTML document?",
        possibleAnswers: ["<script>", "<link>"],
        correctAnswer: "<script>"
    },
    // Question 4
    // ADD REAL QUESTION
    {
        id: 4,
        question: "What is the third choice in this question?",
        possibleAnswers: ["a", "b", "c"],
        correctAnswer: "c"
    },
    // Question 5
    // ADD REAL QUESTION
    {
        id: 5,
        question: "What is the fourth choice in this question?",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "d"
    },
    // Question 6
    {
        id: 6,
        question: "How do you add the equivalent of 'OR' to a loop?",
        possibleAnswers: ["OR", "||", "or", "&&"],
        correctAnswer: "||"
    },
    // Question 7 
    {
        id: 7,
        question: "What does break do in a function?",
        possibleAnswers: ["Stops the function from working", "Exits the function", "Breaks the entire program"],
        correctAnswer: "Exits the function"
    },
    // Question 8
    // ADD REAL QUESTION
    {
        id: 8,
        question: "Name a yellow fruit.",
        possibleAnswers: ["Banana", "Apple", "Lime", "Orange"],
        correctAnswer: "Banana"
    },
    // Question 9
    {
        id: 9,
        question: "How do you format a variable in JavaScript?",
        possibleAnswers: ["UPPERCASE", "lowercase", "camelCase", "snake_case"],
        correctAnswer: "camelCase" 
    },
    // Question 10
    {
        id: 10,
        question: "Which of these is NOT a type of loop?",
        possibleAnswers: ["for loop", "while", "if else"],
        correctAnswer: "if else"
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
        return;
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    currentQuestion = availableQuestions[0];
    console.log(currentQuestion);
    question.innerText = currentQuestion.question;
    
    answers.forEach((answer) => {
        answer.innerText = currentQuestion[answer.dataset["answer"]];
    });

    //TODO add randomization

    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
            if(!acceptingAnswers){
                console.log("not accepting");
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
