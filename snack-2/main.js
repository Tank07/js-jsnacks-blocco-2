// let parolaUno = prompt (`Inserisci la prima parola`);
// console.log(parolaUno,parolaUno.length)

// let parolaDue = prompt (`Inserisci la seconda parola`);
// console.log(parolaDue, parolaDue.length)

// if (parolaUno.length > parolaDue.length){
// console.log(parolaUno, parolaDue)
// document.getElementById("esito").innerHTML = `<div>La prima parola inserita: <span class="blue">"${parolaUno}"</span> è la più lunga</span> con ben ${parolaUno.length} lettere rispetto alla seconda parola inserita: <span class="blue">"${parolaDue}"</span> che è più corta </span> con ben ${parolaDue.length} lettere</div>`;
// } else if (parolaUno.length < parolaDue.length){
//     console.log(parolaDue, parolaUno)
//     document.getElementById("esito").innerHTML = `<div>La seconda parola inserita: <span class="blue">"${parolaDue}"</span> è la più lunga</span> con ben ${parolaDue.length} lettere rispetto alla seconda parola inserita: <span class="blue">"${parolaDue}"</span> che è più corta </span> con ben ${parolaUno.length} lettere</div>`;
// } else {
//     document.getElementById("esito").innerHTML = `<div>La prima parola inserita <span class="blue">"${parolaUno}"</span> ed la seconda parola inserita <span class="blue">"${parolaDue}"</span> sono uguali</span> con rispettivamente con ben ${parolaUno.length} e ${parolaDue.length} lettere </div>`;
// }

// Snack2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


let nomi = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone", "Luca","Francesco"];
console.log(nomi.length)

let cognomi = ["Arpa","Ayadi","Bellucci","Biga","Borriello","Calia","Carbone","Carluccio","DeStefano","DiBenedetto","DiPietro","Fergag","Fonzi","Magni","Maiorchini","Melotti","Moccia","Nifosi","Nocilla","Nuvoloni","Pavone","Pintaldi","Piva","Pontillo","Rosellini","Saputo","Spadaro","Sprinceana","Toselli","Wachnicki","Zaino","Natoli"]
console.log(cognomi.length)

for (i=1; i<= nomi.length; i++){
    document.getElementById("esito").innerHTML += `<div> L'invitato numero ${i} per l'esclusiva festa per i Booleani in casa Gatsby è <span class="blue">"${nomi[i]} ${cognomi[i]}"</span></div>`;

}