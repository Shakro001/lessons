"use strict"

const bodyElement = document.body
console.log(bodyElement)


function listAdd(li){
const bodyElement = document.body;
const list = bodyElement.insertAdjacentHTML('afterbegin', '<ol>');
const listSearch = document.querySelector("ol")
  
for(let i = 0; i < li; i++){
    const listItem = document.createElement('li');  
    listSearch.prepend(listItem)
}
}

listAdd()


bodyElement.classList.add('loaded')
if(bodyElement.classList.contains('loaded')){
    bodyElement.style.color = "green"
}else{
    console.log('такого класу не існує!!!')
}




const itemElements = document.querySelectorAll(".item");
itemElements.forEach((item, index) => {
    item.classList.add('active');
    item.textContent = `пункт #${index + 1}`;
});

const button = document.querySelector(".button");
function scrollToButton(element){
    element.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    })
}

scrollToButton(button)


const link = document.querySelector(".link")
let dataLink = link.dataset.link

console.log(dataLink)
if(dataLink<200){
    console.log('воно меньше')
    link.style.color = `red`
}




