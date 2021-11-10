// aqui exportaras las funciones que necesites

//const printLogin = document.getElementById('root');

export const templateRegister = () => {
// aqui tu codigo
  console.log('aqui va el inicio de sesion');
  const login = `
    <main>
    <input 
    type="mail" 
    placeholder="Ingresa tu Correo" 
    class="register"/>
    <input 
    type="password"
    placeholder="Ingresa tu contraseña"
    class="register"/>
    <button
    class="click">
    Crear Cuenta
    </button>
    </main>
    `;
  return login;
};
