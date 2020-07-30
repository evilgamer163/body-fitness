'use strict';

const selectClub = () => {
    const clubsList = document.querySelector('.clubs-list>ul'),
        headerMain = document.querySelector('.header-main');

    let isOpen = false;

    headerMain.addEventListener('click', (event) => {
        const target = event.target.closest('.club-select');
        if(target && !isOpen) {
            isOpen = !isOpen;
            clubsList.style.display = 'block';
        } else {
            isOpen = !isOpen;
            clubsList.style.display = 'none';
        }
    });
};

export default selectClub;