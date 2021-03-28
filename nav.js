
function addNav() {
    var elem = document.getElementById("main_nav");
    var nav = [
        {
            href: "bio.html",
            name: "BIO"
        },
        {
            href: "music.html",
            name: "MUSIC"
        },
        {
            href: "podcast.html",
            name: "PODCAST"
        },
        {
            href: "gallery.html",
            name: "GALLERY"
        },
        {
            href: "shop.html",
            name: "SHOP"
        },
        {
            href: "https://mailchi.mp/dd26f6cec045/join-our-mailing-list",
            name: "SUBSCRIBE"
        },
        {

            href: "https://www.facebook.com/automaticpanic",
            name: "FACEBOOK"
        },
        {
            href: "https://soundcloud.com/automaticpanic",
            name: "SOUNDCLOUD"
        },
        {
            href: "https://www.instagram.com/automaticpanicband",
            name: "INSTAGRAM"
        },
        {

            href: "https://open.spotify.com/artist/0lzo8cm8bdkSzHCai6QdgK",
            name: "SPOTIFY"
        }
    ]

    nav.forEach(element => {
        var link = document.createElement("a");
        link.href = element.href;
        link.innerText = element.name;
        link.type = "button";
        elem.appendChild(link);
    });
}