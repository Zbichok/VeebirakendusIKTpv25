let raamat = {
    pealkiri: "Kniga",
    autor: "Bread Pitt",
    aasta: 2005,
    zanr: "romaan",

    kirjeldus() {
        return this.pealkiri + " (" + this.autor + ", " + this.aasta + ")";
    },

    kuvaKirjeldus() {
        document.getElementById("raamatuInfo").innerHTML =
            "Raamat: " + this.kirjeldus();
    },

    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
        this.kuvaKirjeldus();
    }
};

raamat.kuvaKirjeldus();
raamat.muudaAastat(1933);


let raamatukogu = {
    raamatud: [
        { pealkiri: "Kniga", autor: "Bread Pitt", aasta: 2005 },
        { pealkiri: "1984", autor: "George Orwell", aasta: 1949 },
        { pealkiri: "Harry Potter", autor: "Kto to", aasta: 1996 },
        { pealkiri: "Pirati", autor: "Dzhek Vorobej", aasta: 2000 },
        { pealkiri: "Sipsik", autor: "Pisatel", aasta: 2007 }
    ],

    kuvaRaamatud() {
        let tulemus = "";

        this.raamatud.forEach((r, i) => {
            tulemus +=
                (i + 1) + ". " +
                r.pealkiri + " - " +
                r.autor + " (" +
                r.aasta + ")<br>";
        });

        document.getElementById("raamatud").innerHTML = tulemus;
    },

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({
            pealkiri: pealkiri,
            autor: autor,
            aasta: aasta
        });

        this.kuvaRaamatud();
    },

    kuvaKoguarv() {
        document.getElementById("statistika").innerHTML +=
            "Raamatuid kokku: " + this.raamatud.length + "<br>";
    },

    mituParast2000() {
        let arv = 0;

        this.raamatud.forEach(r => {
            if (r.aasta > 2000) {
                arv++;
            }
        });

        document.getElementById("statistika").innerHTML +=
            "Pärast 2000. aastat ilmunud raamatuid: " + arv + "<br>";
    },

    otsiAutori(autor) {
        let leitud = this.raamatud.filter(r => r.autor === autor);

        let tulemus = "Autori " + autor + " raamatud:<br>";

        leitud.forEach(r => {
            tulemus += "- " + r.pealkiri + " (" + r.aasta + ")<br>";
        });

        if (leitud.length === 0) {
            tulemus += "Raamatuid ei leitud.<br>";
        }

        document.getElementById("statistika").innerHTML += tulemus;
    }
};

raamatukogu.kuvaRaamatud();

raamatukogu.lisaRaamat("Päikesepoeg", "Mari Saat", 2015);

raamatukogu.kuvaKoguarv();
raamatukogu.mituParast2000();
raamatukogu.otsiAutori("Andrus Kivirähk");
