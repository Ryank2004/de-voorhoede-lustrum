
let reveals = document.querySelectorAll(".reveal");
let backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", checkHeight);

function reveal() {
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  function checkHeight() {
    if(window.innerWidth <= 720) {
      if(window.scrollY > 1000) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    } else {
      backToTop.style.display = "none";
    }
  }
  
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  window.addEventListener("resize", checkHeight);
  

  
