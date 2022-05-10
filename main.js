window.addEventListener('scroll',onScroll);

onScroll();
function onScroll(){
    showNavOnScroll();
    showBackToTopOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
    activateMenuAtCurrentSection(testimonials);
}

function activateMenuAtCurrentSection(section){
    const topSection = section.offsetTop;
    const endSection = section.offsetHeight + topSection;
    const middleVwLine = scrollY + (innerHeight/2);

    //Se a seção passar da metade da tela ativa o menu, se não remove o menu.
    if(topSection <= middleVwLine && endSection >= middleVwLine) document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`).classList.add('active');
    else document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`).classList.remove('active');
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
#about .content,
#contact,
#testimonials,
#testimonials .header
`);

const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    keyboard: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        1024:{
            slidesPerView: 2,
            setWrapperSize: true
        }   
    }
  });

  ScrollReveal({
    distance: '30px',
    origin: 'left',
    duration: 800
}).reveal(`#testimonials .swiper-wrapper`);