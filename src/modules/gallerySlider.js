'use strict';

const gallerySlides = () => {
    const galleryWrap = document.querySelector('.gallery-bg>.wrapper'),
        gallerySlider = document.querySelector('.gallery-slider'),
        gallerySliderSlides = gallerySlider.querySelectorAll('.slide'),
        pointsBLock = document.querySelector('.points'),
        points = pointsBLock.querySelectorAll('.point');

    let sliderIndex = 0,
        intervalID;

    points.forEach( (item) => {
        item.style.cssText = `
            width: 30px;
            height: 5px;
            background-color: #fff;
            border-radius: 5px;
        `;
    });
    points[0].style.cssText += 'background-color: #f4c71b';

    galleryWrap.style.cssText += `
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    pointsBLock.style.cssText = `
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        left: calc(50% - 100px);
        margin-top: 300px
    `;

    galleryWrap.insertAdjacentHTML('afterbegin', 
        `<div class="arrow left-arrow" style="width: 36px;
        cursor: pointer;
        height: 37px;
        background-color: #f4c71b;
        border-radius: 50%;
        text-align: center;
        padding-top: 11px"><</div>`
    );

    galleryWrap.insertAdjacentHTML('beforeend', 
        `<div class="arrow right-arrow" style="width: 36px;
        cursor: pointer;
        height: 37px;
        background-color: #f4c71b;
        border-radius: 50%;
        text-align: center;
        padding-top: 11px">></div>`
    );

    const nextSlide = (slide, slideIndex) => {
        slide[slideIndex].style.display = 'flex';
        points[slideIndex].style.cssText += 'background-color: #f4c71b';
    };

    const prevSlide = (slide, slideIndex) => {
        slide[slideIndex].style.display = 'none';
        points[slideIndex].style.cssText += 'background-color: #fff';
    };

    const playSlider = () => {
        prevSlide(gallerySliderSlides, sliderIndex);
        sliderIndex++;
        if(sliderIndex >= gallerySliderSlides.length) {
            sliderIndex = 0;
        }
        nextSlide(gallerySliderSlides, sliderIndex);
    };

    galleryWrap.addEventListener('click', (event) => {
        let target = event.target,
            leftArrow = target.closest('.left-arrow'),
            rightArrow = target.closest('.right-arrow');

        if(leftArrow) {
            prevSlide(gallerySliderSlides, sliderIndex);
            sliderIndex--;
            if(sliderIndex <= 0) {
                sliderIndex = gallerySliderSlides.length - 1;
            }
            nextSlide(gallerySliderSlides, sliderIndex);
        }
        if(rightArrow) {
            prevSlide(gallerySliderSlides, sliderIndex);
            sliderIndex++;
            if(sliderIndex >= gallerySliderSlides.length) {
                sliderIndex = 0;
            }
            nextSlide(gallerySliderSlides, sliderIndex);
        }
    });

    gallerySliderSlides.forEach( item => {
        item.style.display = 'none';
    });
    gallerySliderSlides[0].style.display = 'flex';

    const startSlider = (timer = 1000) => {
        intervalID = setInterval(playSlider, timer);
    };

    const stopSlider = () => {
        clearInterval(intervalID);
    };

    galleryWrap.addEventListener('mouseover', (event) => {
        let target = event.target,
            leftArrow = target.closest('.left-arrow'),
            rightArrow = target.closest('.right-arrow');

        if(leftArrow) {
            stopSlider();
        }
        if(rightArrow) {
            stopSlider();
        }
    });

    galleryWrap.addEventListener('mouseout', (event) => {
        let target = event.target,
            leftArrow = target.closest('.left-arrow'),
            rightArrow = target.closest('.right-arrow');

        if(leftArrow) {
            startSlider(5000);
        }
        if(rightArrow) {
            startSlider(5000);
        }
    });

    startSlider(5000);
};

export default gallerySlides;