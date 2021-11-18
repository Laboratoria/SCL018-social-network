import { signUp } from '..firebase/firebasejs';
// aqui exportaras las funciones que necesites

// const printLogin = document.getElementById('root');

export const templateRegister = () => {
// aqui tu codigo
  const login = `
    <main class= "grid-template" >
    <input type="mail" 
    placeholder="Ingresa tu Correo" 
    id="emailUp" />
    <input type="password"
    placeholder="Ingresa tu contraseña"
    id="passwordUp"/>
    <button id="register">
    Crear Cuenta
    </button>
    </main>
    `;

  return login;
};

