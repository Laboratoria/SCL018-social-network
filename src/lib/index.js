/* eslint-disable indent */
import { login } from "./login.js";
import { createUser } from "./createUser.js";

export const routes = (hash) => {
    const mainContent = document.getElementById("root");
    mainContent.innerHTML = '';
    if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
        mainContent.appendChild(login());
    } else if (hash === '#/login') {
        mainContent.appendChild(login());
    } else if (hash === '#/createUser') {
        mainContent.appendChild(createUser());
    }
};
