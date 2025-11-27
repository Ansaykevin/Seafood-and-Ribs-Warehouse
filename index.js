document.addEventListener('DOMContentLoaded', function () {
    
    const menuIcon = document.querySelector('.seafood-btn-main');
    const menuSection = document.querySelector('.header-right');

    if (menuIcon && menuSection) {
        menuIcon.addEventListener('click', function () {

            menuSection.classList.toggle('active');
         
        });
    
    }
});