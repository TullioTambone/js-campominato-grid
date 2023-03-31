//funzione per creare gli elementi all'interno del #game

document.getElementById("play").addEventListener('click', function(){
    let difficulty = document.getElementById("difficulty").value;
    let game = document.getElementById("game");

    function chooseDifficulty( numCelle, basis ){
    
        for (let i = 0; i < numCelle; i++){
            let div = creaElementi("div", basis, numCelle);
            game.append( div );
            div.addEventListener('click', function(){
                this.classList.toggle( "active" );
            })
        }
    }
    
    switch (difficulty) {
        case "hard":
            chooseDifficulty(100, "box-hard");
            break;
        
            
        case "medium":
            chooseDifficulty(81, "box-medium");
            break
        
        case "easy":
            chooseDifficulty(49, "box-easy");
    }
});

/*------------------------------- funzioni -----------------------------------------*/

function creaElementi(tag, classi, numCelle){
    let div = document.createElement( tag );
    div.className = classi;
    
    // let arr = [];

    // for (let i = 1; i <= numCelle; i++) {
    // arr.push(i);
    // }

    // for (let i = arr.length - 1; i > 0; i--) {
    // const j = Math.floor(Math.random() * (i + 1));
    // [arr[i], arr[j]] = [arr[j], arr[i]];
    // }

    // for (let i = 0; i < arr.length; i++){
    //     div.innerHTML = arr[i];
    // }
    let numeriUnici = [];

    // genera numeri casuali unici
    while (numeriUnici.length < numCelle) {
      let numeroCasuale = Math.floor(Math.random() * numCelle) + 1;
      if (!numeriUnici.includes(numeroCasuale)) {
        numeriUnici.push(numeroCasuale);
      }
    }
  
    for (let i = 0; i < numeriUnici.length; i++){
      div.innerHTML = numeriUnici[i];
    }

    return div
}

console.log(arr);

