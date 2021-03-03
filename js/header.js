const headerBg = document.getElementById("header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener('scroll', ()=> {
    const scrolled = window.scrollY;
    if(scrolled>=30){
        headerBg.classList.add("show-bg");
    }else {
        headerBg.classList.remove("show-bg");
    }
});

function navEvent(){
    navLinks.classList.toggle("show-nav");

    if( navLinks.classList.contains("show-links") ){
        navLinks.classList.remove("show-links");
    }else {
        navLinks.classList.add("show-links");
    }
}
navToggle.addEventListener("click", navEvent);
