export const home = () => {
  const drawHome = document.createElement('section');
  const homeTemplate = `
<h1>Holi Soy el muro</h1>
`;

  drawHome.innerHTML = homeTemplate;
  return drawHome;
};
