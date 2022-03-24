/* DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca */


//chiedere numero di km 

let km = parseFloat((prompt('Quanti km percorrerai?')));
console.log(km);

//chiedere l'età dell'utente

let età = parseFloat((prompt('Quanti anni hai?')));
console.log(età);

//calcolo prezzo del biglietto in base ai km (0.21 € al km)

var prezzo = km * (0.21)

//sconto del 20% per i minorenni
//sconto del 40% per gli over 65.

if (età < 18) {
    var sconto = km * (0.21) * (0.2)
    console.log('dispone di uno sconto di euro ' + sconto );
    var prezzo = prezzo - sconto 
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
} else if (età > 65) {
    var sconto = km * (0.21) * (0.4)
    console.log('dispone di uno sconto di euro ' + sconto);
    var prezzo = prezzo - sconto 
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
} else {
    console.log('nessuno sconto applicabile');
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
}

//output con due decimali

prezzo= prezzo.toString(10)
var arr_num = prezzo.split(".");
if (prezzo.indexOf(".") != (-1))
{
    if (arr_num[1].length == 1)
    {
        prezzo += 0;
    }
    else
    {
        prezzo = arr_num[0] + "." + arr_num[1].substring(0, 2);
    }
    prezzo = parseFloat(prezzo);
}
else
{
    prezzo = parseInt(prezzo);
}
alert(prezzo);