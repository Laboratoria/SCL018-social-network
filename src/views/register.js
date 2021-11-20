export const registerUser = () => {
  const drawRegister = document.createElement('section'); //crea un nodo de tipo element
  const registerTemplate = `
<input type="email" placeholder="Email"></input>
<input type="password" placeholder="Contraseña"></input>
<button id="btnLogin">REGISTRARTE</button>`;

  drawRegister.innerHTML = registerTemplate;
  return drawRegister;
};
