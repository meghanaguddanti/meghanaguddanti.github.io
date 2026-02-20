// Mode Toggle + Reveal on Scroll
(function () {
  const buttons = document.querySelectorAll(".mode-btn");
  const modeTexts = document.querySelectorAll(".mode-text");
  const modeBlocks = document.querySelectorAll(".mode-block");

  function setMode(mode) {
    buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
    modeTexts.forEach(el => el.classList.toggle("hidden", el.dataset.mode !== mode));
    modeBlocks.forEach(el => el.classList.toggle("hidden", el.dataset.mode !== mode));
    localStorage.setItem("profileMode", mode);
  }

  buttons.forEach(btn => btn.addEventListener("click", () => setMode(btn.dataset.mode)));
  setMode(localStorage.getItem("profileMode") || "fullstack");

  // Reveal animation
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
})();
