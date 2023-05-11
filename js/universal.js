let header = document.getElementById("header");
let footer = document.getElementById("footer");

let headerHtml = `
<div id="logo">
    <div id="logo-image">
        <i id="logo-lines-top" class="fa-regular fa-circle logo-icon"></i>
        <i id="logo-lines-bottom" class="fa-regular fa-circle logo-icon"></i>
        <i id="logo-fire" class="fa-solid fa-fire logo-icon"></i>
    </div>
    <h1>
        Frostifry
    </h1>
</div>
<nav>
    <ul>
        <li>
            <a href="index.html">Music Test Identifier</a>
        </li>
        <li>
            <a href="contact.html">Contact Us</a>
        </li>
        <li>
            <a href="about.html">About</a>
        </li>
    </ul>
</nav>
<div id="login">
    hi
</div>`;
header.insertAdjacentHTML("beforeend", headerHtml);

let footerHtml = `
<div id="footer-resources">
    <h2>Info</h2>
    <ul>
        <li>
            <a href="contact.html" target="_blank">Contact Us</a>
        </li>
        <li>
            <a href="empty.html" target="_blank">FAQ</a>
        </li>
    </ul>
</div>
<div id="footer-info">
    <h2>Info</h2>
    <ul>
        <li>
            <a href="about.html" target="_blank">About Us</a>
        </li>
        <li>
            <a href="empty.html" target="_blank">Terms of Service</a>
        </li>
        <li>
            <a href="empty.html" target="_blank">Privacy Policy</a>
        </li>
        <li>
            <a href="credits.html" target="_blank">Credits</a>
        </li>
    </ul>
</div>
<div id="footer-links">
    <h2>Links</h2>
    <div class="flex-br"></div>
    <a href="https://github.com/frostburnspirit/Music-Taste-Identifier" target="_blank"><i class="fa-brands fa-github"></i><p id="github-link-text"></p></a>
    <a href="https://discord.gg/UBSeZXk7Jb" target="_blank"><i class="fa-brands fa-discord"></i><br><p id="discord-link-text"></p></a>
    <a href="https://www.youtube.com/@frostburnspirit9065" target="_blank"><i class="fa-brands fa-youtube"></i><br><p id="youtube-link-text"></p></a>
    <a href="https://open.spotify.com/user/kk2va0daimie47hl2f8xmmcfx?si=90f51ea22f884ae4" target="_blank"><i class="fa-brands fa-spotify"></i><br><p id="spotify-link-text"></p></a>
</div>
<div id="footer-language">
</div>
`;

footer.insertAdjacentHTML("beforeend", footerHtml);

// 1. resources: contact, faq
// 2. info: about, privacy policy, terms of service, credits
// 3. socials + easter egg icon
// 4. language

/*









*/

function editHTML(id, newHTML) {
  document.getElementById(id).innerHTML = newHTML;
}

function regularScreen1() {
  editHTML("github-link-text", "Github");
  editHTML("discord-link-text", "Discord");
  editHTML("youtube-link-text", "YouTube");
  editHTML("spotify-link-text", "Spotify");
}
function phoneScreen1() {
  editHTML("github-link-text", "");
  editHTML("discord-link-text", "");
  editHTML("youtube-link-text", "");
  editHTML("spotify-link-text", "");
}

let mediaQuery = window.matchMedia("(min-width: 480px)");

function screenCheck(e, notFirstTime) {
  if (e.matches) {
    regularScreen1();
  } else if (notFirstTime) {
    console.log("b");
    phoneScreen1();
  }
}

screenCheck(mediaQuery, false);
mediaQuery.addEventListener("change", function (event) {
  screenCheck(event.target, true);
});
