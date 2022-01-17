document.addEventListener('DOMContentLoaded', function(){
    let nav_list = document.getElementsByClassName('nav__list')[0];
    let menu_btn = document.getElementsByClassName('header__menu-open')[0];
    let button_close = document.getElementsByClassName('nav__list--close')[0];

    menu_btn.addEventListener('click', function(){
        nav_list.classList.toggle('is-open');
    })

    button_close.addEventListener('click', function(){
        nav_list.classList.toggle('is-open');
    })

})