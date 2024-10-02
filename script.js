
function klik(){
    let liczba = document.getElementById('liczba').value;
    let paliwo = document.getElementById('paliwo').value;
    if (paliwo==1){
        let wynik = liczba*4;
        document.getElementById('tekst').innerHTML=wynik;
    }
    else if (paliwo==2){
        let wynik = liczba*3.5;
        document.getElementById('tekst').innerHTML=wynik;
    }
    else{
        document.getElementById('tekst').innerHTML=0;
    }
}