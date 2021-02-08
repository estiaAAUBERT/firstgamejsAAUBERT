//Gestion des événéments clavier

function handleKeydown(evt) {
    if (evt.keyCode === 39) {
       //left key
      // console.log("left key");
       hero.moveleft();
    } else if (evt.keyCode === 37) {
       // right key
       hero.moveright();
    }
    else if (evt.keyCode == 38){
        //up key
        hero.moveup();
    }
    else if (evt.keyCode == 40){
       //down key 
        hero.movedown();
    }
}
function handleKeyup(evt) {
    hero.vitesseX--;
    hero.vitesseY--;
}

//Gestion des événements souris

let mousePos = {};

function traiteMouseMove(evt){

    var rect = canvas.getBoundingClientRect();

    mousePos.x = evt.clientX - rect.left;
        mousePos.y = evt.clientY - rect.top;
        
        
        hero.setPos(mousePos.x, mousePos.y);
}

function traiteMouseDown(event) {
    if(etatjeu=="MenuPrincipal"){
        etatjeu='rules';
        score=0;
        miniMonstres.splice(0,miniMonstres.length);
        creerDesMiniMonstresbis(6,300,300,0);
        creerDesMiniMonstresbis(3,300,300,1);
    }

    else if(etatjeu=="rules"){
        changeMusique(assets.heartbeat);
        etatjeu="GameStart";
    }

    else if(etatjeu=="FinduJeu"){
        etatjeu='MenuPrincipal';
        MPAnimation(25);
        changeMusique(assets.buildingtension);
    }
   
  }