// let numeroUno = parseInt (prompt (`Inserisci il primo numero`));
// console.log(numeroUno)

// let numeroDue = parseInt (prompt (`Inserisci il secondo numero`));
// console.log(numeroDue)

// if (numeroUno > numeroDue){
//     console.log(numeroUno)
//     document.getElementById("esito").innerHTML = `<div>Il primo numero inserito: <span>"${numeroUno}"</span> è il maggiore"</span> </div>`;
// } else if (numeroUno < numeroDue){
//     console.log(numeroDue)
//     document.getElementById("esito").innerHTML = `<div>Il secondo numero inserito: <span>"${numeroDue}"</span> è il maggiore"</span> </div>`;
// } else {
//     document.getElementById("esito").innerHTML = `<div>Il primo numero inserito <span>"${numeroDue}"</span> ed il secondo numero inserito <span>"${numeroDue}"</span> sono uguali"</span> </div>`;
// }

// Snack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

for(i=0; i<1000; i++){
    let numeroDato = parseInt(prompt(`inserisci un numero qualsiasi`));
    if (numeroDato % 2 == 0) {
        document.getElementById("esito").innerHTML = `<div>Il "${i}°" numero inserito è pari, ed è <span>"${numeroDato}"</span> </div>`;
        {break; }
    }
}



