/* =====================
   GLITCH CURSOR
===================== */

const cursor = document.createElement("div");
cursor.style.cssText = `
  position: fixed;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #00f5ff;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 20px #00f5ff;
`;
document.body.appendChild(cursor);

window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX - 7 + "px";
  cursor.style.top = e.clientY - 7 + "px";
});

/* =====================
   SECTION REVEAL
===================== */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section, .project-card").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(80px)";
  el.style.transition = "all 1s cubic-bezier(.16,1,.3,1)";
  observer.observe(el);
});

/* =====================
   NEON PARTICLES
===================== */

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.inset = "0";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const particles = Array.from({ length: 90 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: Math.random() * 2 + 1,
  dx: Math.random() * 0.6,
  dy: Math.random() * 0.6
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,245,255,0.6)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();
