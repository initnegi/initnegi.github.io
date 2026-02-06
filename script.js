/* MODE TOGGLE */
const modeBtn = document.getElementById("modeToggle");

modeBtn.onclick = () => {
  document.body.classList.toggle("clean");
  modeBtn.textContent =
    document.body.classList.contains("clean")
      ? "CYBER MODE"
      : "FAANG MODE";
};

/* THEME SWITCH */
document.getElementById("themeSelect").onchange = (e) => {
  document.body.dataset.theme = e.target.value;
};
