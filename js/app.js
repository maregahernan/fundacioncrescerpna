const iconMenu = document.querySelector('.menu');
const naveMenu = document.querySelector('.nave');
 console.log(naveMenu)
 console.log(iconMenu)

iconMenu.addEventListener('click', ()=>{
    naveMenu.classList.toggle('move')
})

window.addEventListener('click', e=>{
    if (iconMenu.classList.contains('move') && e.target != iconMenu && e.target!= menuIcon ) {
        menuNav.classList.toggle('move');
    }
})



