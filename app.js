'use strict';

const form = document.getElementById('form');
const userName = document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail');
const userPassword = document.querySelector('.userPassword');
const userConfPassword = document.querySelector('.userConPassword');

// prevent default form submission
form.addEventListener('submit', e => {
  e.preventDefault();
  validInput();
});
// adding error class HTML and removing successMessage class
const showError = (Element, message) => {
  const inputControl = Element.parentElement;
  const errorMessage = inputControl.querySelector('.error');
  errorMessage.innerText = message;
  inputControl.classList.add('errorMessage');
  inputControl.classList.remove('successMessage');
};
// removing error class HTML and adding successMessage class
const setSuccess = Element => {
  const inputControl = Element.parentElement;
  const errorMessage = inputControl.querySelector('.error');
  errorMessage.innerText = '';
  inputControl.classList.remove('errorMessage');
  inputControl.classList.add('successMessage');
};

const emailValidation = email => {
  const reTest = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return reTest.test(String(email).toLowerCase());
};

// Validating the input fields
const validInput = () => {
  const userElement = userName.value.trim();
  const emailElement = userEmail.value.trim();
  const passwordElement = userPassword.value.trim();
  const confPasswordElement = userConfPassword.value.trim();

  // User name validation
  if (userElement === '') {
    showError(userName, 'User name cannot be empty');
  } else {
    setSuccess(userName, 'User name is valid');
  }

  if (emailElement === '') {
    showError(userEmail, 'Email cannot be empty');
  } else if (!emailValidation(emailElement)) {
    showError(userEmail, 'Email is not valid');
  } else {
    setSuccess(userEmail);
  }

  if (passwordElement === '') {
    showError(userPassword, 'Password cannot be empty');
  } else if (passwordElement.length < 8) {
    showError(userPassword, 'Password must be at least 8 characters');
  }
};
