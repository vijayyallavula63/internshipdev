const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  quizData.forEach((q, index) => {
    container.innerHTML += `<p>${q.question}</p>`;
    q.options.forEach(option => {
      container.innerHTML += `
        <label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br/>
      `;
    });
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("result").innerText = `You scored ${score}/${quizData.length}`;
}

loadQuiz();
