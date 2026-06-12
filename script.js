const bioToggle = document.querySelector("[data-bio-toggle]");
const bioCard = document.querySelector("#bio-card");

if (bioToggle && bioCard) {
  bioToggle.addEventListener("click", () => {
    const isHidden = bioCard.hasAttribute("hidden");
    bioCard.toggleAttribute("hidden", !isHidden);
    bioToggle.setAttribute("aria-expanded", String(isHidden));
  });
}
