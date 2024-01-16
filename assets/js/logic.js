// Function to start the quiz
function startQuiz() {
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
  
    // Initialize variables
    let currentQuestionIndex = 0;
    let timer = 1000;
  
    // Function to display current question
    function displayQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      document.getElementById('question-title').textContent = currentQuestion.title;
  
      const choicesContainer = document.getElementById('choices');
      choicesContainer.innerHTML = '';
  
      currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => handleAnswer(index));
        choicesContainer.appendChild(button);
      });
    }
  
    // Function to handle user's answer
    function handleAnswer(choiceIndex) {
      const currentQuestion = questions[currentQuestionIndex];
  
      if (currentQuestion.choices[choiceIndex] === currentQuestion.answer) {
        // Correct answer
        document.getElementById('feedback').textContent = 'Correct!';
        // Add 10 seconds to the timer (modify as needed)
        timer += 10;
      } else {
        // Incorrect answer, subtract time
        document.getElementById('feedback').textContent = 'Incorrect!';
        // Subtract 10 seconds from the timer (modify as needed)
        timer -= 10;
      }
  
      // Move to the next question
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        // End the quiz when all questions are answered
        endQuiz();
      }
    }
  
    // Function to end the quiz
    function endQuiz() {
      clearInterval(timer);
      document.getElementById('questions').classList.add('hide');
      document.getElementById('end-screen').classList.remove('hide');
  
      // Display the final score
      document.getElementById('final-score').textContent = timer;
    }
  
    // Start the timer (modify as needed)
    timer = setInterval(() => {
      // Update the displayed time
      document.getElementById('time').textContent = timer;
  
      // End the quiz when time reaches 0
      if (timer <= 0) {
        endQuiz();
      }
  
      // Subtract 1 second from the timer
      timer--;
    }, 100);
  
    // Display the first question
    displayQuestion();
  }
  
  document.getElementById('start').addEventListener('click', startQuiz);