const contactForm = document.querySelector('.form_tag');
let _nome = document.getElementById('nome');
let _sobrenome = document.getElementById('sobrenome');
let _telefone = document.getElementById('telefone');
let _email = document.getElementById('email');
let _butsubmit = document.getElementById('bt');

 _butsubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let formData = {
    nome : _nome.value,
    sobrenome : _sobrenome.value,
    telefone : _telefone.value,
    email : _email.value
  }

  let xml = new XMLHttpRequest();
  xml.open('POST', '/');
  xml.setRequestHeader('content-type', 'application/json');

  xml.onload = function(){
    if(xml.readyState == 4){

      _nome.value;
      _sobrenome.value;
      _telefone.value;
      _email.value;

      alert('Dados enviados')

    } else {
      alert('ALGO DEU ERRADO')
    }


  }
  xml.send(JSON.stringify(formData));
})
