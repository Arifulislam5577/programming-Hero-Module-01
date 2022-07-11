const body = document.querySelector(".body");
const button = document.querySelector(".button");
const colorName = document.querySelector(".colorName");

const colors = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const colorGenerator = function () {
  let color = "";
  for (let i = 0; i <= 5; i++) {
    const randomNumber = Math.floor(Math.random() * 21);
    color += `${colors[randomNumber]}`;
  }

  return color;
};

button.addEventListener("click", function () {
  const color = colorGenerator();
  colorName.textContent = ` - #${color}`;
  body.style.backgroundColor = `#${color}`;
});
