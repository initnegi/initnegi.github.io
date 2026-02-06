// Theme switcher (dark only)
document.getElementById("themeSelect").addEventListener("change", (e) => {
  document.body.dataset.theme = e.target.value;
});
