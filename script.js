// Configuración de partículas
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar partículas
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#B39DDB"
        },
        shape: {
          type: "heart",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#B39DDB",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }

  // Variables para elementos DOM
  const openBtn = document.getElementById('openBtn');
  const carta = document.getElementById('carta');
  const verCollageBtn = document.getElementById('verCollage');
  const collage = document.getElementById('collage');
  const envelope = document.querySelector('.envelope');
  const playMusicBtn = document.getElementById('playMusic');
  const bgMusic = document.getElementById('bgMusic');
  const photoContainers = document.querySelectorAll('.photo-container');

  // Asignar índices a las fotos para animación escalonada
  photoContainers.forEach((container, index) => {
    container.style.setProperty('--photo-index', index);
  });

  // Abrir carta
  openBtn.addEventListener('click', function() {
    // Animar sobre
    envelope.classList.add('open');
    
    // Mostrar carta con retraso
    setTimeout(() => {
      openBtn.style.display = 'none';
      carta.classList.remove('hidden');
      
      // Animar entrada de la carta
      setTimeout(() => {
        carta.classList.add('show');
      }, 100);
      
      // Mostrar botón de collage con retraso
      setTimeout(() => {
        verCollageBtn.classList.remove('hidden');
        verCollageBtn.classList.add('show');
      }, 1000);
    }, 800);
  });

  // Mostrar collage
  verCollageBtn.addEventListener('click', function() {
    collage.classList.remove('hidden');
    
    // Animar entrada del collage
    setTimeout(() => {
      collage.classList.add('show');
      
      // Animar cada foto con retraso escalonado
      photoContainers.forEach((container, index) => {
        setTimeout(() => {
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        }, index * 200);
      });
    }, 100);
  });

  // Reproducir música
  if (playMusicBtn && bgMusic) {
    playMusicBtn.addEventListener('click', function() {
      if (bgMusic.paused) {
        bgMusic.play();
        playMusicBtn.innerHTML = '<span class="music-icon">🎵</span> Pausar Nuestra Canción';
      } else {
        bgMusic.pause();
        playMusicBtn.innerHTML = '<span class="music-icon">🎵</span> Reproducir Nuestra Canción';
      }
    });
  }

  // Efecto de hover para emojis
  const emojis = document.querySelectorAll('.emoji-float');
  emojis.forEach(emoji => {
    emoji.addEventListener('mouseover', function() {
      this.style.animation = 'float 1s ease infinite';
    });
    
    emoji.addEventListener('mouseout', function() {
      this.style.animation = '';
    });
  });

  // Efecto de scroll para párrafos
  const paragraphs = document.querySelectorAll('.card-content p');
  
  function checkScroll() {
    paragraphs.forEach(paragraph => {
      const position = paragraph.getBoundingClientRect();
      
      // Si el párrafo está visible en la ventana
      if (position.top < window.innerHeight && position.bottom >= 0) {
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateX(0)';
      }
    });
  }
  
  // Inicialmente establecer opacidad 0 para animación
  paragraphs.forEach(paragraph => {
    paragraph.style.opacity = '0';
    paragraph.style.transform = 'translateX(-20px)';
    paragraph.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Verificar al cargar y al hacer scroll
  window.addEventListener('load', checkScroll);
  window.addEventListener('scroll', checkScroll);
});