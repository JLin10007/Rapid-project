const categoryItems = document.querySelectorAll('.category-item');
const newsBoxes = document.querySelectorAll('.news-box');
const heading = document.getElementById('current-category-heading');

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedCategory = item.getAttribute('data-category');

    // Update the heading text
    heading.textContent = `Category: ${selectedCategory}`;

    // Show/hide news boxes by category
    newsBoxes.forEach(box => {
      const boxCategory = box.getAttribute('data-category');

      if (boxCategory === selectedCategory || selectedCategory === 'All') {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });
});