function teisendamine(){
    let vastus = document.getElementById("vastus");
    let valik=document.getElementById("valik"); //mitu elemnti ühe nimega
    let arv=document.getElementById("arv");

    const toll=39.37;
    const meeter=0.0254

    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value=="meeter"){
                vastus.innerHTML=arv.value*toll + "meetri = "+
                    arv.value*toll + "tolli";
                vastus.style.color="red"
            } else if(valik[i].value==="meeter") {
            vastus.innerHTML=arv.value*meeter+"meetri" +
            arv.value*meeter;
            vastus.style.color="green";
            }
            else {
                vastus.innerHTML=+ "vali üheku - kas meeter või toll"
            }
        }
    }
}