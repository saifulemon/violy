let activeElements = document.querySelectorAll('li');
let menuIcon = document.querySelector('.menu-icon');
let showNavbar = document.querySelector('ul');

// show navbar on mobile
menuIcon.addEventListener('click', () => {
    showNavbar.classList.toggle('show');
});

// active nav 
activeElements.forEach(list => {
    list.addEventListener('click', function () {
        activeElements.forEach(activeList => activeList.classList.remove('active'));
        this.classList.add('active');
    });
});
