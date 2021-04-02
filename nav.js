
function addNav() {
    var navbar = document.getElementById("main_nav");
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
    ]

    nav.forEach(element => {
        var link = document.createElement("a");
        link.href = element.href;
        link.innerText = element.name;
        link.type = "button";
        navbar.appendChild(link);
    });
}
