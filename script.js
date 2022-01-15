
function initTabNav() {
    
let tabMenu = document.querySelectorAll('.js-tabmenu li')

let tabContent = document.querySelectorAll('.js-tabcontent section')

tabContent[0].classList.add('active')

if (tabMenu.length && tabContent.length) {
   
    function ActibeTab(i) {
        tabContent.forEach(el => el.classList.remove('active'))
        tabContent[i].classList.add('active')
    }
    
    tabMenu.forEach((el, i) => {
        el.addEventListener('click', () => {
            
            ActibeTab(i)
        })})
}
}
initTabNav()

function initAccordion() {
    
let accordionList = document.querySelectorAll('.js-accordion dt')
if(accordionList.length) {
accordionList[0].classList.add('active')
accordionList[0].nextElementSibling.classList.add('active')

function activeAccordion() {
    this.nextElementSibling.classList.toggle('active')
    this.classList.toggle('active')
}

accordionList.forEach(el => {
    el.addEventListener('click', activeAccordion)
})}
}
initAccordion()