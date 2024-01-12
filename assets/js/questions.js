// 1. Create some questions and answers on javascript fundementals.
const questions = [
    {
        title: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']"],
        answer: "var colors = ['red', 'green', 'blue']"
    },
    {
        title: "What is the correct way to write a JavaScript for loop?",
        choices: ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
        answer: "for (i = 0; i <= 5; i++)"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function = myFunction()"],
        answer: "function myFunction()"
    },
    {
        title: "How do you call a function named 'myFunction'?",
        choices: ["call function myFunction()", "myFunction()", "call myFunction()", "call myFunction"],
        answer: "myFunction()"
    }
];
// 2. Create a function to display the questions and answers.
function displayQuestions() {
    // 2a. Create a for loop to loop through the questions array.
    for (let i = 0; i < questions.length; i++) {
        // 2b. Create a variable to hold the current question.
        const currentQuestion = questions[i];
        // 2c. Create a variable to hold the current question's title.
        const currentQuestionTitle = currentQuestion.title;
        // 2d. Create a variable to hold the current question's choices.
        const currentQuestionChoices = currentQuestion.choices;
        // 2e. Create a variable to hold the current question's answer.
        const currentQuestionAnswer = currentQuestion.answer;
        // 2f. Create a variable to hold the current question's HTML.
        const currentQuestionHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${currentQuestionTitle}</h5>
                <p class="card-text">Choices: ${currentQuestionChoices}</p>
                <p class="card-text">Answer: ${currentQuestionAnswer}</p>
            </div>
        </div>
        `;
        // 2g. Append the current question's HTML to the page.
        document.querySelector("#questions").innerHTML += currentQuestionHTML;
    }
}
// 3. Create a function to check the answers.
function checkAnswers() {
    // 3a. Create a for loop to loop through the questions array.
    for (let i = 0; i < questions.length; i++) {
        // 3b. Create a variable to hold the current question.
        const currentQuestion = questions[i];
        // 3c. Create a variable to hold the current question's answer.
        const currentQuestionAnswer = currentQuestion.answer;
        // 3d. Create a variable to hold the current question's user answer.
        const currentQuestionUserAnswer = document.querySelector(`#question-${i + 1}`).value;
        // 3e. Create a variable to hold the current question's HTML.
        const currentQuestionHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${currentQuestionTitle}</h5>
                <p class="card-text">Choices: ${currentQuestionChoices}</p>
                <p class="card-text">Answer: ${currentQuestionAnswer}</p>
            </div>
        </div>
        `;
        // 3f. Append the current question's HTML to the page.
        document.querySelector("#questions").innerHTML += currentQuestionHTML;
    }
}