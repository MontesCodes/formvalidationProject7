'use strict';

const form = document.getElementById('form');
const userName = document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail');
const userPassword = document.querySelector('.userPassword');
const userConfPassword = document.querySelector('.userConPassword');

form.addEventListener('submit', e => {
  e.preventDefault();
  validInput();
});

const showError = (Element, message) => {
  const inputControl = Element.parentElement;
};

const validInput = () => {
  const userElement = userName.value.trim();
  const emailElement = userEmail.value.trim();
  const passwordElement = userPassword.value.trim();
  const confPasswordElement = userConfPassword.value.trim();
  // console.log(emailElement);

  if (userElement === '') {
  }
};
