import { authGoogle, createUser, signed } from '../firebase/firebase.js';
// aqui exportaras las funciones que necesites


export const templateRegister = () => {
  const containerTemplateSignUp = document.createElement('section');
  containerTemplateSignUp.className = 'signUp-container';
  // aqui tu codigo
  const login = `
    <main class= "grid-template" >
    <div id="letter">
    <input type="mail" 
    placeholder="Ingresa tu Correo"
    id="emailUp" />
    <img src="https://img.icons8.com/ios/50/000000/love-letter.png" class="icon"/>
    </div>
    <div id="unlock">
    <input type="password"
    placeholder="Ingresa tu contraseña " 
    id="passwordUp"/>
    <img src="https://img.icons8.com/ios-filled/50/000000/unlock--v2.png"/ class="icon">
    </div>
    <button id="enter">
    INGRESAR
    </button>
    <button id= "google">
    <img src="https://img.icons8.com/color/48/000000/chrome--v3.png" class="icon"/> Continuar con google
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

//if para condicional

export const clickSignin = () => {
  document.querySelector('#enter').addEventListener('click', () => {
    console.log('ingresaste a tú cuenta creada');
    // if para condicional de ingreso, para llamar signed cuando este lleno y cuando no se quede.
    signed();
    // container.innerHTML = feedSpace();
    // console.log(containerTemplateSignUp);
  });
};
