 let hamburgMenu = document.querySelector('.hamburg-container');
 let menus = document.querySelector('.menus-container');

 hamburgMenu.addEventListener('click' , ()=>{
     menus.classList.toggle('show-navigation');
 })