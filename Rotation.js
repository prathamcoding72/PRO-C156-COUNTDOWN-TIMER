//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("plane-rotation-reader", {
  schema: {
    rotX: { type: "number", default: 0 },
    rotZ: { type: "number", default: 0 } 
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.rotX = -(this.el.getAttribute('rotation').x)
      this.data.rotZ = -(this.el.getAttribute('rotation').z)
      if (e.key === "ArrowRight") {
        if (this.data.rotX < 10) {
          this.data.rotX += 0.5;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.rotX > -10) {
          this.data.rotX -= 0.5;
        }
      }
      if (e.key === "ArrowUp") {
        if (this.data.rotZ < 10) {
          this.data.rotZ += 0.5;
        }
      }
      if (e.key === "ArrowDown") {
        if (this.data.rotZ > -10) {
          this.data.rotZ -= 0.5;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.x = -(this.data.rotX);
    mapRotation.z = -(this.data.rotZ);

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});


