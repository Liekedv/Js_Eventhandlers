//opdracht 1
const button = document.querySelector('#mybutton');

button.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('button clicked')
});


//opdracht 2
const bodyColor = document.querySelector ("body");

const bodyColorChange = document.querySelector(".btn-color");

const changeColor = () => {
  bodyColor.classList.add("red-background");
};

bodyColorChange.addEventListener("click", changeColor);


//opdracht 3
const bodyColor = document.querySelector ("body");

const bodyColorChange = document.querySelector(".btn-color");

const toggleColor = () => {
  bodyColor.classList.toggle("red-background");
};

bodyColorChange.addEventListener("click", toggleColor);
