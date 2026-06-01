const cards = document.querySelectorAll(
  ".formula-steps article, .prescription-grid article, .stats-grid article"
);

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -5;

    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateY(-3px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
