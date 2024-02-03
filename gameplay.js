AFRAME.registerComponent('collisions', {
  schema: {
    elID:{type:'string',default: 'coin'}
  },
  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
    this.isCollided(this.data.elID);
  },
  update: function () {
    this.isCollided(this.data.elId);
  },
  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
      else {
        clearInterval(timer);
        this.gameOver()       
      }
    }
  },
  isCollided: function(elID){
    var element = document.querySelector(elID)
    element.addEventListener("collide", e => {
      if (elID.includes('coin')) {
        this.updateTarget(elID)
        this.updateCoin(elID)
        this.updateScore(elID)
        console.log("collided with", elID)
      }else if(elID.includes('fish')){
        this.gameOver()
        console.log("collided with", elID)
      }
    })
  },
  updateTarget: function(elID){
    const targetEl = document.querySelector("#target");
    var count = parseInt(targetEl.getAttribute('text').value)
    count -= 1
    targetEl.setAttribute("text", {value: count})
  },
  updateScore: function (elID) {
    const scoreEl = document.querySelector("#score");
    var score = parseInt(scoreEl.getAttribute('text').value)
    score += 50
    scoreEl.setAttribute("text", {value: score})
  },
  updateCoin: function(elID){
    const coinEl = document.querySelector(elID)
    coinEl.setAttribute('visible', 'false')
  },
  gameOver: function (){
    var gameOverEl = document.querySelector("#gameOver")
    gameOverEl.setAttribute("visible", {value: true})
  },
  gameWon: function () {
    
  }
});
