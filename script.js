const botao = document.getElementById('btn');
const botaoEnviar = document.getElementById('submit-btn');
const agreementCheckBox = document.getElementById('agreement');

function login(event) {
  const getMail = document.getElementById('email');
  const getPsw = document.getElementById('password');

  event.preventDefault();

  if (getMail.value === 'tryber@teste.com' && getPsw.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function ativarBtn() {
  botaoEnviar.toggleAttribute('disabled');
}

botao.addEventListener('click', login);
agreementCheckBox.addEventListener('click', ativarBtn);


// contador 
const textArea = document.getElementById('textarea');
function contaCaracteres() {
  const campo = textArea.value.length;
  const limite = 500;
  const counter = document.getElementById('contador');
  const restante = limite - campo;
  counter.innerHTML = restante;
}

textArea.addEventListener('keyup', contaCaracteres);