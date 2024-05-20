'use strict';

const form = document.getElementById('form');
const userName = document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail');
const userPassword = document.querySelector('.userPassword');
const userConPassword = document.querySelector('.userConPassword');

form.addEventListener('submit', e => {
  e.preventDefault();
  validInput();
});

const validInput = () => {
  const userElement = userName.value.trim();
  console.log(userElement);
};
