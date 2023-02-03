{
    const formDefault = () => {
        const form = document.querySelector('.form-js');
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        });

    };

    const documentObjects = () => {
        const inputLeftElement = document.querySelector('.form__input--left-js');
        const inputLeft = inputLeftElement.value;
        const currencyLeftElement = document.querySelector('.form__select--left-js');
        const firstInputValue = document.querySelector('.form__select--left-js');
        const secondInputValue = document.querySelector('.form__select--right-js');
        let result = document.querySelector('.form__span--result-js');
        const values = {
            pln: 1,
            eur: 4,
            usd: 4.5,
            gbp: 5,
            hkd: 8,
            egp: 1.23
        };
        
        const finalCount = (values[firstInputValue.value] / values[secondInputValue.value]) * inputLeft;
        result.innerHTML = finalCount.toFixed(2);

    };

    const buttonFunction = () => {
        const button = document.querySelector('.form__button-js');
        formDefault()
        button.addEventListener("click", documentObjects);

    };

    buttonFunction()

}













// Linijki do dopracowania
// const formSpanInput = document.querySelector('.form__span--input');
// const currencyLeft = document.querySelectorAll('.form__currency');
// const change = document.querySelector('.form__select--left')


// change.addEventListener('click', () => {
//     if (currencyLeft.classList('.form__currency--PLN')) {
//         formSpanInput.innerHTML = 'PLN'
//     } else if (currencyLeft.classList('.form__currency--EUR')) {
//         formSpanInput.innerHTML = 'EUR'
//     }
// })