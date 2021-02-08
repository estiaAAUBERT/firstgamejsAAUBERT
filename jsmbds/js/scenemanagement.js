//Gestion des Menus

function afficherMenuPrincipal(){
    //1 on efface le canvas;
    ctx.save();

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "bold 60px honey";
    ctx.textAlign = "center";
    ctx.fillText("Click anywhere",300,550);
    ctx.fillText("Last Score : " + score.toString(),300,450);
    ctx.strokeStyle = 'gold';
    ctx.fillStyle = 'gold';
    ctx.fillText("Try it",300,150);
    ctx.strokeText("Try it",300,150);

    ctx.strokeRect(170,105,260,60);
    

    zonespawn.draw(ctx);

    updateMPanimation();

    ctx.restore();

}

function afficherRules(){

    ctx.save();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.fillStyle ='white';
    ctx.font = 'bold 40px honey'
    ctx.textAlign = "center";
    ctx.fillText("Red balls reduce your size",300,400);
    ctx.fillText("Green balls increase your size",300,450);
    ctx.font = 'bold 55px honey'
    ctx.fillText("Stay alive as long as you can",300,125);
    ctx.font = "bold 90px honey";
    ctx.fillText("Click here to start",300,550);
    zonespawn.draw(ctx);

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(50,390,15,0,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(50,440,15,0,2*Math.PI);
    ctx.fill();

    ctx.restore();

}

function afficherGameOver(){

    ctx.save();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "bold 60px honey";
    ctx.fillText("GAME OVER",300,150);
    ctx.fillText("Your Score : " + score.toString(),300,200);
    ctx.fillText("Click to try again",300,450);
    
    zonespawn.draw(ctx)


    ctx.restore();
}

function afficherGame(){
    //score ++;
    //1 on efface le canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //2 on dessine les objets
    //monstre.draw(ctx);
    hero.draw(ctx);
    zonespawn.draw(ctx);

    updateMinimonstres();
    traiteCollisionsJoueurAvecBords();

    afficherScore();
}

function afficherScore(){
    ctx.save();
    ctx.fillStyle = "white";
    //ctx.textAlign = "center";
    ctx.font = "bold 60px honey";
    ctx.fillText("Score : " + score.toString(),15,45);
    ctx.restore();
}