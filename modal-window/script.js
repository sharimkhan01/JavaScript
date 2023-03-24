'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
// btnsOpenModal.addEventListener('click', function () {});

const add = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const remove = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', remove);
}

btnCloseModal.addEventListener('click', add);
overlay.addEventListener('click', add);

document.addEventListener('keydown', function (e) {
  // console.log('Key pressed');
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    add();
  }
});
