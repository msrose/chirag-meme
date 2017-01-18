(function() {
  var memeWords = 'The Man the Meme the Legend'.split(' ');
  var memeColors = 'blue green red magenta orange lightgoldenrodyellow'.split(' ');
  var counter = 0;
  var memeTitle = document.getElementById('memeTitle');
  var image = document.getElementById('memePic');
  var body = document.getElementsByTagName('body')[0];
  var rand;
  var changeMemes = function() {
    rand = Math.floor(Math.random() * memeColors.length);
    memeTitle.innerText = memeWords[counter % memeWords.length];
    memeTitle.style.color = memeColors[rand];
    body.style.backgroundColor = memeColors[(rand + 1) % memeColors.length];
    memePic.style.transform = 'rotate(' + Math.random() + 'turn)';
    counter++;
  };
  var getRandMeme = function() {
    return (Math.floor(Math.random() * 20)) + 1;
  };
  var slideMeme = document.getElementById('slideMeme');
  var pos = { x: 0, y: 0 };
  var blinkFreq = 0;
  var doNegY = false;
  var doNegX = false;
  var doMemeSlide = function() {
    rand = Math.floor(Math.random() * memeColors.length);
    slideMeme.style.top = pos.y + "px";
    slideMeme.style.left = pos.x + "px";
    if(blinkFreq % 10 === 0) {
      slideMeme.style.letterSpacing = (Math.floor((Math.random() * 10)) + 2) + 'px';
      slideMeme.style.backgroundColor = memeColors[(rand + 2) % memeColors.length]
      slideMeme.style.color = memeColors[(rand + 3) % memeColors.length]
    }
    if(!doNegX) {
      pos.x += getRandMeme();
    } else {
      pos.x -= getRandMeme();
    }
    if(!doNegY) {
      pos.y += getRandMeme();
    } else {
      pos.y -= getRandMeme();
    }
    blinkFreq += 1;
    if(pos.x + slideMeme.offsetWidth > window.innerWidth || pos.x < 0) {
      doNegX = !doNegX;
    }
    if(pos.y + slideMeme.offsetHeight > window.innerHeight || pos.y < 0) {
      doNegY = !doNegY;
    }
  };
  changeMemes();
  setInterval(changeMemes, 750);
  setInterval(doMemeSlide, 43);
})();
