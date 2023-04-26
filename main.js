function policzFarba(){
    let powierzchnia = +document.getElementById('powierzchnia').value
    let wynik = document.getElementById('wynik')
    wynik.innerHTML="Liczba potrzebnych puszek: " + Math.ceil(powierzchnia/4)
    console.log(110)

}
