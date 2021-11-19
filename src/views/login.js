export const loginUser = () => {
  const drawLogin = document.createElement('section');
  const loginTemplate = `
<input type="email" placeholder="Email"></input>
<input type="password" placeholder="Contraseña"></input>
<button id="btnLogin">INICIAR SESIÓN</button>`;

  drawLogin.innerHTML = loginTemplate;
  return drawLogin;
};
