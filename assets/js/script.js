var button = document.getElementById('mais');
var card = document.querySelector('.card');

button.addEventListener('click', function () {
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        button.textContent = 'Ler Menos';
    } else {
        button.textContent = 'Ler Sobre';
    }
});