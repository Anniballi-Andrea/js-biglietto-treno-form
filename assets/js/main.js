/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.*/
const price = 0.21
let totalPrice

const nameField = document.getElementById('inputName');
const distanceField = document.getElementById('inputDistance');
console.log(distanceField)

const ageField = document.getElementById('inputAge');
console.log(ageField)

const btn = document.getElementById('btn');
const form = document.getElementById('formId')

const response = document.querySelector('p')
const finalResponse = document.querySelector('ul')





//console.log(age, distance)
/*form.addEventListner('submit', (event) => {
    event.preventDefoult();
    const distance = distanceField.value;
    const age = ageField.value;

    console.log(distance, age)
});*/
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const distance = distanceField.value
    const age = ageField.value
    const totalPrice = (price * distance)
    //console.log(distance, age, totalPrice)
    const name = nameField.value;

    let sales
    if (age < 18) {
        sales = '20%'
    } else if (age > 65) {
        sales = '65%'
    } else {
        sales = 'nessuno'
    }

    if (age < 18) {
        finalPrice = totalPrice - totalPrice * 0.2

    } else if (age > 65) {
        finalPrice = totalPrice - totalPrice * 0.4


    } else {
        finalPrice = totalPrice


    }
    /*MILESTONE 2:
    Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui 
    l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
    Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
    (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/
    console.log(`Il tuo biglietto costa ${finalPrice.toFixed(2)}€`)


    response.innerHTML += ` ${finalPrice.toFixed(2)}€`;

    finalResponse.innerHTML = `
    <li> Nome: ${name}</li>
    <li >Distanza da percorrere: ${distance} km</li>
    <li >Età: ${age} anni </li>
    <li>Tariffa viaggio: ${totalPrice} €</li>
    <li>Sconto applicato: ${sales}</li>
    <li>Prezzo finale: ${finalPrice} €</li>

    `;






});
















/*
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, 
raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.


*/