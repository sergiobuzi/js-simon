// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// Dichiaro la variabile del bottone per iniziare il gioco e la collego al file html
const startButton = document.getElementById("start");

// creo la varibile che si collega i nuemeri dell'array al file
const numberToShow = document.getElementById("numeri");

//dichiaro la variabile del bottone per mandare i numeri
const sendButton = document.getElementById("send");

// creo la varibile che tolga la classe hide al testo
const textElement = document.getElementById("text");

//dichiaro una variabile che mi segni il punteggio
let punteggio = 0;

//creo la variabile del timer e la setto su 30
let seconds = 30;

//creo un array che contenga i numeri generati randomici
let listaNumeri = [];
console.log(listaNumeri);



//al bottone assegno la funzione click per iniziare
startButton.addEventListener("click",

    //faccio partire un timer di 3 secondi 
    function () {
        setTimeout(hide, seconds * 100);

        //creo un ciclo che mi generi 5 nuemeri randomici da 1 a 10
        while (listaNumeri.length < 5) {

            //crep una varabile che salvi il numero generato
            let temp = getRandomNumMinMax(1, 10);

            //se il numero generato non e gia presente nell'array alla push
            if (!listaNumeri.includes(temp)){
                listaNumeri.push(temp);
            }
        }

        //nascondo il pulsante send
        startButton.classList.add("hidden");

        //rimuovo la classe hidden al testo
        textElement.classList.remove("hidden");

        //mostro i numeri dell array a schermo tramite l' h2
        numberToShow.append(listaNumeri);
        

    }
);

//creo un bottone che inizializzi il ciclo di controllo
sendButton.addEventListener("click",

    function () {

        //creo un array che mi salvi i nuemri che ho azzeccato
        let numeriGiusti = [];

        //creo un ciclo che mi chieda per 5 volte un numero
        for (i = 0; i < 5; i++) {

            //input numero tramite prompt e stampo
            const inputNumero = parseInt(prompt("inserisci un numero che ricordi"));
            console.log(inputNumero);

            // se il numero inserito e giusto allora il punteggio aumenta e lo pusho all'interno dell'array dei numeri giusti
            if (listaNumeri.includes(inputNumero)) {
                punteggio++;
                numeriGiusti.push(inputNumero);
                
            }

        }
        //stampo il punteggio  e l'array che salva i numeri che ho azzeccato
        console.log("complimenti il tuo punteggio e di: " ,punteggio, "ed hai indovinato i seguenti numeri", numeriGiusti);

    }

);


  //**********************************//
 //             funzioni             //
//**********************************//


//funzione che nasconda i numeri dopo 30 secondi
function hide() {
    numberToShow.classList.add("hidden");
    sendButton.classList.add("show");
    //     inputNumeri.classList.add("show"); 
}


//funzione che genera un numero in un range (min, max)
function getRandomNumMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

