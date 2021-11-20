export const home = () => {
  const drawHome = document.createElement('section');
  const homeTemplate = `
<h1>Home</h1>
`;

  drawHome.innerHTML = homeTemplate;
  return drawHome;
};
