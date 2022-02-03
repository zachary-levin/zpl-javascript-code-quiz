
var questions = [
    // Question 1
    {
        question: "What is the file format for JavaScript files?",
        possibleAnswers: [".script", ".java", ".js", ".javascript"],
        correctAnswer: ".js"
    },
    // Question 2
    {
        question: "What can you place in an array?",
        possibleAnswers: ["Only strings", "Only integers", "Only strings and integers", "Anything"],
        correctAnswer: "Anything"
    },
    // Question 3
    {
        question: "What tag do you use to link a JavaScript file in an HTML document?",
        possibleAnswers: ["<script>", "<link>"],
        correctAnswer: "<script>"
    },
    // Question 4
    // ADD REAL QUESTION
    {
        question: "What is the third choice in this question?",
        possibleAnswers: ["A", "B", "C"],
        correctAnswer: "C"
    },
    // Question 5
    // ADD REAL QUESTION
    {
        question: "What is the fourth choice in this question?",
        possibleAnswers: ["A", "B", "C", "D"],
        correctAnswer: "D"
    },
    // Question 6
    {
        question: "How do you add the equivalent of 'OR' to a loop?",
        possibleAnswers: ["OR", "||", "or", "&&"],
        correctAnswer: "||"
    },
    // Question 7 
    {
        question: "What does break do in a function?",
        possibleAnswers: ["Stops the function from working", "Exits the function", "Breaks the entire program"],
        correctAnswer: "Exits the function"
    },
    // Question 8
    // ADD REAL QUESTION
    {
        question: "Name a yellow fruit.",
        possibleAnswers: ["Banana", "Apple", "Lime", "Orange"],
        correctAnswer: "Banana"
    },
    // Question 9
    {
        question: "How do you format a variable in JavaScript?",
        possibleAnswers: ["UPPERCASE", "lowercase", "camelCase", "snake_case"],
        correctAnswer: "camelCase" 
    },
    // Question 10
    {
        question: "Which of these is NOT a type of loop?",
        possibleAnswers: ["for loop", "while", "if else"],
        correctAnswer: "if else"
    }
]


var score = 0;
var highScore = [];


//click a button
//show first question
//click a answer
//compare what they clicked to the correct answer
//if correct, show "correct!"
//if not correct, show "wrong" and deduct the score
//repeat 10 times or until last questions
//at the end show scores
