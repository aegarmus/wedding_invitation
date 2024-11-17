<script>
import { ref, nextTick } from 'vue';
import RippleEffect from './RippleEffect.vue';
import ParticlesEffect from './ParticlesEffect.vue';

export default {
  name: 'IntroScreen',
  components: {
    RippleEffect,
    ParticlesEffect,
  },
  emits: ['start'],
  setup(_, { emit }) {
    const rippleCoords = ref({ x: 0, y: 0 });
    const isRippleActive = ref(false);
    const particleColor = "#b8573b"

    const handleClick = (event) => {
      rippleCoords.value = {
        x: event.clientX,
        y: event.clientY,
      };

      isRippleActive.value = true;
      nextTick(() => {
        isRippleActive.value = true;
      });
    };

    const handleAnimationEnd = () => {
      emit('start');
    };

    const particlesOptions = {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 2300,
          },
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0.2,
            color: '#44667f',
          },
          polygon: {
            nb_sides: 1,
          },
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        size: {
          value: 5,
          random: true,
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          repulse: {
            distance: 50,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };

    return {
      rippleCoords,
      isRippleActive,
      handleClick,
      handleAnimationEnd,
      particlesOptions,
      particleColor
    };
  },
};
</script>

<template>
  <div class="intro-screen-container" @click="handleClick">
    <ParticlesEffect 
      :options="particlesOptions" 
      :color="particleColor"
      />

    <div class="intro-screen flex-center">
      <div class="intro-screen__message title-appear">
        <p>Un Click para Soñar</p>
      </div>
    </div>

    <RippleEffect
      v-if="isRippleActive"
      :axisX="rippleCoords.x"
      :axisY="rippleCoords.y"
      :active="isRippleActive"
      :rippleColor="'rgba(68, 102, 127, 0.6)'"
      @animationEnd="handleAnimationEnd"
    />
  </div>
</template>