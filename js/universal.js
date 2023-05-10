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
        Spotifry
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
    <a href="https://github.com/frostburnspirit/Music-Taste-Identifier" target="_blank"><i class="fa-brands fa-github"></i><br>Github</a>
    <a href="https://discord.gg/UBSeZXk7Jb" target="_blank"><i class="fa-brands fa-discord"></i><br>Discord</a>
    <a href="https://www.youtube.com/@frostburnspirit9065" target="_blank"><i class="fa-brands fa-youtube"></i><br>YouTube</a>
    <a href="https://open.spotify.com/user/kk2va0daimie47hl2f8xmmcfx?si=90f51ea22f884ae4" target="_blank"><i class="fa-brands fa-spotify"></i><br>Spotify</a>
</div>
<div id="footer-language">
</div>
`;

footer.insertAdjacentHTML("beforeend", footerHtml);

// 1. resources: contact, faq
// 2. info: about, privacy policy, terms of service, credits
// 3. socials + easter egg icon
// 4. language
