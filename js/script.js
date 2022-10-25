// gioco dei dadi

let numeroGiocatore = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
let numeroComputer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

alert("In questo programma verranno lanciati due dadi, uno per il giocatore e l'altro per il computer. Vince colui a cui esce il numero più alto");
console.log("Per il giocatore è uscito il numero: " + numeroGiocatore);
console.log("Per il computer è uscito il numero: " + numeroComputer);

document.getElementById("giocatore").innerHTML = "Per il giocatore è uscito il numero: " + numeroGiocatore;
document.getElementById("computer").innerHTML = "Per il computer è uscito il numero: " + numeroComputer;


if (numeroGiocatore > numeroComputer) {
    console.log("Complimenti giocatore, hai vinto!");
    document.getElementById("vincitore").innerHTML = "Complimenti giocatore, hai vinto!";
} else {
    if (numeroComputer > numeroGiocatore) {
        console.log("Mi dispiace giocatore, ha vinto il computer");
        document.getElementById("vincitore").innerHTML = "Mi dispiace giocatore, ha vinto il computer";
    } else {
        (numeroGiocatore = numeroComputer)
        console.log("Pareggio!");
        document.getElementById("vincitore").innerHTML = "Pareggio!";
    }
}