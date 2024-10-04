function sendwhatsapp(){
    var message = "https://wa.me/+201009021263" + "?text=" + "hello";

    window.open(message, '_blank').focus();
}



let scroll = document.querySelector(".up");
window.onscroll = function () {
    (this.scrollY >= 100) ? scroll.classList.add("show") : scroll.classList.remove("show");
}


// Translation
const translation = {
    en:{
        nav_li1: "Home",
        nav_li2: "About Me",
        nav_li3: "Services",
        nav_li4: "Records",
        nav_li5: "Contact Me",
        st: "MusicDream",
        since: "Since 2020.",
        title: "Music Is Our Dream."
    },
    ar:{
        nav_li1: "الرئيسية",
        nav_li2: "نبذه عني",
        nav_li3: "الخدمات",
        nav_li4: "تسجيلات",
        nav_li5: "تواصل معي",
        st: "استوديو الاحلام",
        since: ".منذ 2020",
        title: ".الموسيقى هي حلمنا"
    }
}

const langSelectop = document.querySelector("select");
let nav1 = document.getElementById("home");
let nav2 = document.getElementById("about1");
let nav3 = document.getElementById("services1");
let nav4 = document.getElementById("skills1");
let nav5 = document.getElementById("contact1");
let stT = document.getElementById("studio");
let sinceT = document.getElementById("since");
let titleT = document.getElementById("title");
let rev = document.querySelector(".content");
let revtxt = document.querySelector(".container-text");

langSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})


const setLanguage = (language) => {
    if (language == "ar"){
        // nav1.innerText = translation.ar.nav_li1;
        nav2.innerText = translation.ar.nav_li2;
        nav3.innerText = translation.ar.nav_li3;
        nav4.innerText = translation.ar.nav_li4;
        nav5.innerText = translation.ar.nav_li5;
        stT.innerText = translation.ar.st;
        sinceT.innerText = translation.ar.since;
        titleT.innerText = translation.ar.title;
        rev.classList.add("ar");
        revtxt.classList.add("revtxt");
    }else if (language == "en"){
        // nav1.innerText = translation.en.nav_li1;
        nav2.innerText = translation.en.nav_li2;
        nav3.innerText = translation.en.nav_li3;
        nav4.innerText = translation.en.nav_li4;
        nav5.innerText = translation.en.nav_li5;
        stT.innerText = translation.en.st;
        sinceT.innerText = translation.en.since;
        titleT.innerText = translation.en.title;
        rev.classList.remove("ar");
        revtxt.classList.remove("revtxt");
    }
}