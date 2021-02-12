function traiteCollisionsJoueurAvecBords() {
    if (hero.xhero > canvas.width - hero.rayonhero) {
      //console.log("COLLISION A DROITE");
      // truc à savoir, pour ne pas que l'objet donne l'impression
      // d'aller plus loin que le bord de l'écran, on le remet au point de
      // contact
      hero.xhero = canvas.width - hero.rayonhero;
      hero.vitesseX = -hero.vitesseX;
    } else if (hero.xhero < 0) {
      //console.log("COLLISION A GAUCHE");
      hero.xhero = 0; // point de contact
      hero.vitesseX = -hero.vitesseX;
    }
  
    if (hero.yhero < 0) {
      hero.yhero = 0;
      hero.vitesseY = -hero.vitesseY;
    } else if (hero.yhero + hero.rayonhero > canvas.height) {
      hero.yhero = canvas.height - hero.rayonhero;
      hero.vitesseY = -hero.vitesseY;
    }
}

function traiteCollisionsminiMonstresAvecBords(b){

   if(b.x + b.rayon > canvas.width){
        b.x = canvas.width - b.rayon;
        b.vitesseX = -b.vitesseX;  
        collisionbord = true;
    }

    else if(b.x < 0){
        b.x = 0;
        b.vitesseX = -b.vitesseX;
        collisionbord = true;
    }

    else if(b.y < 0){
            b.y = 0;
            b.vitesseY = -b.vitesseY;
            collisionbord = true;
    }
    else if(b.y + b.rayon > canvas.height){
            b.y =  canvas.height - b.rayon;
            b.vitesseY = -b.vitesseY;
            collisionbord = true;
    }
}

function traiteCollisionHeroAvecMonstre(b) {
    if (
      circleCollide(
        hero.xhero,
        hero.yhero,
        hero.rayonhero,
        b.x,
        b.y,
        b.rayon
      )
    ) {
      //console.log("COLLISION....");
      if(b.couleur == "green"){
        assets.riseup.play();
        let index = miniMonstres.indexOf(b);
        miniMonstres.splice(index, 1);
        hero.rayonhero += 10;
      }
      if(b.couleur == "red"){
        assets.risedown.play();
        let index = miniMonstres.indexOf(b);
        miniMonstres.splice(index, 1);
        hero.rayonhero -= 10;
      }

      if(hero.rayonhero < 5){
        etatjeu="FinduJeu";
        assets.gameover.play();
        hero.rayonhero = 25;
      }

    }
  }

function circleCollide(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return dx * dx + dy * dy < (r1 + r2) * (r1 + r2);
  }