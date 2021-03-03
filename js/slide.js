const SHOWING_CLASS = 'showing'
const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
const firstSlide = document.querySelector('.slide:first-child');  

const pauseBtn = document.querySelector('.pause-btn');
const playBtn = document.querySelector('.play-btn');


function slideEvent(){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
       const nextSlide = currentSlide.nextElementSibling;
       if(nextSlide){
        nextSlide.classList.add(SHOWING_CLASS);
       } else {
           firstSlide.classList.add(SHOWING_CLASS);
       }
    } else{
        firstSlide.classList.add(SHOWING_CLASS);
    } 
}
slideEvent();

// 슬라이드 정지 및 재시작
let t = 0;
let setId = setInterval(slideEvent, 3000);

function playBtnEvent(){
    if(t==0){
        t=1;
        clearInterval(setId);
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'block';
    } else {
        t=0;
        setId = setInterval(slideEvent, 3000);
        pauseBtn.style.display = 'block';
        playBtn.style.display = 'none';
    }
}

document.querySelector('.pause-play-wrap').addEventListener('click', playBtnEvent);