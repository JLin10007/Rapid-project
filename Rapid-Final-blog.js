  const categoryItems = document.querySelectorAll('.category-item');
  const newsBoxes = document.querySelectorAll('.news-box');

  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      const selectedCategory = item.getAttribute('data-category');

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
