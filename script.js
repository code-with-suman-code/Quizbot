let currentQuestion = 0;
let score = 0;

const dummyQuestions = [
  {
    question: "PDF parsing ho gaya. Pehla sawal: Capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: 1
  },
  {
    question: "PDF parsing complete. Dusra sawal: 2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: 1
  }
];

function handlePDF() {
  const file = document.getElementById('pdfInput').files[0];
  if (!file) return alert("Please select a PDF file first.");

  document.getElementById('loading').style.display = 'block';

  // Simulating PDF processing
  setTimeout(() => {
    document.getElementById('uploadSection').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    showQuestion();
  }, 2000);
}

function showQuestion() {
  const q = dummyQuestions[currentQuestion];
  document.getElementById('questionBox').innerText = q.question;
  const optionsBox = document.getElementById('optionsBox');
  optionsBox.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx, btn);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected, btn) {
  const correct = dummyQuestions[currentQuestion].answer;
  const buttons = document.querySelectorAll('#optionsBox button');

  buttons.forEach(b => b.disabled = true);

  if (selected === correct) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    buttons[correct].classList.add('correct');
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < dummyQuestions.length) {
    showQuestion();
  } else {
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('scoreBox').innerText = `You got ${score} out of ${dummyQuestions.length} correct.`;
  }
}

function quitQuiz() {
  location.reload();
}
