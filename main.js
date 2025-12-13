// ========== MENU BURGER ==========
const burger = document.querySelector(".burger");
const navUl = document.querySelector("nav ul");

// Vérifier que les éléments existent
if (burger && navUl) {
  // Click normal
  burger.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });

  // Activation via clavier (Enter ou Space)
  burger.addEventListener("keydown", (e) => {
    if (e instanceof KeyboardEvent) {
      // vérifie que c'est un KeyboardEvent
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // empêche le scroll de la page sur Space
        navUl.classList.toggle("active");
      }
    }
  });

  // Fermer le menu si on clique en dehors du menu
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target instanceof Node &&
      !burger.contains(target) &&
      !navUl.contains(target)
    ) {
      navUl.classList.remove("active");
    }
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const href = anchor.getAttribute("href");
    if (!href) return;

    const target = document.querySelector(href);
    if (!target) return;

    // Fermer le menu burger si ouvert
    const navUl = document.querySelector("nav ul");
    if (navUl && navUl.classList.contains("active")) {
      navUl.classList.remove("active");
    }

    // Scroll vers la section
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// ========== FAQ TOGGLE ==========
const faqQuestions = document.querySelectorAll(".faq-question");

// Fonction toggle FAQ
function toggleAnswer() {
  const answer = this.nextElementSibling;
  if (
    answer instanceof HTMLElement &&
    answer.classList.contains("faq-answer")
  ) {
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  }
}

faqQuestions.forEach((question) => {
  // Click normal
  question.addEventListener("click", toggleAnswer);

  // ✅ Clavier : activation via Enter ou Space
  question.addEventListener("keydown", (e) => {
    if (e instanceof KeyboardEvent) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleAnswer.call(question);
      }
    }
  });
});
