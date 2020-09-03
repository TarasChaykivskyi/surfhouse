window.onload = function () {

    let buttonOpen = document.getElementById('burger-menu'),
        buttonClose = document.getElementById('close-burger-menu'),
        containerMenu = document.getElementsByClassName('aside')[0],
        body = document.getElementsByTagName('body')[0],
        hideBodyScrollClass = 'hide-scroll',
        activeClass = 'active';

    buttonOpen.addEventListener('click', openMenu);
    buttonClose.addEventListener('click', closeMenu);

    function openMenu() {
        body.classList.add(hideBodyScrollClass);
        containerMenu.classList.add(activeClass);
    }
    
    function closeMenu() {
        body.classList.remove(hideBodyScrollClass);
        containerMenu.classList.remove(activeClass);
    }
}