/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

function menuMaker(list) {
  const menu = document.createElement('div');
  const parentList = document.createElement('ul');
  menu.classList.add('menu');
  menu.appendChild(parentList);
  list.forEach(i => {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    parentList.appendChild(listItem);
  });
  const menuContainer = document.querySelector('.menu-button');
  const header = document.querySelector('.header');
  header.appendChild(menu);
  menu.style.opacity = '0';
  menuContainer.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    menu.style.transition = 'all ease-in 1s';
    menu.style.opacity = '1';
  });
  //gsap animation
  menuContainer.onclick = function() {
    TweenLite.to(menu, 0.2, {left: "0", opacity: 0.95});
    if(menu.style.left == "0px") {
      TweenLite.to(menu, 0.2, {left: "-600px", opacity: 0.5});
    }
  }

  //header animation
  gsap.from(header, {
    opacity: 0,
    y: -120,
    duration: 1.2
  });

  return menu;
}
menuMaker(menuItems);