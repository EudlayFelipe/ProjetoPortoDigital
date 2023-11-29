const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const msgError = document.getElementById('msgError');

function entrar() {
  const usuario = usuarioInput.value.trim();
  const senha = senhaInput.value.trim();

  
  if (!usuario || !senha) {
    msgError.textContent = 'Preencha todos os campos obrigatórios.';
    return;
  }

  
  if (usuario !== 'usuario@exemplo.com' || senha !== '123456') {
    msgError.textContent = 'Usuário ou senha incorretos.';
    return;
  }

  
  console.log('Usuário autenticado:', usuario);
  
  window.location.href = 'home.html';
}
function entrar() {
    window.location.href = "/cobranca/cobranca.html";
}
  

    
