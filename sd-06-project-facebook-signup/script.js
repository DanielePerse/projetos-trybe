function buttonAlert() {
  const inputEmail = document.getElementById('user-email-phone');
  alert(inputEmail.value);
}

function newOption() {
  const divNewOption = document.getElementById('new-option');
  const newElement = document.createElement('input');
  newElement.type = 'text';
  newElement.name = 'gender-custom';
  newElement.placeholder = 'Gênero (opcional)';
  divNewOption.appendChild(newElement);
}

function dataValidation(event) {
  if ((document.getElementById('first-name').value === '') || (document.getElementById('last-name').value === '') || (document.getElementById('phone-email') === '').value || (document.getElementById('new_password').value === '') || (document.getElementById('birth-date').value === '')) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = 'Campos inválidos';
    event.preventDefault();
  }
}

window.onload = function () {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', buttonAlert);

  const clickPersonalizado = document.getElementsByClassName('gender')[2];
  clickPersonalizado.addEventListener('click', newOption);

  const buttonRegister = document.getElementById('facebook-register');
  buttonRegister.addEventListener('click', dataValidation);
};
