const contactForm = document.querySelector('.formcontact');
let _nome = document.getElementById('nome');
let _sobrenome = document.getElementById('sobrenome');
let _telefone = document.getElementById('telefone');
let _email = document.getElementById('email');

  contactForm.addEventListener('click', (e) => {
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
    console.log(xml.responseText);
    if(xml.responseText == 'sucess'){
      alert('Email Sent');
      _nome.value = '';
      _sobrenome.value = '';
      _telefone.value = '';
      _email.value = '';
    }
    else {
      alert('something wrong!');
    }
  }
  xml.send(JSON.stringify(formData));
})
