const technologies = document.querySelector('.technologies-wrap');
const tabBtn = document.querySelectorAll('.tab-btn');
const techContent = document.querySelectorAll('.tech-content');


technologies.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    if(id){
        tabBtn.forEach(function(btn){
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        techContent.forEach(function (content){
            content.classList.remove('active');
        });

        const elem = document.getElementById(id);
        elem.classList.add('active');
    }
});


const references = document.querySelectorAll('.site-recomend-box');

references.forEach(function(reference){
  const recomendBtn = reference.querySelector('.recomend-btn');
  
  recomendBtn.addEventListener('click', ()=> {

    references.forEach(function (item) {
      if (item !== reference) {
        item.classList.remove("show-text");  
      }
      reference.classList.toggle("show-text");  
    });
  });
})