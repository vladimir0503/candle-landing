const slider = () => {

    const imagesBlock = document.querySelector('.slider__images-block');

    new Array(8).fill('').forEach((_, i) => {
        imagesBlock.insertAdjacentHTML('beforeend', `
        <div class="slider__images-block-item">
            <img src="./img/img${++i}.jpg" alt="slide"/>
        </div>
    `);
    });

    [...imagesBlock.children].forEach(img => {
        img.addEventListener('click', () => console.log(img));
    });

};

export default slider;