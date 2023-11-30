// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// Dichiaro la variabile del bottone per iniziare il gioco e la collego al file html
const startButton = document.getElementById("start");
// creo la varibile che si collega i nuemeri dell'array al file
const numberToShow = document.getElementById("numeri");
//dichiaro la variabile dell'input per inserire i numeri
const inputNumeri = document.getElementById("text");
//dichiaro la variabile del bottone per mandare i numeri
const sendButton = document.getElementById("send");

//creo la variabile del timer e la setto su 30
let seconds = 30;
//creo un array che generi 5 numeri randomici da 1 a 10
let listaNumeri = [];
console.log(listaNumeri);



//al bottone assegno la funzione click
startButton.addEventListener("click",
    
    //faccio partire un timer di 30 secondi 
    function(){
        setTimeout(hide, seconds * 100);

        //creo un ciclo che mi generi 5 nuemeri randomici da 1 a 10
        for (let i = 0; i < 5; i++) {
        listaNumeri.push(getRandomNumMinMax(1, 10));
        }

        //nascondo il pulsante send
        startButton.classList.add("hidden");

        //mostro i numeri dell array a schermo tramite l' h2
        numberToShow.append(listaNumeri);
    
    }
);


//funzione che nasconda i numeri dopo 30 secondi
function hide (){
    numberToShow.classList.add("hidden");
    sendButton.classList.add("show");
    inputNumeri.classList.add("show");
}




//funzione che genera un numero in un range (min, max)
function getRandomNumMinMax(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

