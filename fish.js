AFRAME.registerComponent("fish", {
  schema: {
    numberOfFishes: {type: "number", default: 20}
  },
  init: function () {
    for (let i = 1; i <= this.data.numberOfFishes; i++) {
      var id = `fish${i}`
      var posX = this.mapRange(0, 1, -2, 2, Math.random())
      var posY = this.mapRange(0, 1, 0, 0.2, Math.random())
      var posZ = this.mapRange(0, 1, -4, 2, Math.random())
      var rotY = this.mapRange(0, 1, 0, 360, Math.random())
      var pos = {x: posX, y: posY, z: posZ}
      this.createFish(id, pos, rotY)
    }
  },
  createFish: function(id, pos, rotY){
    var scale = 0.05
    var fish = document.createElement("a-entity")
    fish.setAttribute("gltf-model", '#fish')
    fish.setAttribute("position", pos)
    fish.setAttribute('rotation', {x: 0, y: rotY, z: 0})
    fish.setAttribute('scale', {x: scale, y: scale, z: scale})
    fish.setAttribute('animation-mixer', {})
    fish.setAttribute("id", id)
    fish.setAttribute("static-body", {shape: 'sphere', sphereRadius: 1})
    fish.setAttribute("collisions", {elID: `#${id}`})
    var island = document.querySelector("#islandEntity")
    island.appendChild(fish)
  },
  mapRange: function(input_start, input_end, output_start, output_end, input_value){
    output_difference = output_end - output_start
    input_difference = input_end - input_start
    var output_value = output_start + ((input_value - input_start) * output_difference/input_difference)
    return output_value
  }
});