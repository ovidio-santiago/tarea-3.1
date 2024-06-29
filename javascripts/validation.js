function emailValidation() {
  const inputEmail = document.getElementById('email_confirm');
  const trEmail = document.getElementById('email_tr')
  const form = document.getElementById('form');
  const trAlerta = document.getElementById('trAlerta')

  inputEmail.addEventListener('input',e => {
    const alerta = document.getElementById('pAlerta');
    if(form.email.value !== form.email_confirm.value && !alerta ) {
      const element = document.createElement('tr')
      const message = document.createTextNode("Los correos electrónicos no coinciden")
      element.id = 'pAlerta';
      trAlerta.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      inputEmail.classList.add('fondo');
    } else if(alerta && form.email.value === form.email_confirm.value) {
      trAlerta.removeChild(alerta);
      inputEmail.classList.remove('fondo');
    }
    
  });
  
  
  
  };
  
  window.onload = emailValidation;