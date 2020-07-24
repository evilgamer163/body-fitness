'use strict';

const modal = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        formWrapperFreeVisit = freeVisitForm.querySelector('.form-wrapper'),
        callbackForm = document.getElementById('callback_form'),
        formWrapperCallback = callbackForm.querySelector('.form-wrapper'),
        gift = document.getElementById('gift');

    let giftWrapper = '';

    if(gift) {
        giftWrapper = gift.querySelector('.form-wrapper');
    }

    let count = 0;

    const popupAnim = (popupBlock, formWrap) => {
        const anim = () => {
            count++;
            popupBlock.style.display = 'block';
            formWrap.style.top = count + 'vh';
            let rafID = requestAnimationFrame(anim);
            if(count >= 20) {
                cancelAnimationFrame(rafID);
            }
        };
        anim();
    };

    const closePupop = (popupBLock) => {
        count = 0;
        popupBLock.style.display = 'none';
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target,
            openPopupBtn = target.closest('.open-popup'),
            closePopupBtn = target.closest('.close-btn'),
            formContent= target.closest('.form-content'),
            callbackBtn = target.closest('.callback-btn'),
            fixedGift = target.closest('.fixed-gift');

        if(openPopupBtn) {
            event.preventDefault();
            popupAnim(freeVisitForm, formWrapperFreeVisit);
        } else if(!formContent || closePopupBtn) {
            closePupop(freeVisitForm);
        }

        if(callbackBtn) {
            popupAnim(callbackForm, formWrapperCallback);
        } else if(!formContent || closePopupBtn) {
            closePupop(callbackForm);
        }

        if(fixedGift) {
            popupAnim(gift, giftWrapper);
            fixedGift.remove();
        } else if(!formContent || closePopupBtn) {
            if(gift) {
                closePupop(gift);
            }
        }
    });
};

export default modal;