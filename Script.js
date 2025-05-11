document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.product').forEach(product => {
    const name = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = name.includes(query) ? 'block' : 'none';
  });
});