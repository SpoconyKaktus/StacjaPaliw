
function klik(){
    var liczba = document.getElementById('liczba').value;
    var paliwo = document.getElementById('paliwo').value;
    if (paliwo==1){
        // let wynik = liczba*4;
        // document.getElementById('tekst').innerHTML=wynik;
        document.write("tekst");
    }
    else if (paliwo==2){
        let wynik = liczba*3.5;
        document.getElementById('tekst').innerHTML=wynik;
    }
    else{
        document.getElementById('tekst').innerHTML=0;
    }
}