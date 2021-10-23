function rpg(){
    const bers = new klasa(1,25,5,5,5,10);
    const lucz = new klasa(1,5,25,5,5,10);
    const mago = new klasa(1,5,25,5,10,5);
    const heal = new klasa(1,5,5,10,25,5);
    const tank = new klasa(1,10,5,5,5,25);

    klasaa = kla.value;

    var imgBers = "<img width=\"300px\" height=\"225px\" src=\"img\\hatchet.png\"/>"
    var imgLucz = "<img width=\"150px\" height=\"225px\" src=\"img\\bow.jpg\"/>"
    var imgMago = "<img width=\"200px\" height=\"225px\" src=\"img\\firestaff.png\"/>"
    var imgHeal = "<img width=\"150px\" height=\"225px\" src=\"img\\lifestaff.png\"/>"
    var imgTank = "<img width=\"150px\" height=\"225px\" src=\"img\\tank.jpg\"/>"


    switch(klasaa){
        case 'Berserker':
            wynik2.innerHTML = "Klasa: Berserker </br> Poziom: " + bers.lvl + "<br>Siła: " + bers.sil + "<br>Zręczność: "+ bers.zre + "<br>Inteligencja: "+ bers.int + "<br>Skupienie: "+ bers.sku + "<br>Punkty Życia: " + bers.pz;
            wynik3.innerHTML = imgBers;
            break;
        case 'Łucznik':
            wynik2.innerHTML = "Klasa: Łucznik </br> Poziom: " + lucz.lvl + "<br>Siła: " + lucz.sil + "<br>Zręczność: "+ lucz.zre + "<br>Inteligencja: "+ lucz.int + "<br>Skupienie: "+ lucz.sku + "<br>Punkty Życia: " + lucz.pz;
            wynik3.innerHTML = imgLucz;
            break;
        case 'Mag ognia':
            wynik2.innerHTML = "Klasa: Mag ognia </br> Poziom: " + mago.lvl + "<br>Siła: " + mago.sil + "<br>Zręczność: "+ mago.zre + "<br>Inteligencja: "+ mago.int + "<br>Skupienie: "+ mago.sku + "<br>Punkty Życia: " + mago.pz;
            wynik3.innerHTML = imgMago;
            break;
        case 'Healer':
            wynik2.innerHTML = "Klasa: Healer</br> Poziom: " + heal.lvl + "<br>Siła: " + heal.sil + "<br>Zręczność: "+ heal.zre + "<br>Inteligencja: "+ heal.int + "<br>Skupienie: "+ heal.sku + "<br>Punkty Życia: " + heal.pz;
            wynik3.innerHTML = imgHeal;
            break;
        case 'Tank':
            wynik2.innerHTML = "Klasa: Tank </br> Poziom: " + tank.lvl + "<br>Siła: " + tank.sil + "<br>Zręczność: "+ tank.zre + "<br>Inteligencja: "+ tank.int + "<br>Skupienie: "+ tank.sku + "<br>Punkty Życia: " + tank.pz;
            wynik3.innerHTML = imgTank;
            break;
            

    }

    wynik.innerHTML = imie.value;
    frakcja()
}

function frakcja(){
    var imgSyn = "<img width=\"150px\" height=\"225px\" src=\"img\\syndykat.png\"/>"
    var imgMar = "<img width=\"150px\" height=\"225px\" src=\"img\\maruderzy.png\"/>"
    var imgPrz = "<img width=\"150px\" height=\"225px\" src=\"img\\przymierze.png\"/>"

    
    switch(fra.value){
        case 'Syndykat':
            wynik1.innerHTML = imgSyn;
            break;
        case 'Maruderzy':
            wynik1.innerHTML = imgMar;
            break;
        case 'Przymierze':
            wynik1.innerHTML = imgPrz;
            break;
    }

}


function klasa(lvl, sil, zre, int, sku, pz){
    this.lvl = lvl;
    this.sil = sil;
    this.zre = zre;
    this.int = int;
    this.sku = sku;
    this.pz = pz;
}