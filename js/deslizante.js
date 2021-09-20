const deslizante = document.querySelector('.deslizante');

const leftArrow = document.querySelector('.esq');
const rightArrow = document.querySelector('.dir');

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 0;
    deslizante.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
})

rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
    deslizante.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
})
