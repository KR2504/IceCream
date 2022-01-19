document.addEventListener('DOMContentLoaded', function(){
    let nav_list = document.getElementsByClassName('menu')[0];
    let menu_btn = document.getElementsByClassName('header__button-menu')[0];
    let button_close = document.getElementsByClassName('menu__button-close')[0];

    menu_btn.addEventListener('click', function(){
        nav_list.classList.toggle('is-open');
    })

    button_close.addEventListener('click', function(){
        nav_list.classList.toggle('is-open');
    })

})