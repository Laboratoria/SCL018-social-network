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
    <input type="password"
    placeholder="Ingresa tu contraseña"
    id="passwordUp"/>
    <button id="enter">
    Iniciar sesión
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
