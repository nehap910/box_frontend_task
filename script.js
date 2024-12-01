// Select all boxes
const boxes = document.querySelectorAll('.box');
if (boxes.length === 0) {
  console.error('No elements with the class `.box` were found.');
} else {
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      console.log('Box clicked');
      box.classList.toggle('expanded');
    });
  });
}



document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      // Collapse all other boxes
      boxes.forEach(b => {
        if (b !== box) {
          b.classList.remove('expanded');
        }
      });

      // Toggle expanded state for clicked box
      box.classList.toggle('expanded');
    });
  });
});





const box = document.querySelector('.box');
box.addEventListener('click', () => {
  console.log('Box clicked');
  box.classList.toggle('expanded');
});
