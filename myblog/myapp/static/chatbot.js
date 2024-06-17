
const questions = [
    {
      question: "Do you feel happy?",
      options: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a",
      correctResponse: "Super!",
      incorrectResponse: "I am sorry to hear that"
    },
   
    {
      question: "Do you like programming?",
      options: {
        a: "Yes, I love it!",
        b: "Not really"
      },
      correctAnswer: "a",
      correctResponse: "That's awesome!",
      incorrectResponse: "Perhaps it's an acquired taste!"
    },
    {
      question: "Is JavaScript your favorite language?",
      options: {
        a: "Absolutely",
        b: "No, I prefer other languages"
      },
      correctAnswer: "a",
      correctResponse: "JavaScript is great!",
      incorrectResponse: "Everyone has their own favorite!"
    }
  ];
  let currentQuestionIndex = 0;
  let chatContainer = document.getElementById("chat-container");
  let chatForm = document.getElementById("chat-form");
  let userInput = document.getElementById("user-input");
  displayQuestion();
  
  function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join('<br>');
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
  
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;
    chatContainer.appendChild(botResponse);
  }
  
  function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let userResponse = userInput.value.toLowerCase();
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);
  
    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> `;
  
    if (userResponse === currentQuestion.correctAnswer) {
      botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
      botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);
  
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    displayQuestion();
    scrollChatContainerToBottom();
  });
  