import { authGoogle, signed } from '../firebase/firebase.js';
// aqui exportaras las funciones que necesites

export const templateLogin = () => {
  const containerTemplateLogin = document.createElement('section');
  containerTemplateLogin.className = 'signUp-container';
  // aqui tu codigo
  containerTemplateLogin.innerHTML = `
    <main class= "grid-template" >
    <div id="letter">
    <input type="email" 
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
  containerTemplateLogin.querySelector('#register').addEventListener('click', () => {
    // aqui hacer el cambio de hash a signup :)
    window.location.hash = '#/register';
    // console.log(containerTemplateSignUp);
  });

  containerTemplateLogin.querySelector('#google').addEventListener('click', () => {
    console.log('ingresaste con google');

    authGoogle();
    // console.log(containerTemplateSignUp);
  });

  containerTemplateLogin.querySelector('#enter').addEventListener('click', () => {
    const emailSignup = containerTemplateLogin.querySelector('#emailUp').value;
    const passwordSignup = containerTemplateLogin.querySelector('#passwordUp').value;
    signed(emailSignup, passwordSignup);
    console.log('click');
  });

  return containerTemplateLogin;
};

// export const clickSignin = () => {
//   document.querySelector('#enter').addEventListener('click', () => {
//     console.log('ingresaste a tú cuenta creada');
//     const email = document.getElementById('emailUp');
//     //aqui armar un listener del evento click del login
//     email.addEventListener('input', () => {
//       console.log('Estamos entrando al evento');
//       if (email.validity.typeMismatch) {
//         email.setCustomValidity('¡Se esperaba una dirección de correo electrónico!');
//       } else {
//         email.setCustomValidity('Esta funcionando! :O');
//       }
//     });
//   });
// };
