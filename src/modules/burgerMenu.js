'use strict';

const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        textMenu = topMenu.querySelector('.hidden-small'),
        burgerMenuBtn = topMenu.querySelector('.hidden-large'),
        popupMenu = document.querySelector('.popup-menu');

    window.addEventListener('resize', () => {
        if(document.body.clientWidth <= 768) {
            textMenu.style.display = 'none';
            burgerMenuBtn.style.display = 'block';

            window.addEventListener('scroll', () => {
                if(window.pageYOffset >= 124) {
                    topMenu.style.position = 'fixed';
                } else {
                    topMenu.style.position = '';
                }
            });
        } else {
            textMenu.style.display = 'flex';
            burgerMenuBtn.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        let target = event.target,
            burgerBtn = target.closest('.menu-button'),
            closeMenuBtn = target.closest('.close-menu-btn'),
            menuItem = target.closest('.scroll');
        
        if(burgerBtn) {
            popupMenu.style.display = 'flex';
        }

        if(closeMenuBtn || menuItem) {
            popupMenu.style.display = 'none';
        }
    });
};

export default burgerMenu;