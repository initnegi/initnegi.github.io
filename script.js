const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transitionDelay = `${index * 120}ms`;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll("section, .project-card, .skills-list li")
  .forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.7s ease";
    observer.observe(el);
  });

