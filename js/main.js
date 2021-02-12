window.onload = main;

let highscore;
let canvas;
let ctx;
let score;
let etatjeu = "MenuPrincipal";
let collisionbord = false;
let animationMP = false;
let musicloaded;

let hero ={
    xhero:0,
    yhero:0,
    rayonhero:25,
    vitesseX:10,
    vitesseY:10,

    draw:function(ctx){
        
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle= "#ffffff";
        ctx.arc(this.xhero, this.yhero, this.rayonhero, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle= "black";
        ctx.arc(this.xhero, this.yhero, 15, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle= "black";
        ctx.arc(this.xhero, this.yhero, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle= "black";
        ctx.arc(this.xhero, this.yhero, 10, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.restore();

    },
    moveright:function(){
        this.xhero += this.vitesseX;
    },

    moveleft:function(){
        this.xhero -= this.vitesseX;
    },

    moveup:function(){
        this.yhero += this.vitesseY;
    },

    movedown:function(){
        this.yhero-= this.vitesseY;
    },

    setPos:function (x, y){
        this.xhero = x ;
        this.yhero = y ;
      }
};

let monstre = {
    x:100,
    y:100,
    l: 100,
    h: 100,
    vitesseX:5,
    vitesseY:6,
    donneTonNom:function(){
        return "Je m'appelle Pepito, je suis en x =" + this.x  +"je suis en y=" + this.y ;
    },
    draw:function(ctx){

        ctx.save();

        ctx.translate(this.x - 200 , this.y - 400);
        //ctx.rotate(0,2);
        //tête
        ctx.fillStyle = 'blue';
        ctx.fillRect(200,400,this.l,this.h);
        //yeux
        ctx.fillStyle = 'red';
        ctx.fillRect(215,415,10,10);
        ctx.fillRect(275,415,10,10); 
        //nez
        ctx.fillRect(245,440,10,20);
        //bouche
        ctx.fillStyle= 'white';
        ctx.fillRect(225,465,50,30);

    ctx.restore();
    },
    move:function(){
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
}

let zonespawn = {
    draw:function(ctx){
        ctx.save();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(300,300,40,0,2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(300,300,30,0,2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(300,300,20,0,2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(300,300,50,0,2 * Math.PI);
        ctx.stroke();
        
        ctx.restore();
    }
};

class miniMonstre {
    x;
    y;
    rayon;
    couleur="white";
    vitesseX = 0;
    vitesseY = 0;

    constructor(x,y,rayon,couleur,vitesseX,vitesseY){
        this.x = x;
        this.y = y;
        this.rayon = rayon;
        if(couleur) this.couleur = couleur;
        if(vitesseX) this.vitesseX = vitesseX;
        if(vitesseY) this.vitesseY = vitesseY;
    } 

    draw(ctx){
        ctx.save();

        ctx.translate(this.x , this.y);

        ctx.beginPath();
        ctx.arc(0,0,this.rayon, 0 , 2*Math.PI);
        ctx.fillStyle= this.couleur;
        ctx.fill()

        ctx.restore();
    }

    move(){
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
}

let miniMonstres = [];
let assets;

function main(){
    loadAssets(startGame);      
}

function startGame(assetsLoaded){
   
    if(localStorage.getItem("highscore") == null){
       highscore = 0    
    }
    else{
        highscore =JSON.parse(localStorage.getItem("highscore"));
    }
    
    console.log('page chargée');
    // on récupére grâce à la Selector API

    canvas = document.querySelector("#mycanvas");

    ctx = canvas.getContext('2d');

    assets = assetsLoaded;

    //console.log(monstre.donneTonNom());

    //window.addEventListener('keydown', handleKeydown, false);
    //window.addEventListener('keyup', handleKeyup, false);

    canvas.onmousedown = traiteMouseDown;
    canvas.onmousemove = traiteMouseMove;

    MPAnimation(20);
    changeMusique(assets.buildingtension);
    //assets.buildingTension.play();
    score = 0;
    //setInterval(spawnEnemies,5000);

    requestAnimationFrame(animationLoop);

}

//Animation à 60 images/s
function animationLoop(){
    //1 on efface le canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    switch(etatjeu){
        case"MenuPrincipal":
            afficherMenuPrincipal();
            break;
        case"rules":
            afficherRules();
            break;
        case"GameStart":
            afficherGame();
            if(collisionbord){
                spawnEnemies();
                score++;
            }
            HighscoreStorage();
            break;
        case"FinduJeu":
            afficherGameOver();
            break;
    }
    
    requestAnimationFrame(animationLoop);
}


function spawnEnemies(){
    assets.popup.play();
    creerDesMiniMonstresbis(3,300,300,0);
    creerDesMiniMonstresbis(1,300,300,1); 
}

function HighscoreStorage(){
    if(score >= highscore){
        highscore = score;
        localStorage.setItem("highscore", JSON.stringify(highscore));
    };

}






 

