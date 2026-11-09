function joon() {
    const canvas = document.getElementById('Canvas');
    const tx = canvas.getContext('2d');

    tx.beginPath();
    tx.strokeStyle = "black";
    tx.lineWidth = 3;
    tx.moveTo(50, 50);
    tx.lineTo(200, 280);
    tx.stroke();
}
function puhasta() {
    const canvas = document.getElementById('Canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.clearRect(0,0,400,400);
    }
}
function kolmnurk() {
    const canvas = document.getElementById('Canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.clearRect(0, 0, 400, 400);
        tx.beginPath();
        tx.strokeStyle = "white";
        tx.lineWidth = 3;
        tx.fillstyle= "black";
        tx.moveTo(50, 50);
        tx.lineTo(200, 280);
        tx.lineTo(30, 350);
        tx.lineTo(50, 50);
        tx.stroke();
        tx.fill();
    }
}
function ristkylik() {
    const canvas = document.getElementById('Canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle = "white";
        tx.fillRect(100,150,200,250);
    }
}
function ring() {
    const canvas = document.getElementById('Canvas');
    const r=document.getElementById('raadius');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        // tx.beginPath();
        tx.strokeStyle = "black";
        tx.fillStyle = "White";
        tx.arc(200,200,150,0, 2*Math.PI, true);
        tx.fill();
    }
}
function ristkylik() {
    const canvas = document.getElementById('Canvas');
    let l = document.getElementById('laius');
    let k = document.getElementById('kyrgus');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.fillStyle = "white";
        tx.fillRect(100, 150, l.value, k.value);
    }
}
function pilt() {
    const canvas = document.getElementById('Canvas');
    //kolmnurk
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        const fail = new Image();
        fail.src = "https://picsum.photos/200/300?random=1";
        fail.onload = () => {
            tx.drawImage(fail, 50, 50, 250, 250);
        }
    }
}
function Obshivka() {
    const canvas = document.getElementById('Canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle = "blue";
        tx.fillRect(100,200,200,80);
        tx.fillRect(150,160,100,40);
    }
}

function Wheels1() {
    const canvas = document.getElementById('Canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "black";

        tx.beginPath();
        tx.arc(140, 280, 25, 0, 2 * Math.PI);
        tx.fill();
    }
}

function Wheels2() {
    const canvas = document.getElementById('Canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "black";

        tx.beginPath();
        tx.arc(260, 280, 25, 0, 2 * Math.PI);
        tx.fill();
    }
}

function Fari() {
    const canvas = document.getElementById('Canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "yellow";
        tx.beginPath();
        tx.moveTo(270, 220);
        tx.lineTo(400, 250);
        tx.lineTo(400, 150);
        tx.closePath();
        tx.fill();
    }
}
function Esiklaas() {
    const canvas = document.getElementById('Canvas');
    if(canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle = "yellow";
        tx.fillRect(155,165,90,35);
        tx.fillStyle = "black";
        tx.fillRect(200 ,165,2,35);
    }
}
