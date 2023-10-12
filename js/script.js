let activeElements = document.querySelectorAll('li');
let menuIcon = document.querySelector('.menu-icon');
let showNavbar = document.querySelector('ul');
let logo = document.querySelector('.logo');

// show navbar on mobile
menuIcon.addEventListener('click', () => {
    let shownav = showNavbar.classList.toggle('show');
    document.body.classList.toggle('lock-scroll');
    shownav ? logo.classList.toggle('nav-show-logo') : logo.classList.toggle('nav-hide-logo')
    return shownav;
});

// active nav 
activeElements.forEach(list => {
    list.addEventListener('click', function () {
        activeElements.forEach(activeList => activeList.classList.remove('active'));
        this.classList.add('active');
    });
});

// swiper slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });