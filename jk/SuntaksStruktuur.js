let raamat = {
    // omadused
    pealkiri: "Kniga",
    autor: "Bread Pitt",
    aasta: 2005,
    zanr: "romaan",

    // meetodid
    kirjeldus() {
        return this.pealkiri + " (" + this.autor + ", " + this.aasta + ")";
    },

    kuvaKirjeldus() {
        console.log("Raamat: " + this.kirjeldus());
    },

    muudaAastat(uusAasta) {
        console.log("Vana aasta: " + this.aasta);
        this.aasta = uusAasta;
        console.log("Uus aasta: " + this.aasta);
    }
};

raamat.kuvaKirjeldus();
raamat.muudaAastat(1933);
raamat.kuvaKirjeldus();

let raamatukogu = {
    raamatud: [
        { pealkiri: "Kniga", autor: "Bread Pitt", aasta: 2005 },
        { pealkiri: "1984", autor: "George Orwell", aasta: 1949 },
        { pealkiri: "Harry Potter", autor: "Kto to", aasta: 1996 },
        { pealkiri: "Pirati", autor: "Dzhek Vorobej", aasta: 2000 },
        { pealkiri: "Sipsik", autor: "Pisatel", aasta: 2007 }
    ],

    kuvaRaamatud() {
        console.log("--- Raamatukogu raamatud ---");
        this.raamatud.forEach((r, i) => {
            console.log((i + 1) + ". " + r.pealkiri + " - " + r.autor + " (" + r.aasta + ")");
        });
    },

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        console.log('Lisatud: "' + pealkiri + '"');
    },

    kuvaKoguarv() {
        console.log("Raamatuid kokku: " + this.raamatud.length);
    },

    mituParast2000() {
        let arv = 0;
        this.raamatud.forEach(r => {
            if (r.aasta > 2000) {
                arv++;
            }
        });
        console.log("Pärast 2000. aastat ilmunud raamatuid: " + arv);
    },

    otsiAutori(autor) {
        let leitud = this.raamatud.filter(r => r.autor === autor);
        console.log("Autori " + autor + " raamatud:");
        leitud.forEach(r => console.log(" - " + r.pealkiri + " (" + r.aasta + ")"));
    }
};

raamatukogu.kuvaRaamatud();
raamatukogu.lisaRaamat("Päikesepoeg", "Mari Saat", 2015);
raamatukogu.kuvaRaamatud();
raamatukogu.kuvaKoguarv();
raamatukogu.mituParast2000();
raamatukogu.otsiAutori("Andrus Kivirähk");