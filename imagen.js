(function() {
  let i = 0;
  let foto = [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/header.jpg?t=1655449232",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1556790/header_alt_assets_0.jpg?t=1663233747"
];
  let el = document.getElementById('img_to_flip');
  function toggle() {
    el.src = foto[i];
    i = (i + 1) % foto.length;
  }
  setInterval(toggle, 3000);
})();
