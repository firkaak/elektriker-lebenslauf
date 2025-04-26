document.onload = loadMeineVokab();



function loadMeineVokab() {

    const vokabeln = [
        "ausbildung",
        "erfahrung",
        "love",
        "vielseitiger",
        "elektrotechnik",
        "installation",
        "industrieelektriker",
        "verkabelung",
        "ausmessen",
        "verteiler",
        "ziehen",
        "entwickeln",
        "planung",
        "fotograf",
        "logisch",
        "denken"
    ];

    let w = window.innerWidth;
    let h = window.innerHeight;

    const vokabDisplay = document.getElementById("vokabeln");

    vokabDisplay.style.width = `${w * 0.75}px`;
    vokabDisplay.style.height = `${h * 0.8}px`;


    for (let i = 0; i < vokabeln.length; i++) {
        let x = randomX(w / 2);
        let y = randomX(h / 2);
        /*  let x = randomX(w/2);
         let y = randomX(h/2); */
        let fontSize = randomFontSize();
        let color = randomColor();

        let wordElement = document.createElement("span");
        wordElement.innerText = vokabeln[i];
        if (i % 4 == 0) {
            wordElement.classList.add("randomStyle2");

        } else {
            wordElement.classList.add("randomStyle1");
        }

        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;
        wordElement.style.fontSize = `${fontSize}px`;
        wordElement.style.color = color;

        vokabDisplay.appendChild(wordElement);
    }
};


function randomX(range) {
    return Math.random() * range;
}
function randomY(range) {
    return Math.random() * range;
}

function randomFontSize() {
    return 12 + Math.random() * 26;
}

function randomColor() {
    let hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 50%)`;
}

window.addEventListener("resize", function () {
    const vokabDisplay = document.getElementById("vokabeln");
    vokabDisplay.innerText = "";
    loadMeineVokab();

});









