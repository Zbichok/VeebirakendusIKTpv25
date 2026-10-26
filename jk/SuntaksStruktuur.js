let raamat = {
    pealkiri: "Kniga",
    autor: "Bread Pitt",
    aasta: 2005,
    zanr: "romaan",

    kirjeldus() {
        return this.pealkiri + " (" + this.autor + ", " + this.aasta + ")";
    },

    kuvaKirjeldus() {
        console.log("Raamat: " + this.kirjeldus());
    },

    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
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
        this.raamatud.forEach((r) => {
            console.log(`
        Pealkiri: ${r.pealkiri},
        Autor: ${r.autor},
        Aasta: ${r.aasta}
      `);
        });
    },

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
    },

    kuvaKoguarv() {
        console.log("Raamatuid kokku: " + this.raamatud.length);
    },

    mituParast2000() {
        let arv = 0;
        this.raamatud.forEach((r) => {
            if (r.aasta > 2000) {
                arv++;
            }
        });
        console.log("Pärast 2000. aastat ilmunud raamatuid: " + arv);
    },

    otsiAutori(autor) {
        let leitud = false;
        this.raamatud.forEach((r) => {
            if (r.autor === autor) {
                console.log(r.pealkiri + " (" + r.aasta + ")");
                leitud = true;
            }
        });
        if (leitud === false) {
            console.log("Raamatuid ei leitud.");
        }
    }
};

raamatukogu.kuvaRaamatud();

raamatukogu.lisaRaamat("Päikesepoeg", "Mari Saat", 2015);

raamatukogu.raamatud.unshift({ pealkiri: "Pipi", autor: "Astrid Lindgren", aasta: 1945 });

raamatukogu.raamatud.splice(2, 1);

raamatukogu.kuvaKoguarv();
raamatukogu.mituParast2000();
raamatukogu.otsiAutori("Mari Saat");
