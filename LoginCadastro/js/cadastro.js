const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const msgError = document.getElementById('msgError');

function cadastrar() {
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

 
  if (!nome || !email || !senha) {
    msgError.textContent = 'Preencha todos os campos obrigatórios.';
    return;
  }

  
  if (!/\S+@\S+\.\S+\z/.test(email)) {
    msgError.textContent = 'E-mail inválido.';
    return;
  }

  
  if (senha.length < 8) {
    msgError.textContent = 'A senha deve ter no mínimo 8 caracteres.';
    return;
  }

  
  console.log('Usuário cadastrado:', nome);
  
  window.location.href = 'login.html';
}

const btCadastro = document.querySelector('.bt-cadastro');
btCadastro.addEventListener('click', cadastrar);

function cadastrar() {
  window.open("/ProjetoPortoDigital/LoginCadastro/html/login.html");
}