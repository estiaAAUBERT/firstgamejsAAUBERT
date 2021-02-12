

function changeMusique(m){ 
    if(musicloaded){
        musicloaded.stop();
    }
        musicloaded = m;
        musicloaded.play();
}