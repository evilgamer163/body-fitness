'use strict';

const slider = () => {
    const mainSlider = document.querySelector('.main-slider'),
        mainSliderSlides = mainSlider.querySelectorAll('.slide');

    let sliderIndex = 0,
        animateCount = -400,
        intervalID = '';

    const slideAnimate = () => {
        animateCount+= 20;
        mainSliderSlides[sliderIndex].style.left = animateCount + 'px';
        let rafID = requestAnimationFrame(slideAnimate);
        if(animateCount >= 0) {
            animateCount = -400;
            cancelAnimationFrame(rafID);
        }
    };

    const playSlider = () => {
        mainSliderSlides[sliderIndex].style.display = 'none';
        sliderIndex++;
        if(sliderIndex >= mainSliderSlides.length) {
            sliderIndex = 0;
        }
        mainSliderSlides[sliderIndex].style.display = 'flex';
        slideAnimate();
    };

    const startSlider = (timer = 1000) => {
        intervalID = setInterval(playSlider, timer);
    };

    const stopSlider = () => {
        clearInterval(intervalID);
    };

    window.addEventListener('blur', () => {
        stopSlider();
    });

    window.addEventListener('focus', () => {
        startSlider(5000);
    });
};

export default slider;