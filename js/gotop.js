const goTopBtn = document.querySelector('.goTop-Btn');


window.addEventListener('scroll', ()=> {
    const scrolled = window.scrollY;
    if(scrolled>=30){
        goTopBtn.classList.add('scrollEvent');
    } else {
        goTopBtn.classList.remove('scrollEvent');
    }
});

goTopBtn.addEventListener('click', ()=> {
    window.scroll({
        behavior: 'smooth',
        top: 0,
        left: 0
    });
});