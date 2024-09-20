// function with DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("changecolorbtn");
  const colors = ["red", "blue", "green", "yellow", "purple"];
  // function with click event and randomColor
  button.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    this.style.backgroundColor = randomColor;
  });
});
