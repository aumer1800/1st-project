let menu=document.querySelector('#menu-toggle')
let navbar=document.querySelector('.navbar')
let head=document.querySelector('.heading')
let nav_main=document.querySelector('#sidebar')
let cross=document.querySelector('#menu-close')
let search=document.querySelector('.bi-search')
let shop=document.querySelector('.bi-bag-check')
menu.addEventListener('click', () => {
    nav_main.style.transform = 'translateX(0%)';
    nav_main.style.display='flex';
    nav_main.style.transition='transform 0.4s ease';
    menu.style.fontSize='x-large';
});

cross.addEventListener('click',()=>{
    nav_main.style.transition='transform 0.4s ease-out';
    nav_main.style.display='none';
    cross.style.fontSize='x-large';
});

