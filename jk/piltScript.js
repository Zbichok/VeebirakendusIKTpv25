// Juhuslik pilt – pilt võetakse massiivist
function juhuslikPilt() {
    let pildid = [
        "../images/smile.png",
        "../images/neutral.png",
        "../images/Kurb.png",
        "../images/lill.png"
    ];

    const pilt = pildid[Math.floor(Math.random() * pildid.length)];
    let randomPilt = document.getElementById("randomPilt");

    randomPilt.src = pilt;
}


// Select-valik
function selectValik() {
    let vastus = document.getElementById("vastus");
    let valik = document.getElementById("valik");
    let randomPilt = document.getElementById("randomPilt");

    if (randomPilt.getAttribute("src") == valik.value) {
        vastus.innerHTML = "Õige!";
        vastus.style.color = "green";
    } else {
        vastus.innerHTML = "VALE!";
        vastus.style.color = "red";
    }
}


// Radio-valik
function radioValik() {
    let piltValik = document.getElementsByName("piltValik");
    let valitudPilt = document.getElementById("valitudPilt");

    for (let i = 0; i < piltValik.length; i++) {
        if (piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
            break;
        }
    }
}