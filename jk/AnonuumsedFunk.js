// 1. Erinevad funktsioonid

// klassikaline (anonüümne) funktsioon
var minuNimi = function() {
    console.log("Timoha Stoljar");
};
minuNimi();

// noolefunktsioon
const minuNimi2 = () => console.log("Timoha Stoljar");
minuNimi2();


// 2. Argumendiga funktsioon: kuupäev kujul 19.07.25

const kuupaevEesti = function(kuupaev) {
    const kuud = [
        "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"
    ];

    const osad = kuupaev.split(".");
    const paev = Number(osad[0]);
    const kuuNumber = Number(osad[1]);

    console.log(paev + ". " + kuud[kuuNumber - 1]);
};

kuupaevEesti("19.07.25"); // 19. juuli


// 3. Teadmata hulk täisarve: tagastab koguarvu ja keskmise

const arvudeKeskmine = function(...arvud) {
    let summa = 0;

    arvud.forEach(function(arv) {
        summa += arv;
    });

    return {
        kogus: arvud.length,
        keskmine: summa / arvud.length
    };
};

const tulemus = arvudeKeskmine(4, 8, 15, 16, 23, 42);
console.log("Arve kokku:", tulemus.kogus);
console.log("Keskmine:", tulemus.keskmine);


// 4. Salajane sõnum: vokaalid asendatakse tärniga

const salajaneSonum = sonum => sonum.replace(/[aeiouõäöüAEIOUÕÄÖÜ]/g, "*");
console.log(salajaneSonum("Tere maailm"));


// 5. Unikaalsed nimed (esialgses järjekorras)

const leiaUnikaalsedNimed = nimed => {
    const unikaalsed = [];

    nimed.forEach(nimi => {
        if (!unikaalsed.includes(nimi)) {
            unikaalsed.push(nimi);
        }
    });

    return unikaalsed;
};

console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));