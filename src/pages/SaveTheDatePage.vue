<script>
import { ref } from 'vue'

import BackgroundImage from '../components/BackgroundImage.vue';
import SaveTheDate from '../components/SaveTheDate.vue';
import MusicPlayer from '../components/MusicPlayer.vue';
import IntroScreen from '../components/IntroScreen.vue';
import ParticlesEffect from '../components/ParticlesEffect.vue';

import { useEventDateStore } from '../store/index';

export default {
    name: 'SaveTheDatePage',
    components: {
        BackgroundImage,
        SaveTheDate,
        MusicPlayer,
        IntroScreen,
        ParticlesEffect
    },
    setup() {
        const eventDateStore = useEventDateStore();
        const showIntro = ref(true);
        const showSaveTheDate = ref(false)
        const musicPlayer = ref(null);
        const particleColor = '#f2e2f4';

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

        const handleStart = async() => {
            try {
                showIntro.value = false;
                 setTimeout(async () => {
                    showSaveTheDate.value = true

                    if (musicPlayer.value && musicPlayer.value.play) {
                        musicPlayer.value.play();
                    } else {
                        console.warn('MusicPlayer no está disponible');
                    }
                }, 100); 
                
            } catch (error) {
                console.error('Error en handleStart:', error);
            }
            
        }
        
        return {
            imageUrl: '/images/IMG_2121.jpeg',
            eventDate: eventDateStore.eventDate,
            timeInit: eventDateStore.timeInit,
            timeFinish: eventDateStore.eventEndTime,
            showIntro,
            showSaveTheDate,
            handleStart,
            musicPlayer, 
            particleColor,
            particlesOptions
        };
    }
}
</script>

<template>
  <div>
    <transition name="fade">
      <IntroScreen v-if="showIntro" @start="handleStart" />
    </transition>

    <transition name="save-the-date" mode="in-out">
      <div v-if="showSaveTheDate">
        <ParticlesEffect 
          :options="particlesOptions" 
          :color="particleColor"
          containerId="particles-save-the-date"
        />
        <BackgroundImage :imageUrl="imageUrl">
          <MusicPlayer ref="musicPlayer" />
          <SaveTheDate
            :date="eventDate"
            :timeInit="timeInit"
            :timeFinish="timeFinish"
            class="save-the-date-container"
          />
        </BackgroundImage>
      </div>
    </transition>
  </div>
</template>