'use strict';

const modal = () => {
    const openPopup = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form');

    openPopup.addEventListener('click', (event) => {
        event.preventDefault();
        freeVisitForm.style.display = 'block';
    });
};

export default modal;