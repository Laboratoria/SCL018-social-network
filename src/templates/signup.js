import { createUser } from '../firebase/firebase.js';
// aqui exportaras las funciones que necesites

export const templateSignUp = () => {
  const containerTemplateSignUp = document.createElement('section');
  containerTemplateSignUp.className = 'signUp-container';
  // aqui tu codigo
  containerTemplateSignUp.innerHTML = `
    <main class= "grid-template" >
    <div id="signupemail">
    <input type="email" 
    placeholder="Ingresa tu Correo"
    id="emailUp" />
    <img src="https://img.icons8.com/ios/50/000000/love-letter.png" class="icon"/>
    </div>
    <div id="signuppassword">
    <input type="password"
    placeholder="Ingresa tu contraseña " 
    id="passwordUp"/>
    <img src="https://img.icons8.com/ios-filled/50/000000/unlock--v2.png"/ class="icon">
    </div>
    <button id="register">
    CREAR CUENTA
    </button>
    <button id="already">
    Ya tengo Cuenta
    </button>
    </main>
    `;

  containerTemplateSignUp.querySelector('#register').addEventListener('click', () => {
    const emailSignup = containerTemplateSignUp.querySelector('#emailUp').value;
    const passwordSignup = containerTemplateSignUp.querySelector('#passwordUp').value;
    createUser(emailSignup, passwordSignup);
  });

  containerTemplateSignUp.querySelector('#already').addEventListener('click', () => {
    // mandarnos de regreso
    window.location.hash = '#/login';
  });

  return containerTemplateSignUp;
};
