const slider = () => {

    const imagesBlock = document.querySelector('.slider__images-block');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const slidesBlock = document.querySelector('.slider__wrapper--slides');
    const button = document.querySelector('.slider__btn-block').children;

    let count;

    new Array(8).fill('').forEach((_, i) => {
        let num = ++i;
        imagesBlock.insertAdjacentHTML('beforeend', `
            <div class="slider__images-block-item">
                <img src="./img/img${num}.jpg" alt="slide"/>
            </div>
        `);
        slidesBlock.insertAdjacentHTML('beforeend', `
            <img class="slider__wrapper--slides--slide" src="./img/img${num}.jpg" alt="slide"/>
        `);
    });
    const slides = document.querySelectorAll('.slider__wrapper--slides--slide');

    const changeSlide = count => {
        console.log(count);
        slides.forEach((slide, i) => {
            if (i === count) {
                slide.classList.add('show');
            } else {
                slide.classList.remove('show');
            };
        });
    };

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