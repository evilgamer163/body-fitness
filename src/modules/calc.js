'use strict';

const calc = () => {
    const timeMonthes = document.querySelector('.time'),
        checkShelkovo = document.getElementById('card_leto_schelkovo'),
        checkMozaika = document.getElementById('card_leto_mozaika'),
        cardOrder = document.getElementById('card_order'),
        inputsCalc = cardOrder.querySelectorAll('input'),
        promo = document.querySelector('input[placeholder="Промокод"]');

    let period, priceTotal;

    if(timeMonthes) {
        period = timeMonthes.querySelectorAll('input[type="radio"]');
        priceTotal = document.getElementById('price-total');
        priceTotal.textContent = '1990';
    }

    inputsCalc.forEach( item => {
        item.addEventListener('change', () => {
            if(checkMozaika && checkMozaika.checked) {
                period.forEach( item => {
                    if(item.checked) {
                        if(item.value === '1') {
                            priceTotal.textContent = '1990';
                        } else if(item.value === '6') {
                            priceTotal.textContent = '9990';
                        } else if(item.value === '9') {
                            priceTotal.textContent = '13990';
                        } else if(item.value === '12') {
                            priceTotal.textContent = '19990';
                        }
                    }
                });
            }

            if(checkShelkovo && checkShelkovo.checked) {
                period.forEach( item => {
                    if(item.checked) {
                        if(item.value === '1') {
                            priceTotal.textContent = '2990';
                        } else if(item.value === '6') {
                            priceTotal.textContent = '14990';
                        } else if(item.value === '9') {
                            priceTotal.textContent = '21990';
                        } else if(item.value === '12') {
                            priceTotal.textContent = '24990';
                        }
                    }
                });
            }

            if(promo && promo.value === 'ТЕЛО2019') {
                priceTotal.textContent -= (priceTotal.textContent * 0.3);
            }
        });
    });
};

export default calc;