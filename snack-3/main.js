// Snack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari


let arrayCreato = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(arrayCreato);

let somma = 0;

for (i=0; i<=arrayCreato.lenght; i++){
    console.log(i);
    if (i % 2 !== 0){
        console.log(i);
        somma += arrayCreato[i];   
        console.log(somma,arrayCreato[i])     
    }

}

document.getElementById("esito").innerHTML = `<div>La somma di tutti i numeri in posizione dispari è <span class="blue">"${somma}"</span> </div>`;    

