function sendwhatsapp(){
    var message = "https://wa.me/+201009021263" + "?text=" + "hello";

    window.open(message, '_blank').focus();
}

const menu = document.getElementById("menu");
const action = document.getElementById("action");
const lang = document.getElementById("lang");

menu.addEventListener("click", ()=>{
    handleMenu();
})
action.addEventListener("click", ()=>{
    handleMenu();
})
lang.addEventListener("click", ()=>{
    handleMenu();
})

function handleMenu(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}



let scroll = document.querySelector(".up");
window.onscroll = function () {
    (this.scrollY >= 70) ? scroll.classList.add("show") : scroll.classList.remove("show");
}


const translation = {
    en: {
        about1: "About Us",
        services1: "Courses",
        skills1: "Record With Us",
        studio: "MusicDream",
        since: "Since 2020.",
        title: "Where Every Dream Becomes a Melody.",
        followus: "Follow Us..",
        aboutTitle: "About Us",
        recordingStudio: "Recording Studio",
        aboutText: `
            - Music Dream Records is a creative recording studio founded in 2020. <br>
            - Our passion is to transform dreams into music that inspires and connects people. <br>
            - We offer professional recording, mixing, mastering services, and educational courses for aspiring artists. <br>
            - At Music Dream, we believe that every voice deserves to be heard and every dream deserves a chance to shine. 
        `,
        
    },
    ar: {
        about1: "نبذة عنا",
        services1: "الدورات",
        skills1: "سجّل معنا",
        studio: "استوديو الحلم",
        since: "منذ 2020",
        title: "حيث يتحول كل حلم إلى لحن",
        followus: "تابعنا..",
        aboutTitle: "من نحن",
        recordingStudio: "استوديو التسجيل",
        aboutText: `
            - "ميوزك دريم ريكوردز" هو استوديو تسجيل إبداعي تأسس عام 2020. <br>
            - شغفنا هو تحويل الأحلام إلى موسيقى تلهم وتربط بين الناس. <br>
            - نقدم خدمات التسجيل والميكساج والماسترينج الاحترافية، ودورات تعليمية للفنانين الطموحين. <br>
            - في "ميوزك دريم"، نؤمن أن كل صوت يستحق أن يُسمع، وكل حلم يستحق فرصة للتألق.
        `,
        
    }
};

const langSelectop = document.getElementById("lang");
const rev = document.querySelector(".content");
const revtxt = document.querySelector(".container-text");

langSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {
    const trans = translation[language];

    for (const key in trans) {
        let element = document.getElementById(key);
        if (element) {
            element.innerText = trans[key];
        }
    }

    if (language === "ar") {
        rev.classList.add("ar");
        revtxt.classList.add("revtxt");
    } else {
        rev.classList.remove("ar");
        revtxt.classList.remove("revtxt");
    }
}
