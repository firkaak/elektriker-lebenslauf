document.onload = loadImage();

// imageloader
function loadImage() {
    const gallery = [
        "images/vezerloszekr2.jpg",
        "images/vezerloszekr1.jpg",
        "images/lampeninst.jpg",
        "images/kotodoboz2.jpg",
        "images/buhne.jpg",
        "images/sorkapocs2.jpg",
        "images/kabel2.jpg",
        "images/kabeln.jpg",
        "images/art.jpg",
        "images/kabelsammelhalter.jpg",
        "images/kiseloszto.jpg",
        "images/kotodoboz.jpg",
        "images/lampenanschließen.jpg",
        "images/lampeninst2.jpg",
        "images/elektriker.jpg",
        "images/arbeitsplatz.jpg",
        "images/led.jpg",
        "images/led2.jpg",
        "images/okos1.jpg",
        "images/arbeitsplatz2.jpg",
        "images/arbeitsplatz3.jpg",
        "images/repula.jpg",
        "images/robot_1.jpg",
        "images/robot2.jpg",
        "images/robot3.jpg",
        "images/schalter.jpg",
        "images/schatten.jpg",
        "images/sorkapocs.jpg",
        "images/steckdose.jpg",
        "images/art2.jpg",
        "images/szalag.jpg",
        "images/tetoablak.jpg",
        "images/tulfesz.jpg",
        "images/unterputz.jpg",
        "images/utvonal.jpg",
    ]

    for (let i = 0; i< gallery.length; i++){
        let image = document.createElement("img");
        image.setAttribute("src", gallery[i]);
        image.className = "gallerie";
        document.getElementById("gallerie").appendChild(image);  
    }
}