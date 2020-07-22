'use strict';

const selectClub = () => {
    const clubsList = document.querySelector('.clubs-list>ul'),
        headerMain = document.querySelector('.header-main');

    headerMain.addEventListener('click', (event) => {
        const target = event.target.closest('.club-select');
        if(target && clubsList.style.display === 'none') {
            clubsList.style.display = 'block';
        } else {
            clubsList.style.display = 'none';
        }
    });
};

export default selectClub;