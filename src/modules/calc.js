'use strict';

const calc = () => {
    const timeMonthes = document.querySelector('.time'),
        period = timeMonthes.querySelectorAll('input[type="radio"]'),
        checkShelkovo = document.getElementById('card_leto_schelkovo'),
        checkMozaika = document.getElementById('card_leto_mozaika'),
        priceTotal = document.getElementById('price-total'),
        cardOrder = document.getElementById('card_order'),
        inputsCalc = cardOrder.querySelectorAll('input'),
        promo = document.querySelector('input[placeholder="Промокод"]');

    let test = document.querySelector('label[for="m1"]');
    console.log(test);

    priceTotal.textContent = '1990';

    const removeCheck = (item) => {
        item.removeAttribute('checked');
    };

    inputsCalc.forEach( item => {
        item.addEventListener('change', (event) => {
            let target = event.target,
                oneMonth = target.closest('#m1'),
                sixMonth = target.closest('#m2'),
                nineMonth = target.closest('#m3'),
                twelveMonth = target.closest('#m4');

            if(checkMozaika.checked) {
                priceTotal.textContent = '1990';

                if(oneMonth) {
                    priceTotal.textContent = '1990';
                } else if(sixMonth) {
                    priceTotal.textContent = '9990';
                } else if(nineMonth) {
                    priceTotal.textContent = '13990';
                } else if(twelveMonth) {
                    priceTotal.textContent = '19990';
                }
            }
            if(checkShelkovo.checked) {
                priceTotal.textContent = '2990';

                if(oneMonth) {
                    priceTotal.textContent = '2990';
                } else if(sixMonth) {
                    priceTotal.textContent = '14990';
                } else if(nineMonth) {
                    priceTotal.textContent = '21990';
                } else if(twelveMonth) {
                    priceTotal.textContent = '24990';
                }
            }

            if(promo.value === 'ТЕЛО2019') {
                priceTotal.textContent -= (priceTotal.textContent * 0.3);
            }
        });
    });
};

export default calc;