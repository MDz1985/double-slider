const leftSection = document.querySelector('.leftSection');
const rightSection = document.querySelector('.rightSection');
const upButton = document.querySelector('.upButton');
const downButton = document.querySelector('.downButton');

const slidesCount = rightSection.children.length;

let firstRight = rightSection.children[0];
let cloneFirstRight = firstRight.cloneNode(true);  //copy of the first right slide 
rightSection.insertBefore(cloneFirstRight,rightSection.lastChild);

let lastRight = rightSection.children[slidesCount - 1];
let cloneLastRight = lastRight.cloneNode(true);  //copy of the last right slide 
rightSection.insertBefore(cloneLastRight,rightSection.firstChild);

let firstLeft = leftSection.children[slidesCount - 1];
let cloneFirstLeft = firstLeft.cloneNode(true);  //copy of the first left slide 
leftSection.insertBefore(cloneFirstLeft,leftSection.firstChild);

let lastLeft = leftSection.children[1];
let clonelastLeft = lastLeft.cloneNode(true);  //copy of the first left slide 
leftSection.insertBefore(clonelastLeft,leftSection.lastChild);

rightSection.style.top = '-100vh';
leftSection.style.top = -slidesCount * 100 + 'vh';

let slideIndex = 0;

upButton.addEventListener('click', () =>{
    if (timer == true) { 
        changeSlide('up')
      
        timer = false; 
        timeOut();   
        }
})

downButton.addEventListener('click', () =>{
    if (timer == true) { 
        changeSlide('down')
        
        timer = false; 
        timeOut();   
        }
})


function timeOut() {
    setTimeout(function() {timer = true;}, 500)
}