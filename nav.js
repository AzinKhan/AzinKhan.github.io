
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

    var images = [
        {
            href: "https://www.facebook.com/automaticpanic",
            title: "Facebook",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_36x36.svg"
        },
        {
            href: "https://soundcloud.com/automaticpanic",
            title: "Soundcloud",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Antu_soundcloud.svg/72px-Antu_soundcloud.svg.png"
        },
        {
            href: "https://www.instagram.com/automaticpanicband",
            title: "Instagram",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/72px-Instagram_logo_2016.svg.png"
        },
        {
            href: "https://open.spotify.com/artist/0lzo8cm8bdkSzHCai6QdgK",
            title: "Spotify",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/72px-Spotify_logo_without_text.svg.png"
        }
    ]

    images.forEach(element => {
        var link = document.createElement("a");
        link.href = element.href;
        link.title = element.title;
        
        var img = new Image();
        img.src = element.image;
        img.alt = element.title;
        // Setting this in css doesn't work
        img.width = 30;
        img.height = 30;
        
        link.appendChild(img);
        navbar.appendChild(link); 
    });

    var hamburger = document.getElementById("nav_icon");
    var hb = new Image();
    hb.src = "/Hamburger_icon.svg";
    hamburger.className = "burger";
    hamburger.onclick = function() {
        currentStyle = navbar.style.display;
        isShown = currentStyle === "block";
        navbar.style.display = isShown ? "none" : "block";
    }
    hamburger.appendChild(hb);
}
