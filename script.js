const newsletterForms = document.querySelectorAll(".newsletter form");
newsletterForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.querySelector("input[type='email']");
    if (!email || !email.value) {
      alert("Por favor ingresa tu correo para suscribirte.");
      return;
    }
    alert(`Gracias por suscribirte, ${email.value}! Pronto recibirás novedades.`);
    form.reset();
  });
});

const filterSelect = document.querySelector("[data-filter='category']");
const brandSelect = document.querySelector("[data-filter='brand']");
const searchInput = document.querySelector("[data-filter='search']");
const productCards = document.querySelectorAll("[data-product-card]");

function applyFilters() {
  const category = filterSelect?.value || "all";
  const brand = brandSelect?.value || "all";
  const query = (searchInput?.value || "").toLowerCase();

  productCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const cardBrand = card.dataset.brand;
    const title = card.querySelector("h3")?.textContent?.toLowerCase() || "";
    const matchCategory = category === "all" || cardCategory === category;
    const matchBrand = brand === "all" || cardBrand === brand;
    const matchQuery = !query || title.includes(query);
    card.style.display = matchCategory && matchBrand && matchQuery ? "block" : "none";
  });
}

[filterSelect, brandSelect, searchInput].forEach((element) => {
  if (element) {
    element.addEventListener("input", applyFilters);
  }
});
