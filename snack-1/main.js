// Snack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

for(i=0; i<1000; i++){
    let numeroDato = parseInt(prompt(`inserisci un numero qualsiasi`));
    if (numeroDato % 2 == 0) {
        document.getElementById("esito").innerHTML = `<div>Il "${i}°" numero inserito è pari, ed è <span>"${numeroDato}"</span> </div>`;
        {break; }
    }
}



