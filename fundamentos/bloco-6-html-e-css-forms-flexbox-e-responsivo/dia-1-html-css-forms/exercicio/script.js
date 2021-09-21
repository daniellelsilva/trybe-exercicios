function criaOptionEstados() {

  let estado = document.getElementById('state');
  let estadosBrasileiros = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < estadosBrasileiros.length; index += 1) {
  let criaOption = document.createElement('option');
  estado.appendChild(criaOption).innerText = estadosBrasileiros[index];
  estado.appendChild(criaOption).value = estadosBrasileiros[index];
}
}

// validação do nome
function validateName () {
  let name = document.querySelector('[name = name]');
  if (name.value.length > 40 || name.value.length === 0) {
    alert('Nome inválido');
  }
}

// validação email
function validateEmail () {
  let email = document.querySelector('[name = email]');
  if (email.value.length > 50 || email.value.length === 0) {
    alert('E-mail inválido');
  }
}

// validação cpf
function validateCpf () {
  let cpf = document.querySelector('[name = cpf]');
  if (cpf.value.length > 11 || cpf.value.length === 0) {
    alert('CPF inválido');
  }
}

// validação endereço
function validateAddress () {
  let address = document.querySelector('[name = address]');
  if (address.value.length > 200 || address.value.length === 0) {
    alert('Endereço inválido') 
  }
}

// validação cidade
function validateCity () {
  let city = document.querySelector('[name = city]');
  if (city.value.length > 200 || city.value.length === 0) {
    alert('Cidade inválida');
  }
}

// validação tipo de imóvel
// function validateHouseType () {
//   let houseType = document.querySelector(`[name=${houseType}]:checked`);
//   if (checked === null) {
//     alert('Tipo de imóvel inválido');
//   }
// }

// validação resumo curriculo
function validateResume () {
  let resume = document.querySelector('[name = resume]');
  if (resume.value.length > 1000 || resume.value.length === 0) {
    alert('Resumo inválido');
  }
}

// validação cargo
function validateRole () {
  let role = document.querySelector('[name = role]');
  if (role.value.length > 40 || role.value.length === 0) {
    alert('Cargo inválido');
  }
}

function submit(event) {
  event.preventDefault();

  validateName();
  validateEmail();
  validateCpf();
  validateAddress();
  validateCity();
  validateHouseType();
  validateResume();
  validateRole();
}


window.onload = function() {
  criaOptionEstados();

  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', submit);
}