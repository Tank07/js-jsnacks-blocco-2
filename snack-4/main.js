// Snack4 (Bonus)
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


let arrayUno = [1,2,3,4,5,6,7,8,9,10];

let arrayDue = [1,2,3];

console.log(arrayUno.lenght,arrayDue.length)

for (i=0; i<1000; i++){

    if(arrayUno.lenght < arrayDue.lenght){
        arrayUno.push(Math.floor(Math.random()* 10))

    } else if (arrayUno.lenght > arrayDue.lenght){
        arrayDue.push(Math.floor(Math.random()* 10))

    } else if (arrayUno.lenght == arrayDue.lenght){
        console.log(arrayUno.lenght,arrayDue.length)
        {break; }    
    }

}