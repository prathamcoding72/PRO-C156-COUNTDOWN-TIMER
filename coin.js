AFRAME.registerComponent("coin", {
  schema: {
    numberOfCoins: {type: "number", default: 20}
  },
  init: function () {
    for (let i = 1; i <= this.data.numberOfCoins; i++) {
      var id = `coin${i}`
      var posX = this.mapRange(0, 1, -3, 3, Math.random())
      var posY = this.mapRange(0, 1, 0, 0.2, Math.random())
      var posZ = this.mapRange(0, 1, -3, 3, Math.random())
      var pos = {x: posX, y: posY, z: posZ}
      this.createCoin(id, pos)
    }
  },
  createCoin: function(id, pos){
    var coin = document.createElement("a-entity")
    coin.setAttribute("geometry", {primitive: "cylinder", radius: .05, height: .01})
    coin.setAttribute("material", {color: "yellow"})
    coin.setAttribute("position", pos)
    coin.setAttribute('rotation', {x: 90, y: 0, z: 0})
    coin.setAttribute("id", id)
    coin.setAttribute("static-body", {shape: 'sphere', sphereRadius: 0.5})
    coin.setAttribute("collisions", {elID: `#${id}`})
    var island = document.querySelector("#islandEntity")
    island.appendChild(coin)
  },
  mapRange: function(input_start, input_end, output_start, output_end, input_value){
    output_difference = output_end - output_start
    input_difference = input_end - input_start
    var output_value = output_start + ((input_value - input_start) * output_difference/input_difference)
    return output_value
  }
});