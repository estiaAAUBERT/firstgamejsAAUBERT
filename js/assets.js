/* Les assets, on pourra plus tard ajouter des sons et des musiques */
const assetsToLoadURLs = {
    explosion: {
      url:
        "assets/sons/explosion.mp3",
      buffer: true,
      loop: false,
      volume: 0.2,
    },
    heartbeat: {
      url:
        "assets/sons/heartbeat.mp3",
      buffer: true,
      loop: true,
      volume: 0.9,
    },
    mpmusic: {
      url:
        "assets/sons/mpmusic.mp3",
      buffer: true,
      loop: false,
      volume: 0.1,
    },
    gameover: {
      url:
        "assets/sons/gameover.mp3",
      buffer: true,
      loop: false,
      volume: 1.0,
    },
    popup: {
        url:
          "assets/sons/popup.mp3",
        buffer: true,
        loop: false,
        volume: 0.6,
      },
    riseup: {
        url:
          "assets/sons/riseup.mp3",
        buffer: true,
        loop: false,
        volume: 0.7,
      },
    risedown: {
        url:
          "assets/sons/risedown.mp3",
        buffer: true,
        loop: false,
        volume: 1.0,
      },
    buildingtension: {
        url:
          "assets/sons/buildingtension.wav",
        buffer: true,
        loop: true,
        volume: 1.0,
      },
    addtension: {
        url:
          "assets/sons/addtension.wav",
        buffer: true,
        loop: true,
        volume: 0.5,
      },
  };
  
  function loadAssets(callback) {
    // here we should load the souds, the sprite sheets etc.
    // then at the end call the callback function
    loadAssetsUsingHowlerAndNoXhr(assetsToLoadURLs, callback);
  }
  
  // You do not have to understand in details the next lines of code...
  // just use them!
  
  /* ############################
      BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
      files have been loaded and decoded 
   ############################## */
  function isImage(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
  
  function isAudio(url) {
    return url.match(/\.(mp3|ogg|wav)$/) != null;
  }
  
  function loadAssetsUsingHowlerAndNoXhr(assetsToBeLoaded, callback) {
    var assetsLoaded = {};
    var loadedAssets = 0;
    var numberOfAssetsToLoad = 0;
  
    // define ifLoad function
    var ifLoad = function () {
      if (++loadedAssets >= numberOfAssetsToLoad) {
        callback(assetsLoaded);
      }
      console.log("Loaded asset " + loadedAssets);
    };
  
    // get num of assets to load
    for (var name in assetsToBeLoaded) {
      numberOfAssetsToLoad++;
    }
  
    console.log("Nb assets to load: " + numberOfAssetsToLoad);
  
    for (name in assetsToBeLoaded) {
      var url = assetsToBeLoaded[name].url;
      console.log("Loading " + url);
      if (isImage(url)) {
        assetsLoaded[name] = new Image();
  
        assetsLoaded[name].onload = ifLoad;
        // will start async loading.
        assetsLoaded[name].src = url;
      } else {
        // We assume the asset is an audio file
        console.log(
          "loading " + name + " buffer : " + assetsToBeLoaded[name].loop
        );
        assetsLoaded[name] = new Howl({
          urls: [url],
          buffer: assetsToBeLoaded[name].buffer,
          loop: assetsToBeLoaded[name].loop,
          autoplay: false,
          volume: assetsToBeLoaded[name].volume,
          onload: function () {
            if (++loadedAssets >= numberOfAssetsToLoad) {
              callback(assetsLoaded);
            }
            console.log("Loaded asset " + loadedAssets);
          },
        }); // End of howler.js callback
      } // if
    } // for
  } // function