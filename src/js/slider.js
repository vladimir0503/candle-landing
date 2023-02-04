const slider = () => {

    const imagesBlock = document.querySelector('.slider__images-block');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const button = document.querySelector('.slider__btn-block').children;

    let count;

    const slides = document.querySelectorAll('.slider__wrapper--slides--slide');

    const changeSlide = count => {
        slides.forEach((slide, i) => {
            if (i === count) {
                slide.classList.add('show');
            } else {
                slide.classList.remove('show');
            };
        });
    };

    console.log(imagesBlock);

    [...imagesBlock.children].forEach((img, i) => {
        img.addEventListener('click', () => {
            count = i;
            sliderWrapper.classList.add('show')
            changeSlide(i);
        });
    });

    button[0].addEventListener('click', () => {
        if (count <= 0) {
            count = slides.length - 1;
        } else {
            count -= 1;
        };

        changeSlide(count);
    });

    button[2].addEventListener('click', () => {
        if (count >= slides.length - 1) {
            count = 0;
        } else {
            count += 1;
        };

        changeSlide(count);
    });

    button[1].addEventListener('click', () => {
        sliderWrapper.classList.remove('show');
    });
};

export default slider;