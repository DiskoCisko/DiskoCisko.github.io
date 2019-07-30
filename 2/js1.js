particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ffeaa7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0.7,
          "color": "#eb4d4b"
        },
        "polygon": {
          "nb_sides": 0
        },
        "image": {
          "width": 10,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.01,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 25,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff7979",
        "opacity": 0.01,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "up",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 1000,
          "rotateY": 1000
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);