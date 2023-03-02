import slider from "../slider";

const url = 'https://history-db-d0fb4-default-rtdb.firebaseio.com'

const loadData = async () => {

    const getData = async name => {
        const res = await fetch(`${url}/${name}.json`);
        const data = await res.json();
        return data;
    };

    const objToArray = obj => {
        const array = obj ? Object.keys(obj).map((item, i) => {
            return {
                ...Object.values(obj)[i],
                key: item,
            };
        }) : [];

        return array;
    };

    const hideElem = elem => {
        elem.style.display = 'none';
    };

    const renderPrice = data => {
        const section = document.querySelector('.price');
        const table = document.querySelector('.price table tbody');

        if (data.length) {
            data.forEach(item => {
                table.insertAdjacentHTML('beforeend', `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.new} руб.</td>
                        <td>${item.constant} руб.</td>
                    </tr>
                `)
            });
        } else {
            hideElem(section);
        };
    };

    const renderSlider = data => {
        const imagesBlock = document.querySelector('.slider__images-block');
        const slidesBlock = document.querySelector('.slider__wrapper--slides');

        if (data.length) {
            data.forEach(({ url }) => {
                imagesBlock.insertAdjacentHTML('beforeend', `
                    <div class="slider__images-block-item">
                        <img src=${url} alt="slide"/>
                    </div>
                `);
                slidesBlock.insertAdjacentHTML('beforeend', `
                    <img class="slider__wrapper--slides--slide" src=${url} alt="slide"/>
                `);
            });

            slider();
        } else {
            hideElem(document.querySelector('.slider'));
        };

    };

    const renderReviews = data => {
        const section = document.querySelector('.reviews');
        const wrapper = document.querySelector('.reviews__content--items-wrapper');

        if (data.length) {
            data.forEach(({name, text, url}) => {
                wrapper.insertAdjacentHTML('beforeend', `
                    <div data-aos="fade-down" data-aos-duration="1500" class="reviews__content--items-wrapper--item">
                        <img src=${url} alt="rev photo">
                        <h3>${name}</h3>
                        <p>${text}</p>
                    </div>
                `)
            });
        } else {
            hideElem(section);
        };
    };

    const render = async (name, func) => {
        const elemArr = await getData(name);
        const currentData = objToArray(elemArr);
        func(currentData);
    };

    render('prices', renderPrice);
    render('slider', renderSlider);
    render('reviews', renderReviews);
};

export default loadData;