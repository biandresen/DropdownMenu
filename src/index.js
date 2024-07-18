import "./assets/styles/style.css";
import dropdown from "./dropdownMenu";

const dropdownButton = document.querySelector("#btn1");
const dropdownMenu = document.querySelector("#menu1");
dropdownButton.addEventListener("click", () => {
  dropdown(1, dropdownButton, dropdownMenu);
});

const dropdownButton2 = document.querySelector("#btn2");
const dropdownMenu2 = document.querySelector("#menu2");
dropdownButton2.addEventListener("click", () => {
  dropdown(3, dropdownButton2, dropdownMenu2);
});
