// Ühe raamatu andmed
let raamat = {
    pealkiri: "Kniga",
    autor: "Bread Pitt",
    aasta: 2005,
    zanr: "romaan",

    // Näitab raamatu kirjeldust
    kirjeldus() {
        return this.pealkiri + " (" + this.autor + ", " + this.aasta + ")";
    },

    // Kuvab raamatu kirjelduse konsoolis
    kuvaKirjeldus() {
        console.log("Raamat: " + this.kirjeldus());
    },

    // Muudab raamatu ilmumisaastat
    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
    }
};

// Kuvab raamatu andmed
raamat.kuvaKirjeldus();

// Muudab aasta 1933-ks
raamat.muudaAastat(1933);

// Kuvab muudetud andmed
raamat.kuvaKirjeldus();


// Raamatukogu andmed
let raamatukogu = {
    // Raamatukogu raamatute nimekiri
    raamatud: [
        { pealkiri: "Kniga", autor: "Bread Pitt", aasta: 2005 },
        { pealkiri: "1984", autor: "George Orwell", aasta: 1949 },
        { pealkiri: "Harry Potter", autor: "Kto to", aasta: 1996 },
        { pealkiri: "Pirati", autor: "Dzhek Vorobej", aasta: 2000 },
        { pealkiri: "Sipsik", autor: "Pisatel", aasta: 2007 }
    ],

    // Kuvab kõik raamatud
    kuvaRaamatud() {
        this.raamatud.forEach((r) => {
            console.log(`
Pealkiri: ${r.pealkiri},
Autor: ${r.autor},
Aasta: ${r.aasta}
`);
        });
    },

    // Lisab raamatukokku uue raamatu
    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
    },

    // Kuvab raamatute koguarvu
    kuvaKoguarv() {
        console.log("Raamatuid kokku: " + this.raamatud.length);
    },

    // Loendab pärast 2000. aastat ilmunud raamatud
    mituParast2000() {
        let arv = 0;

        this.raamatud.forEach((r) => {
            if (r.aasta > 2000) {
                arv++;
            }
        });

        console.log("Pärast 2000. aastat ilmunud raamatuid: " + arv);
    },

    // Otsib raamatuid autori nime järgi
    otsiAutori(autor) {
        let leitud = false;

        this.raamatud.forEach((r) => {
            if (r.autor === autor) {
                console.log(r.pealkiri + " (" + r.aasta + ")");
                leitud = true;
            }
        });

        // Kui autorit ei leitud, kuvab teate
        if (leitud === false) {
            console.log("Raamatuid ei leitud.");
        }
    }
};

// Kuvab kõik raamatud
raamatukogu.kuvaRaamatud();

// Lisab uue raamatu
raamatukogu.lisaRaamat("Krutajakniga", "Dzonatan depp", 2015);

// Lisab raamatu nimekirja algusesse
raamatukogu.raamatud.unshift({
    pealkiri: "MegaKniga",
    autor: "Majkl Dzordan",
    aasta: 1945
});

// Eemaldab nimekirjast ühe raamatu
raamatukogu.raamatud.splice(2, 1);

// Kuvab raamatute koguarvu
raamatukogu.kuvaKoguarv();

// Loendab pärast 2000. aastat ilmunud raamatud
raamatukogu.mituParast2000();

// Otsib Mari Saadi raamatut
raamatukogu.otsiAutori("Majkl Dzordan");
