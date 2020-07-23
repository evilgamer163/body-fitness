'use strict';

const modal = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        formWrapper = freeVisitForm.querySelector('.form-wrapper');

    
    let count = 0;
    formWrapper.style.top = '-400px';

    const popupAnim = () => {
        count++;
        freeVisitForm.style.display = 'block';
        formWrapper.style.top = count + 'vh';
        let rafID = requestAnimationFrame(popupAnim);
        if(count >= 20) {
            cancelAnimationFrame(rafID);
        }
    };

    const closePupop = () => {
        count = 0;
        formWrapper.style.top = '-400px';
        freeVisitForm.style.display = 'none';
    };

    document.body.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target,
            openPopupBtn = target.closest('.open-popup'),
            formContent= target.closest('.form-content');

        if(openPopupBtn) {
            popupAnim();
        } else if(!formContent) {
            closePupop();
        }
    });
};

export default modal;