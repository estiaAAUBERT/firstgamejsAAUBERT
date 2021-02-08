//Gestion MiniMonstres

function creerDesMiniMonstresbis(nb,x,y,indexCouleur){

    let tabCouleurs=["red","green"];

    for(let i=0; i < nb; i++){
        let r = 10 + Math.random()* 30;
        let couleur = tabCouleurs[indexCouleur];
        let vx = -5 + Math.random() * 10;
        let vy = -5 + Math.random() * 10;

        let b = new miniMonstre(x , y, r, couleur, vx , vy);

        miniMonstres.push(b);
    }
}

function updateMinimonstres(){

    miniMonstres.forEach((b) =>{
        
        collisionbord = false;

        b.draw(ctx);
        traiteCollisionsminiMonstresAvecBords(b);
        traiteCollisionHeroAvecMonstre(b);
        b.move();
    })
}

let ballleft = [];
let ballright = [];

function MPAnimation(nb){

    ballright.splice(0,ballright.length);
    ballleft.splice(0,ballleft.length);

    let tabCouleurs=["red","green"];

    for(let i=0; i < nb; i++){
        let r = 10 + Math.random()* 30;
        let couleur = tabCouleurs[0];
        let vx = 0 ;
        let vy = 0.2 + Math.random() * 5 ;

        let b = new miniMonstre(100 , 0, r, couleur, vx , vy);

        ballleft.push(b);
    }


    for(let i=0; i < nb; i++){
        let r = 10 + Math.random()* 30;
        let couleur = tabCouleurs[1];
        let vx = 0 ;
        let vy = 0.2 + Math.random() * 5 ;

        let b = new miniMonstre(500, 0, r, couleur, vx , vy);

        ballright.push(b);
    }

}

function updateMPanimation(){

    ballleft.forEach((b) =>{
        
        b.draw(ctx);
        b.move();
    })

    ballright.forEach((b) =>{
        
        b.draw(ctx);
        b.move();
    })

}