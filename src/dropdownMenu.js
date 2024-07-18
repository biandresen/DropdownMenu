//DROPDOWN MENU MODULE:
//For function to work: Use these classnames and "px" for menu-button and menu
//OPTION 1 transition: display:"block" on className: .dropdown-menu.hide and display:"none" on .dropdown-menu
//OPTION 2 transition: opacity:"100%" on className: .dropdown-menu.hide and opacity:"0%" on .dropdown-menu + transition time
//----------------------------------------------------------------------------------------

//Import the function to other modules, declare a button and menu, then call the function with the 3 parameters.
//HOW TO USE - EXAMPLE:
// const dropdownButton = document.querySelector(".dropdown-button");
// const dropdownMenu = document.querySelector(".dropdown-menu");
// dropdownButton.addEventListener("click", () => {
//   dropdown(position(1,2 or 3), dropdownButton, dropdownMenu);
// });

function dropdown(position, dropdownButton, dropdownMenu) {
  //Set position
  setDropdownMenuPosition(position, dropdownButton, dropdownMenu);

  //Show/Hide dropdown menu
  dropdownMenu.classList.toggle("hide");
}

function setDropdownMenuPosition(position, dropdownButton, dropdownMenu) {
  //Choose position of dropdown menu relative to button (1:left | 2: middle 3: right)
  const positionSelector = position;
  //Getting the positions of button to calculate where the menu should be positioned
  const buttonLeftPosition = dropdownButton.getBoundingClientRect().left;
  const buttonTopPosition = dropdownButton.getBoundingClientRect().top;

  //Getting the size of the button and div to offset the menu correctly
  const buttonWidth = dropdownButton.offsetWidth;
  const buttonHeight = dropdownButton.offsetHeight;
  dropdownMenu.classList.toggle("hide");
  const menuWidth = dropdownMenu.offsetWidth;
  dropdownMenu.classList.toggle("hide");

  //Applying position to menu
  if (positionSelector === 1) {
    dropdownMenu.style.left = buttonLeftPosition - menuWidth + buttonWidth + "px";
    dropdownMenu.style.top = buttonTopPosition + buttonHeight + "px";
  } else if (position === 2) {
    dropdownMenu.style.left = buttonLeftPosition - menuWidth / 2 + buttonWidth / 2 + "px";
    dropdownMenu.style.top = buttonTopPosition + buttonHeight + "px";
  } else {
    dropdownMenu.style.left = buttonLeftPosition + "px";
    dropdownMenu.style.top = buttonTopPosition + buttonHeight + "px";
  }
}

export default dropdown;

//HTML:
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Dropdown Menu</title>
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
//       integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
//       crossorigin="anonymous"
//       referrerpolicy="no-referrer"
//     />
//   </head>
//   <body>
//     <button class="dropdown-button"><i class="fa-solid fa-bars fa-2xl"></i></button>
//     <div class="dropdown-menu">
//       <ul class="dropdown-list">
//         <li class="dropdown-item">Item 1</li>
//         <li class="dropdown-item">Item 2</li>
//         <li class="dropdown-item">Item 3</li>
//       </ul>
//     </div>
//   </body>
// </html>

//CSS:
// .dropdown-button {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   width: 30px;
//   height: 30px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
// }
// .dropdown-menu.hide {
//   opacity: 100%;
//   transition: opacity 0.1s ease-in-out;
// }
// .dropdown-menu {
//   position: absolute;
//   opacity: 0%;
//   transition: opacity 0.1s ease-in-out;
//   background: hsl(0, 0%, 10%);
//   width: 200px;
//   height: 200px;
//   border-radius: 8px;
//   box-shadow: -2px 2px 10px 1px rgb(100, 100, 100);
//   padding-top: 10px;
// }
// .dropdown-list {
//   list-style: none;
// }
// .dropdown-item {
//   text-indent: 15px;
//   font-size: 1.3rem;
//   font-weight: 600;
//   color: rgba(255, 255, 255, 0.85);
// }
// .dropdown-item:hover {
//   background: hsl(0, 0%, 20%);
//   cursor: default;
// }
