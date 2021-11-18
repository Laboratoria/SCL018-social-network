import { authGoogle, createUser, signed } from '../firebase/firebase.js';
// aqui exportaras las funciones que necesites

export const templateRegister = () => {
  const containerTemplateSignUp = document.createElement('section');
  containerTemplateSignUp.className = 'signUp-container';
  // aqui tu codigo
  containerTemplateSignUp.innerHTML = `
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
  containerTemplateSignUp.querySelector('#register').addEventListener('click', () => {
    const emailSignup = containerTemplateSignUp.querySelector('#emailUp').value;
    const passwordSignup = containerTemplateSignUp.querySelector('#passwordUp').value;
    createUser(emailSignup, passwordSignup);
    // console.log(containerTemplateSignUp);
  });

  containerTemplateSignUp.querySelector('#google').addEventListener('click', () => {
    console.log('ingresaste con google');

    authGoogle();
    // console.log(containerTemplateSignUp);
  });

  containerTemplateSignUp.querySelector('#enter').addEventListener('click', () => {
    const emailSignup = containerTemplateSignUp.querySelector('#emailUp').value;
    const passwordSignup = containerTemplateSignUp.querySelector('#passwordUp').value;
    signed(emailSignup, passwordSignup);
    console.log('click');
  });

  return containerTemplateSignUp;
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
