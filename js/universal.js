let header = document.getElementById("header");
let footer = document.getElementById("footer");

let headerHtml = `
<div id="logo">
    <a href="index.html" id="logo-image">
        <i id="logo-lines-top" class="fa-regular fa-circle logo-icon"></i>
        <i id="logo-lines-bottom" class="fa-regular fa-circle logo-icon"></i>
        <i id="logo-fire" class="fa-solid fa-fire logo-icon"></i>
    </a>
    <h1 id="logo-text">
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
<button id="login">
    login
</button>`;
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
<div id="footer-links-settings">
    <div id="footer-links">
        <h2>Links</h2>
        <div class="flex-br"></div>
        <a href="https://github.com/frostburnspirit/Music-Taste-Identifier" target="_blank"><i class="fa-brands fa-github"></i><br><p>Github</p></a>
        <a href="https://discord.gg/UBSeZXk7Jb" target="_blank"><i class="fa-brands fa-discord"></i><br><p>Discord</p></a>
        <div class="flex-br"></div>
        <a href="https://www.youtube.com/@frostburnspirit9065" target="_blank"><i class="fa-brands fa-youtube"></i><br><p>YouTube</p></a>
        <a href="https://open.spotify.com/user/kk2va0daimie47hl2f8xmmcfx?si=90f51ea22f884ae4" target="_blank"><i class="fa-brands fa-spotify"></i><br><p>Spotify</p></a>
    </div>
    <form id="language-form" class="range-container">
        <label for="language-select">Language</label>
        <select id="language-select" name="language">
            <option value="en">English</option>
            <option value="se">Svenska</option>
            <option value="de">Deutsch</option>
            <option value="pt">Português</option>
        </select>
    </form>
</div>
`;

footer.insertAdjacentHTML("beforeend", footerHtml);

// 1. resources: contact, faq
// 2. info: about, privacy policy, terms of service, credits
// 3. socials + easter egg icon
// 4. language

/*









*/

function regularScreen1() {
  //   editHtml("github-link-text", "Github");
  //   editHtml("discord-link-text", "Discord");
  //   editHtml("youtube-link-text", "YouTube");
  //   editHtml("spotify-link-text", "Spotify");
}
function phoneScreen1() {
  // removes text from footer icons to save space
  //   editHtml("github-link-text", "");
  //   editHtml("discord-link-text", "");
  //   editHtml("youtube-link-text", "");
  //   editHtml("spotify-link-text", "");
}

function editHtml(id, newHTML, extra) {
  if (extra === "delete") {
    document.getElementById(id).remove();
  } else if (extra === "before") {
    document.getElementById(id).insertAdjacentHTML("beforebegin", newHTML);
  } else if (extra === "after") {
    document.getElementById(id).insertAdjacentHTML("afterend", newHTML);
  } else {
    document.getElementById(id).innerHTML = newHTML;
  }
}

let mediaQuery = window.matchMedia("(min-width: 480px)");
let LAYOUT = false;

function screenCheck(e, notFirstTime) {
  if (e.matches) {
    LAYOUT = "regular";
  } else {
    LAYOUT = "phone";
  }
  updateLayout2();
}

screenCheck(mediaQuery, false);
mediaQuery.addEventListener("change", function (event) {
  screenCheck(event.target, true);
});
