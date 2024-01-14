"use strict"



const bodyElement = document.body;
console.log(bodyElement)



function addList(li){
   const olElement = document.createElement('ol');
    bodyElement.prepend(olElement) 
    const liElement = document.createElement('li')
    for(let i = 0; i<li;i++){
     const liElement = document.createElement('li')
      olElement.insertAdjacentElement('afterbegin',liElement) 


    }
        
      
   
    

}

addList(3)
bodyElement.className = 'loaded'
if(bodyElement.classList.toggle){
    
    bodyElement.style.color= 'green'
}else{
    console.log('помилка!')
}


const liElements = document.querySelectorAll('li')
liElements.forEach((liElements,index) => {
    liElements.classList.add('item','active');
    liElements.innerText = `елемент №${++index}`
    
})



// let speed = parseFloat(link.dataset.speed)

const button = document.querySelector('.button')
let positionScroll = button.dataset.moove
console.log(positionScroll)
button.scrollIntoView({
    block: positionScroll,
    behavior: 'smooth'
    
})









const link = document.querySelector('.link')
let anim = link.dataset.anim;
if(anim < 200){
    link.style.cssText = `
    color: red;
    font-size: 25px;
    `
}





