  window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) {  // Stop the function from running
        return;
    }
    audio.currentTime = 0; // Resets the playback to 0 seconds
    audio.play();
    key.classList.add('playing');
  });

  function removeTransition(e){
    if(e.propertyName !== 'transform'){
      return;
    }
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
