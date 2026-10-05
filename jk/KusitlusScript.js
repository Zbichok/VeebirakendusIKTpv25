
function KeeledValik() {
    let valik = "";
    document.querySelectorAll('input[type="checkbox"]').forEach(function (keel) {
        if (keel.checked) {
            valik += keel.id + " ";
        }
    });
    document.getElementById("v1").innerHTML =
        valik ? "Sinu valitud programmeerimiskeeled: " + valik : "";
    return valik;
}
function arvamusValik() {
    let arvamus = document.getElementById("arvamus").value;

    document.getElementById("v2").innerHTML =
        arvamus ? "Sinu arvamus: " + arvamus : "";
    return arvamus;
}
function tunnidValik() {
    let tunnid = document.getElementById("tunnid").value;
    document.getElementById("v3").innerHTML =
        tunnid ? "Tegeled programmeerimisega " + tunnid + " tundi nädalas." : "";
    return tunnid;
}
function meeldibValik() {
    let valik = "";

    if (document.getElementById("jah").checked) {
        valik = "Programmeerimine meeldib!";
    }
    if (document.getElementById("ei").checked) {
        valik = "Programmeerimine ei meeldi.";
    }
    document.getElementById("v4").innerHTML = valik;

    return valik;
}
function tooriistadValik() {
    let tooriistad = document.getElementById("tooriistad").value;

    document.getElementById("v5").innerHTML =
        tooriistad ? "Sinu nimetatud tööriistad: " + tooriistad : "";

    return tooriistad;
}
function soovValik() {
    let soov = document.getElementById("soov").value;
    document.getElementById("v6").innerHTML =
        soov !== "Vali" ? "Sinu valik: " + soov : "";
    return soov !== "Vali" ? soov : "";
}
function saada() {
    let tulemus = document.getElementById("tulemus");



    tulemus.innerHTML =
        "Sinu valitud programmeerimiskeeled: " + KeeledValik() + "<br>" +
        "Sinu arvamus: " + arvamusValik() + "<br>" +
        "Tegeled programmeerimisega: " + tunnidValik() + " tundi nädalas<br>" +
        "Kas meeldib: " + meeldibValik() + "<br>" +
        "Tööriistad: " + tooriistadValik() + "<br>" +
        "Soovitud keel: " + soovValik();
}
function puhasta() {
    document.getElementById("ProgramKusitlus").reset();

    for (let i = 1; i <= 6; i++) {
        document.getElementById("v" + i).innerHTML = "";
    }
    document.getElementById("tulemus").innerHTML = "";
}
