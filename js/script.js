const toggle = document.querySelector(".material-symbols-outlined");
const links = document.getElementById("links");

toggle.addEventListener("click", () => {
  // Toggle the 'show' class on the 'links' element
  links.classList.toggle("show");

  // Change the icon and body scroll behavior based on the menu's state
  if (links.classList.contains("show")) {
    toggle.textContent = "close"; // Change icon to 'close'
    document.body.classList.add("no-scroll"); // Prevent body scrolling
  } else {
    toggle.textContent = "menu"; // Change icon back to 'menu'
    document.body.classList.remove("no-scroll"); // Allow body scrolling
  }
});
const year = document.querySelector(".year");
date = new Date().getFullYear();
year.textContent = date;
