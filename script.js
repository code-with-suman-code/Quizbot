const quiz = [
  { q: "What is the capital of India?", o: ["Mumbai", "Delhi", "Kolkata", "Chennai"], a: "Delhi" },
  { q: "Which planet is known as Red Planet?", o: ["Earth", "Mars", "Venus", "Jupiter"], a: "Mars" },
  { q: "What is H2O?", o: ["Water", "Salt", "Oxygen", "Acid"], a: "Water" }
];

let current = 0, score = 0;
const quizBox = document.getElementById("quiz");

function render() {
  if (current >= quiz.length) {
    quizBox.innerHTML = `<h2>Quiz Over</h2><p>Your score: ${score} / ${quiz.length}</p><p>🙏 Please give me another sheet.</p>`;
    return;
  }

  const q = quiz[current];
  quizBox.innerHTML = `
    <div class='question'>Q${current + 1}. ${q.q}</div>
    ${q.o.map(opt => `<div class='option' onclick='check(this, "${opt}", "${q.a}")'>${opt}</div>`).join("")}
    <div class='quit' onclick='quitQuiz()'>❌ Quit</div>
  `;
}

function check(elem, selected, correct) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => {
    opt.onclick = null;
    if (opt.innerText === correct) opt.classList.add("correct");
    else if (opt.innerText === selected) opt.classList.add("wrong");
  });
  if (selected === correct) score++;
  setTimeout(() => { current++; render(); }, 1000);
}

function quitQuiz() {
  quizBox.innerHTML = `<p>❌ You quit the quiz.</p>`;
}

render();
