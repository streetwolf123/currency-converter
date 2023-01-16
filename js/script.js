
let inputLeftElement = document.querySelector('.form__input--left-js');
let button = document.querySelector('.form__button-js');
let form = document.querySelector('.form-js');
let currencyLeftElement = document.querySelector('.form__select--left-js');




form.addEventListener("submit", (event) => {
    event.preventDefault();
});

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
console.log("patrzysz pewnie czy nie ma błędów co ?? ;)");
    
var values = {
    pln: 1,
    eur: 4,
    usd: 4.5,
    gbp: 5,
    hkd: 8,
    egp: 1.23
};

button.addEventListener("click", () => {
    const inputLeft = inputLeftElement.value;
    const result = document.querySelector('.form__span--result-js');
    const firstInputValue = document.querySelector('.form__select--left-js');
    const secondInputValue = document.querySelector('.form__select--right-js');

    const finalCount = (values[firstInputValue.value] / values[secondInputValue.value]) * inputLeft;

    result.innerHTML = finalCount.toFixed(2);

});




