'use strict';

const scrollPage = () => {
    const totopArrow = document.getElementById('totop');

    totopArrow.style.display = 'none';

    window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 700) {
            totopArrow.style.display = 'block';
        } else {
            totopArrow.style.display = 'none';
        }
    });

    document.body.addEventListener('click', (event) => {
        let target = event.target,
            scrollLink = target.closest('.scroll'),
            toTop = target.closest('#totop');

        if(scrollLink) {
            event.preventDefault();
            let selector = target.href.split('#');
            window.scroll({
                left: 0,
                top: document.querySelector(`#${selector[1]}`).offsetTop,
                behavior: 'smooth'
            });
        }

        if(toTop) {
            event.preventDefault();
            window.scroll({
                left: 0,
                top: 0,
                behavior: 'smooth'
            });
        }
    });
};

export default scrollPage;