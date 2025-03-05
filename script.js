menuDisplay = document.getElementById("menu-mobile-parent")
function showMobileMenu(){
    menuDisplay.style.display = "block"
}

function hideMobileMenu(){
    menuDisplay.style.display = "None"
}

let index = 0;
showSlides();


const buttons = Array.from(document.getElementsByTagName("button"))
console.log(buttons)
buttons.forEach(element => {
  element.addEventListener("click", () => {
    alert("Work in progress");
  });
});


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("card-img");
  let text = document.getElementsByClassName("card-text");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < slides.length; i++) {
    text[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
  slides[index-1].style.display = "block";  
  text[index-1].style.display = "flex";
  setTimeout(showSlides, 2000); 
}