/* eslint-disable no-alert */
import { postData, logOut } from "../firebase.js";
import { displayFeed } from "./post-display.js";

export const wall = () => {
  const feedContainer = document.createElement("section");
  feedContainer.className = "wall-container";
  const feedView = `<header class="wall-header">
      <div class="logo-container logo-container-mobile">
        <img class="landing-wall-logo logo-mobile" src="resources/images/logo-GG-white.png" alt="landing-wall-logo" />
        <h3 class="wall-title">Gamer girl</h3>
      </div>
      <div class="user-icon">
          <img src="resources/images/Vector-user.svg" alt="user" />
      </div>
      <div class="logout-icon" id= "logoutBtn">
        <img src="resources/images/Vector-logout.svg" alt="logout" />
      </div>
    </header>
    <aside class= "wall-links">
      <h3 class="wall-links-title">Agrega a tus amig@s</h3>
        <a href="https://store.steampowered.com/login/?redir=%3Fsnr%3D1_60_4__global-header&redir_ssl=1&snr=1_4_4__global-header"
        target="_blank"><img class="image-links" src="resources/images/steam-image.png" alt="steam page" /></a>
        <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&rver=7.3.6963.0&wp=MBI_SSL&wreply=https:%2f%2faccount.xbox.com%2fes-cl%2faccountcreation%3freturnUrl%3dhttps%253a%252f%252fwww.xbox.com%252fes-CL%252fgames%252ffree-to-play%26ru%3dhttps%253a%252f%252fwww.xbox.com%252fes-CL%252fgames%252ffree-to-play%26rtc%3d1%26csrf%3dyksz-vgvEqbXU8RMbcjry6pFfAGk7OiJtGclMXJAnGO11BMC6abw2Dy6YIMvhpAraZtdShUAjxQzGPlJhzsdvDCkdUk1&lc=13322&id=292543&aadredir=1"
        target="_blank"><img class="image-links" src="resources/images/xbox-image.png" alt="xbox page" /></a>
        <a href="https://my.account.sony.com/central/signin/?duid=0000000700090100fd503bc9c84c20ebfc8ede27a8eaf5128d93fef74a9587bd1cefbee7cb0bc3bf&response_type=code&client_id=e4a62faf-4b87-4fea-8565-caaabb3ac918&scope=web%3Acore&access_type=offline&state=6801c04b7aeeed96f836b93833dd667ed8d0aa4306bf8f00e94b4fc8dc0175ef&service_entity=urn%3Aservice-entity%3Apsn&ui=pr&smcid=web%3Apdc&redirect_uri=https%3A%2F%2Fweb.np.playstation.com%2Fapi%2Fsession%2Fv1%2Fsession%3Fredirect_uri%3Dhttps%253A%252F%252Fio.playstation.com%252Fcentral%252Fauth%252Flogin%253Flocale%253Des_CL%2526postSignInURL%253Dhttps%25253A%25252F%25252Fwww.playstation.com%25252Fes-cl%25252Fplaystation-network%25252F%2526cancelURL%253Dhttps%25253A%25252F%25252Fwww.playstation.com%25252Fes-cl%25252Fplaystation-network%25252F%26x-psn-app-ver%3D%2540sie-ppr-web-session%252Fsession%252Fv5.12.0&auth_ver=v3&error=login_required&error_code=4165&error_description=User+is+not+authenticated&no_captcha=false&cid=8faec23d-0e9b-4d74-ac0e-046d655860d4#/signin/ca?entry=ca"
        target="_blank"><img class="image-links" src="resources/images/playstation-image.png" alt="playstation page" /></a>
        <a href="https://accounts.nintendo.com/authorize_guide?type=mixed&redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fclient_id%3De56201e414c97a10%26display%3Dtouch%26interacted%3D1%26prompt%3Dconsent%26redirect_uri%3Dhttps%253A%252F%252Fwww.nintendo.com%26response_mode%3Dweb_message%26response_type%3Dcode%2Bid_token%2Btoken%26scope%3DeshopAlps%2BmissionStatus%2BmissionStatus%253Aprogress%2Bopenid%2BpointWallet%2Buser%2Buser.birthday%2Buser.links%255B%255D.id%2Buser.mii%2Buser.wishlist%2BuserNotificationMessage%253AanyClients%2BuserNotificationMessage%253AanyClients%253Awrite%26state%3Dbb0eba9cec312f791d15e15864b5ab48%26web_message_target%3Dop-frame%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com"
        target="_blank"><img class="image-links" src="resources/images/nintendo-image.png" alt="nintendo page" /></a>
        <a href="https://www.epicgames.com/id/login?lang=es-ES&noHostRedirect=true&redirectUrl=https%3A%2F%2Fwww.epicgames.com%2Fstore%2Fes-ES%2F&client_id=875a3b57d3a640a6b7f9b4e883463ab4"
        target="_blank"><img class="image-links"src="resources/images/epic-image.png" alt="epic page" /></a>
    </aside>
    <section class="post-container">
      <div class="post">
        <div class="textarea-container">
          <textarea class="post-theme" id="postTheme" cols="10" rows="1"
            placeholder="Ingresa el juego o plataforma"></textarea>
          <textarea class="post-message" id="postMessage" cols="15" rows="5"
            placeholder="¿Qué quieres compartir?"></textarea>
        </div>
        <button class="post-btn" id="postBtn" type="submit">Publicar</button>
      </div>
    </section>
      <section class="post-container-user" id="postSection">
      </section>
      <footer class="footer-desktop">
        <p>©Copyright  Claudia Gómez - Susan Ortiz - Yésika Rodríguez</p>
      </footer>
    </div>
  <footer class="footer-mobile">
    <div class="footer-container">
      <a href="https://store.steampowered.com/login/?redir=%3Fsnr%3D1_60_4__global-header&redir_ssl=1&snr=1_4_4__global-header"
        target="_blank"><img src="resources/images/steam.png" alt="steam page" /></a>
      <a href="https://my.account.sony.com/central/signin/?duid=0000000700090100fd503bc9c84c20ebfc8ede27a8eaf5128d93fef74a9587bd1cefbee7cb0bc3bf&response_type=code&client_id=e4a62faf-4b87-4fea-8565-caaabb3ac918&scope=web%3Acore&access_type=offline&state=6801c04b7aeeed96f836b93833dd667ed8d0aa4306bf8f00e94b4fc8dc0175ef&service_entity=urn%3Aservice-entity%3Apsn&ui=pr&smcid=web%3Apdc&redirect_uri=https%3A%2F%2Fweb.np.playstation.com%2Fapi%2Fsession%2Fv1%2Fsession%3Fredirect_uri%3Dhttps%253A%252F%252Fio.playstation.com%252Fcentral%252Fauth%252Flogin%253Flocale%253Des_CL%2526postSignInURL%253Dhttps%25253A%25252F%25252Fwww.playstation.com%25252Fes-cl%25252Fplaystation-network%25252F%2526cancelURL%253Dhttps%25253A%25252F%25252Fwww.playstation.com%25252Fes-cl%25252Fplaystation-network%25252F%26x-psn-app-ver%3D%2540sie-ppr-web-session%252Fsession%252Fv5.12.0&auth_ver=v3&error=login_required&error_code=4165&error_description=User+is+not+authenticated&no_captcha=false&cid=8faec23d-0e9b-4d74-ac0e-046d655860d4#/signin/ca?entry=ca"
        target="_blank"><img src="resources/images/ps.png" alt="playstation page" /></a>
      <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&rver=7.3.6963.0&wp=MBI_SSL&wreply=https:%2f%2faccount.xbox.com%2fes-cl%2faccountcreation%3freturnUrl%3dhttps%253a%252f%252fwww.xbox.com%252fes-CL%252fgames%252ffree-to-play%26ru%3dhttps%253a%252f%252fwww.xbox.com%252fes-CL%252fgames%252ffree-to-play%26rtc%3d1%26csrf%3dyksz-vgvEqbXU8RMbcjry6pFfAGk7OiJtGclMXJAnGO11BMC6abw2Dy6YIMvhpAraZtdShUAjxQzGPlJhzsdvDCkdUk1&lc=13322&id=292543&aadredir=1"
        target="_blank"><img src="resources/images/xbox.png" alt="xbox page" /></a>
      <a href="https://www.epicgames.com/id/login?lang=es-ES&noHostRedirect=true&redirectUrl=https%3A%2F%2Fwww.epicgames.com%2Fstore%2Fes-ES%2F&client_id=875a3b57d3a640a6b7f9b4e883463ab4"
        target="_blank"><img src="resources/images/epic.png" alt="epic page" /></a>
      <a href="https://accounts.nintendo.com/authorize_guide?type=mixed&redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fclient_id%3De56201e414c97a10%26display%3Dtouch%26interacted%3D1%26prompt%3Dconsent%26redirect_uri%3Dhttps%253A%252F%252Fwww.nintendo.com%26response_mode%3Dweb_message%26response_type%3Dcode%2Bid_token%2Btoken%26scope%3DeshopAlps%2BmissionStatus%2BmissionStatus%253Aprogress%2Bopenid%2BpointWallet%2Buser%2Buser.birthday%2Buser.links%255B%255D.id%2Buser.mii%2Buser.wishlist%2BuserNotificationMessage%253AanyClients%2BuserNotificationMessage%253AanyClients%253Awrite%26state%3Dbb0eba9cec312f791d15e15864b5ab48%26web_message_target%3Dop-frame%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com"
        target="_blank"><img src="resources/images/nintendo.png" alt="nintendo page" /></a>
    </div>
  </footer>`;

  feedContainer.innerHTML = feedView;
  displayFeed();

  const post = feedContainer.querySelector("#postBtn");
  post.addEventListener("click", () => {
    const postTheme = feedContainer.querySelector("#postTheme").value;
    const postMessage = feedContainer.querySelector("#postMessage").value;
    const theme = document.getElementById("postTheme").value;
    const message = document.getElementById("postMessage").value;
    if (theme === "") {
      alert("El tema está vacío, por favor escribe algo.");
    } else if (message === "") {
      alert("El mensaje está vacío, por favor escribe algo.");
    } else {
      postData(postTheme, postMessage);
      console.log(postTheme, postMessage);
    }
  });

  const btnLogout = feedContainer.querySelector("#logoutBtn");
  btnLogout.addEventListener("click", () => {
    logOut();
  });

  return feedContainer;
};
