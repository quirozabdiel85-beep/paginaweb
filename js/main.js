const filterGroup = document.querySelector('[data-filter-group]');
const productList = document.querySelector('[data-product-list]');

if (filterGroup && productList) {
  const filterButtons = Array.from(filterGroup.querySelectorAll('[data-filter]'));
  const products = Array.from(productList.querySelectorAll('[data-category]'));

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;

      products.forEach((product) => {
        const matches = filter === 'all' || product.dataset.category === filter;
        product.style.display = matches ? 'block' : 'none';
      });
    });
  });
}

const forms = document.querySelectorAll('[data-newsletter], [data-contact-form]');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
});
