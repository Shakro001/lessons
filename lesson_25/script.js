
"use strict"



const bodyElement = document.body

document.addEventListener('click', addActive)


function addActive(event){
    const objectElement = event.target;
    if(objectElement.closest('.item')){
        objectElement.classList.toggle('active')
    }
}

window.addEventListener('load',pageLoaded)

function pageLoaded(event){
    const bodyElement = document.body;
    bodyElement.classList.add('opacity')
}


const headerElement = document.querySelector('.header')
const footerElement = document.querySelector('.footer')
headerElement.addEventListener("mouseenter", header);
headerElement.addEventListener("mouseleave", header);
function header(event){
    if(event.type === 'mouseenter'){
      footerElement.classList.add('footer--bg');  
    }else{
        footerElement.classList.remove('footer--bg')
    }
    
}


// ВАРІАНТ З ДЕЛЕГУВАННЯМ, ЧОМУСЬ ВСЕ ПРАЦЮЄ НО ПОКАЗУЄ ПОМИЛКУ. Чому?

// document.addEventListener("mouseenter", handleMouseInOut);
// document.addEventListener("mouseleave", handleMouseInOut);

// function handleMouseInOut(event) {
//     const targetElement = event.target;

//     if (targetElement.closest('.header')) {
//         if (event.type === 'mouseenter') {
//             footerElement.classList.add('footer--bg');
//         } else {
//             footerElement.classList.remove('footer--bg');
//         }
//     }
// }





const items = document.querySelectorAll('.item-two');


function updateItemContent(item) {
    const currentNumber = parseInt(item.textContent);
    const maxNumber = parseInt(item.dataset.maxNumber);

    if (currentNumber < maxNumber) {
        item.textContent = currentNumber + 1;
    }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startIntervalForVisibleItems() {
    items.forEach(item => {
        if (isElementInViewport(item) && !item.dataset.intervalStarted) {
            const delay = parseInt(item.dataset.delay);
            const interval = setInterval(() => updateItemContent(item), delay);

        
            item.dataset.intervalId = interval;

            item.dataset.intervalStarted = true;
        }
    });
}


window.addEventListener('scroll', startIntervalForVisibleItems);
window.addEventListener('resize', startIntervalForVisibleItems);


startIntervalForVisibleItems();
