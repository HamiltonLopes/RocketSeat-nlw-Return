window.addEventListener('scroll',onScroll);

onScroll();
function onScroll(){
    showNavOnScroll();
    showBackToTopOnScroll();
}

function showNavOnScroll(){
    if(scrollY > 0) navigation.classList.add('scroll');
    else navigation.classList.remove('scroll');
}

function showBackToTopOnScroll(){
    if(scrollY > 800) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}


ScrollReveal({
    distance: '30px',
    origin: 'top',
    duration: 600
}).reveal(`#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`);