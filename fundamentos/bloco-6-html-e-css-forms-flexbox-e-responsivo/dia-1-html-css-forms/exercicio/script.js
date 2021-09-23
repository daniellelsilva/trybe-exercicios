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

// validação descrição do cargo
function validateRoleDescription () {
  let roleDescription = document.querySelector('[name = roleDescription]');
  if (roleDescription.value.length > 500 || roleDescription.value.length === 0) {
    alert('Descrição de cargo inválida');
  }
}

// validação de data
function validateDate() {
  let startDate = document.querySelector('.input-data').value;
  stringDate = startDate.split("/");
  console.log(stringDate);

  let day = stringDate[0];
  let month = stringDate[1];
  let year = stringDate[2];

  if(day < 1 || day > 31) {
    alert('Dia inválido');
  } else if (month < 1 || month > 12) {
    alert('Mês inválido');
  } else if (year < 0) {
    alert('Ano inválido');
  } 
}

// salva infor em divs
// function saveDivs() {
//   const inputs = document.querySelectorAll('input');
//   for (let index = 0; index < inputs.length; index += 1) {
//     if (inputs[index])
//   }
// }

function submit(event) {
  event.preventDefault();

  validateName();
  validateEmail();
  validateCpf();
  validateAddress();
  validateCity();
  validateResume();
  validateRole();
  validateRoleDescription();
  validateDate();
}


window.onload = function() {
  criaOptionEstados();

  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', submit);
}