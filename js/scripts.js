menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "x" ? "≡" : "x";
});


"use strict";

const checkConfirmation = (ev) => {
 if (myPassword.value != myConfirmation.value) {
  myConfirmation.setCustomValidity("Passwords do not match. Please try again!");
 } else {
  myConfirmation.setCustomValidity('');
 }
};

function ValidateEmail(myEmail)
{
 if (myEmail

myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);

login.addEventListener('submit', ev => {
 alert(`logged in as ${myEmail.value}`)
 login.reset();
 ev.preventDefault();
});
