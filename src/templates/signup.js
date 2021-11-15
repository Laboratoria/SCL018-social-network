import { authGoogle, createUser, signed } from '../firebase/firebase.js';
import { feedSpace } from './nav.js';
// aqui exportaras las funciones que necesites

// const printLogin = document.getElementById('root');

export const templateRegister = () => {
  const containerTemplateSignUp = document.createElement('section');
  containerTemplateSignUp.className = 'signUp-container';
  // aqui tu codigo
  const login = `
    <main class= "grid-template" >
    <input type="mail" 
    placeholder="Ingresa tu Correo"
    id="emailUp" />
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
    <input type="password"
    placeholder="Ingresa tu contraseña " 
    id="passwordUp"/>
    <button id="enter">
    INGRESAR
    </button>
    <button id= "google">
    Continuar con google
    </button>
    <button id="register">
    Crear Cuenta
    </button>
    </main>
    `;
  return login;
};

export const clickRegister = () => {
  document.querySelector('#register').addEventListener('click', () => {
    console.log('creaste tu cuenta');
    createUser();
    // console.log(containerTemplateSignUp);
  });
};

export const clickGoogle = () => {
  document.querySelector('#google').addEventListener('click', () => {
    console.log('ingresaste con google');
    authGoogle();
    // console.log(containerTemplateSignUp);
  });
};

export const clickSignin = () => {
  document.querySelector('#enter').addEventListener('click', () => {
    console.log('ingresaste a tú cuenta creada');
    signed();
    // console.log(containerTemplateSignUp);
  });
};
