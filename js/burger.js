//menu
//humburger-menu
const burger=document.querySelector('.humburger-menu');
const menuElem=document.querySelector('.menu');
const menuItem=document.querySelectorAll('.menu-list__item');
const toggleMenu= () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}
burger.addEventListener('click', () => toggleMenu())

for( let item of menuItem)
    item.addEventListener('click', ()=> toggleMenu())
