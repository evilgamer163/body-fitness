//Отправка форм "Записаться на бесплатный визит" + "Выбрать карту"(страницы клубов)

'use strict';

const sendForm = () => {
    const forms = document.querySelectorAll('form'),
        regExpText = /^[а-яА-Я]+$/,
        errorMessage = 'Упс! Что то пошло не так...',
        successMessage = 'Мы обязательно с вами свяжемся!',
        checkMessage = 'Необходимо принять условия!',
        thanksPopup = document.getElementById('thanks'),
        laoded = document.querySelector('.loaded');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `
        font-size: 20px;
        color: red;
        text-align: center;
        margin-top: 10px;
    `;

    thanksPopup.addEventListener('click', (event) => {
        let target = event.target,
            formWrapper = target.closest('.form-wrapper'),
            closeBtn = target.closest('.close-btn'),
            closeForm = target.closest('.close-form');

        if(!formWrapper || closeBtn || closeForm) {
            thanksPopup.style.display = 'none';
        }
    });

    forms.forEach( item => {
        let inputsForm = item.querySelectorAll('input');
        inputsForm.forEach( item => {
            if(item.hasAttribute('required')) {
                item.removeAttribute('required');
                item.style.outline = 'none';
            }
        });

        item.addEventListener('input', (event) => {
            event.preventDefault();
            let target = event.target;

            if((target.type === 'text' && target.placeholder !== 'Промокод') && !regExpText.test(target.value)) {
                target.value = '';
                target.style.border = '2px solid red';
            } else {
                target.style.border = '';
            }
        });

        item.addEventListener('submit', (event) => {
            event.preventDefault();

            laoded.style.display = 'block';

            let target = event.target,
                checkInput = item.querySelector('input[type="checkbox"]'),
                inputText = item.querySelector('input[type="text"]'),
                inputTel = item.querySelector('input[type="tel"]');

            

            if(inputText.value === '' || inputTel.value === '') {
                item.append(statusMessage);
                statusMessage.textContent = 'Необходимо заполнить все поля!';
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 5000);
                return;
            }

            if(!checkInput.checked) {
                item.append(statusMessage);
                statusMessage.textContent = checkMessage;
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 5000);
                return;
            }

            const formData = new FormData(item);

            formData.forEach( (val, key) => {
                formData[key] = val;
                if(key === 'card-type') {
                    let card = item.querySelector(`input[value="${val}"]`),
                        label = document.querySelector(`label[for="${card.id}"]`),
                        month = label.querySelector('.long').textContent,
                        solo = label.querySelector('.solo').textContent === "- дневная -" ? false : true,
                        cost = label.querySelector('.cost').textContent,
                        frost = label.querySelector('.frost').textContent === "* Без заморозки" ? false : true;
                    
                    formData[key] = {
                        month: month,
                        solo: solo,
                        price: cost,
                        frost: frost 
                    };
                }
            });

            const outputMessage = (msg) => {
                laoded.style.display = 'none';
                thanksPopup.querySelector('p').textContent = msg;
                thanksPopup.style.display = 'block';
            };

            const getData = (data) => {
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {'Content-Type': 'multipart/form-data'},
                    body: JSON.stringify(data)
                });
            };

            getData(formData)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('Ошибка! Статус не равен 200!');
                    }
                    outputMessage(successMessage);
                })
                .catch((error) => {
                    outputMessage(errorMessage);
                    console.error(error);
                });
            
            setTimeout(() => {
                thanksPopup.style.display = 'none';
            }, 5000);

            let inputs = item.querySelectorAll('input').forEach( item => {
                item.value = '';
            });
        });
    });
};

export default sendForm;