const techniques = {
  "box-breathing": { duration: 16 },
  "four-seven-eight": { duration: 19 },
  "resonant": { duration: 10 },
  "deep-breathing": { duration: 24},
};

document.querySelectorAll(".start-breathing").forEach((button) => {
  button.addEventListener("click", () => {
    const parentBox = button.closest(".bento-item");
    const circle = parentBox.querySelector(".breathing-circle");
    const techniqueId = parentBox.id;
    const { duration } = techniques[techniqueId];

    if (circle.classList.contains("breathing")) {
      circle.classList.remove("breathing");
      button.textContent = "Start Breathing";
      circle.style.animationDuration = "0s";
    } else {
      circle.classList.add("breathing");
      button.textContent = "Stop Breathing";
      circle.style.animationDuration = `${duration}s`;
    }
  });
});

// Burger menu
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  navLinks.classList.toggle("open");
});



