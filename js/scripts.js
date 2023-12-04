/*
Descrizione:
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output)
 sarà da scrivere in console.                                                  (OK)
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e 
funzionante allora realizzeremo un form in pagina in cui l'utente 
potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati 
in pagina (il prezzo dovrà essere formattato con massimo due decimali, per 
indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa 
potrebbe essere un'implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure
 simile, ma in ogni caso cercate di farla vostra.
*/

const userName = document.getElementById('user-name'); 
const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age');



const myButton = document.getElementById('special-button');

myButton.addEventListener('click', function(){
    const nameInput = (userName.value);
    console.log("Il nome dell'utente è " + nameInput);
    document.getElementById('user-result-name').innerHTML = nameInput;
    
    const kmInput = parseInt(userKm.value);
    console.log("L'utente ha inserito: " + kmInput + ' Km');

    const ageInput = (userAge.value);
    console.log("L'utente ha inserito: " + ageInput);


    let price = (kmInput * 0.21).toFixed(2);
    console.log("L'utente paga: " + price + '€');
    document.getElementById('price-results').innerHTML = `${price}€`;

    let age = document.getElementById('user-age').value;

    console.log('age: ', age);

    if (age < 18){
        let priceDiscounted20 = (price * 0.8).toFixed(2);
        console.log("Il prezzo in sconto è: " + price * 0.8 + '€');
        document.getElementById('price-results').innerHTML = `${priceDiscounted20}€`;
    }
    else if (age >= 65){
        let priceDiscounted40 = (price * 0.6).toFixed(2);
        console.log("Il prezzo in sconto è: " + price * 0.6 + '€');
        document.getElementById('price-results').innerHTML = `${priceDiscounted40}€`;
    }

    const randomMathsmall = Math.floor(Math.random()*10) + 1;
    document.getElementById('r-math-generator-small').innerHTML = randomMathsmall;

    const randomMathBig = Math.floor(Math.random()*90000) + 10000;
    document.getElementById('r-math-generator').innerHTML = randomMathBig;
});

