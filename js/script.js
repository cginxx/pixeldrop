const toggle = document.querySelector(".material-symbols-outlined");
const links = document.getElementById("links");

toggle.addEventListener("click", () => {
  
  links.classList.toggle("show");

  
  if (links.classList.contains("show")) {
    toggle.textContent = "close";
    document.body.classList.add("no-scroll");
  } else {
    toggle.textContent = "menu"; 
    document.body.classList.remove("no-scroll"); 
  }
});
const year = document.querySelector(".year");
date = new Date().getFullYear();
year.textContent = date;
