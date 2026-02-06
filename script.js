/* =====================
   MODE TOGGLE
===================== */

const modeBtn = document.getElementById("modeToggle");
modeBtn.onclick = () => {
  document.body.classList.toggle("clean");
  modeBtn.textContent = document.body.classList.contains("clean")
    ? "CYBER MODE"
    : "FAANG MODE";
};

/* =====================
   THEME SWITCH
===================== */

document.body.dataset.theme = "blue";
document.getElementById("themeSelect").onchange = e => {
  document.body.dataset.theme = e.target.value;
};

/* =====================
   TERMINAL TYPING INTRO
===================== */

const lines = [
  "Booting system...",
  "Loading projects...",
  "Solving DSA...",
  "Launching portfolio..."
];

let i = 0, j = 0;
const terminal = document.getElementById("terminalText");

function type() {
  if (i < lines.length) {
    if (j < lines[i].length) {
      terminal.textContent += lines[i][j++];
    } else {
      terminal.textContent += "\n";
      i++; j = 0;
    }
    setTimeout(type, 60);
  }
}
type();

document.getElementById("skipIntro").onclick = () =>
  document.getElementById("terminal").style.display = "none";

/* =====================
   PROJECT MODALS
===================== */

const data = {
  chatsphere: `
    <h2>ChatSphere</h2>
    <p>Real-time chat system using WebSockets.</p>
    <ul>
      <li>JWT authentication</li>
      <li>Socket.IO communication</li>
      <li>Handled disconnects & sync</li>
    </ul>
  `,
  sorting: `
    <h2>Sorting Visualizer</h2>
    <p>Visualizes classic algorithms with animations.</p>
  `,
  sudoku: `
    <h2>Sudoku Solver</h2>
    <p>Backtracking-based solver.</p>
  `,
  research: `
    <h2>Research-Connect</h2>
    <p>Faculty-student matching platform.</p>
  `
};

document.querySelectorAll(".open-modal").forEach(el => {
  el.onclick = () => {
    document.getElementById("modalBody").innerHTML =
      data[el.dataset.project];
    document.getElementById("projectModal").style.display = "block";
  };
});

document.getElementById("closeModal").onclick = () =>
  document.getElementById("projectModal").style.display = "none";
