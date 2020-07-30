'use strict';

const slider = () => {
    const mainSlider = document.querySelector('.main-slider'),
        mainSliderSlides = mainSlider.querySelectorAll('.slide');

    let sliderIndex = 0,
        animateCount = -400,
        rafID;

    const nextSlide = (slide, slideIndex) => {
        slide[slideIndex].style.display = 'flex';
    };

    const prevSlide = (slide, slideIndex) => {
        slide[slideIndex].style.display = 'none';
    };

    const slideAnimate = () => {
        animateCount+= 20;
        mainSliderSlides[sliderIndex].style.left = animateCount + 'px';
        rafID = requestAnimationFrame(slideAnimate);
        if(animateCount >= 0) {
            animateCount = -400;
            cancelAnimationFrame(rafID);
        }
    };

    const playSlider = () => {
        prevSlide(mainSliderSlides, sliderIndex);
        cancelAnimationFrame(rafID);
        sliderIndex++;
        if(sliderIndex >= mainSliderSlides.length) {
            sliderIndex = 0;
        }
        nextSlide(mainSliderSlides, sliderIndex);
        slideAnimate();
    };

    const startSlider = (timer = 1000) => {
        setInterval(playSlider, timer);
    };

    startSlider(5000);
};

export default slider;