'use strict';

let modalElement = document.querySelector('.modal');

let buttons = document.querySelectorAll('.show-modal');
let closeModalElement = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

const openModal = () => {
    modalElement.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

const closeModal = () => {
    modalElement.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i <buttons.length ; i++) {
    buttons[i].addEventListener('click', openModal);
}

closeModalElement.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modalElement.classList.contains('hidden')) {
      closeModal();
    }
  });

