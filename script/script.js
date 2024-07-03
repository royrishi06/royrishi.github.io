// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


// code for the typewriter effect
document.addEventListener("DOMContentLoaded", function() {
    function typeWriter(element, text, speed) {
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }
  
    const heroTitle = document.getElementById("heroTitle");
    const heroDesc = document.getElementById("heroDesc");
  
    typeWriter(heroTitle, "Hi, I'm Rishi", 100);
    setTimeout(() => typeWriter(heroDesc, "I am a Software Engineer currently studying at DTU", 100), 1500);
  });