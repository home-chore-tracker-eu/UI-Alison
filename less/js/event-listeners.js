
const leftBtn = document.querySelector('.left-button');

leftBtn.addEventListener('click', function (element) {
  element.target.style.color = '#FF7F50';
  element.target.style.border.display = 'block';
});

const rightBtn = document.querySelector('.right-button');

rightBtn.addEventListener('click', function (element) {
  element.target.style.color = '#FF7F50';
  element.target.style.border.display = 'block';
});

const divContainer = document.querySelector('.container');
divContainer.addEventListener('mouseenter', function(element) {
  console.log(`Your mouse position - X: ${element.offsetX}, Y: ${element.offsetY}`);
})