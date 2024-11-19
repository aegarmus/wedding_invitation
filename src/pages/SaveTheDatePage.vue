<script>
import { ref,computed } from 'vue'

import {
  BackgroundImage, 
  CountDownTimer,
  CalendarButton,
  InvitationButton,
  MusicPlayer,
  IntroScreen,
  ParticlesEffect
} from '../components'

import { useEventDateStore, useHusbandStore, useWifeStore } from '../store/index';

export default {
    name: 'SaveTheDatePage',
    components: {
        BackgroundImage,
        MusicPlayer,
        CalendarButton,
        CountDownTimer,
        InvitationButton,
        IntroScreen,
        ParticlesEffect
    },
    setup() {
        const eventDateStore = useEventDateStore();
        const husbandStore = useHusbandStore();
        const wifeStore = useWifeStore();
        const showIntro = ref(true);
        const showSaveTheDate = ref(false)
        const musicPlayer = ref(null);
        const particleColor = '#f2e2f4';
        const isButtonVisible = ref(false);

        const handleTimerFinished = () => {
            isButtonVisible.value = true;
        };

        const formatDate = computed(() => {
            const [year, month, day] = eventDateStore.eventDate.split('-');
            return `${day}.${month}.${year}`;
        });

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

        const initializeParticles = () => {
          if (particlesEffectRef.value && particlesEffectRef.value.initializeParticles) {
            particlesEffectRef.value.initializeParticles();
          }
        };

        const particlesEffectRef = ref(null);
        
        return {
            imageUrl: '/images/IMG_2121.jpeg',
            eventDate: eventDateStore.eventDate,
            formatDate,
            timeInit: eventDateStore.timeInit,
            timeFinish: eventDateStore.eventEndTime,
            showIntro,
            showSaveTheDate,
            husband: husbandStore.husbandName,
            wife: wifeStore.wifeName,
            releaseDate: eventDateStore.releaseDate,
            isButtonVisible,
            handleTimerFinished,
            handleStart,
            musicPlayer, 
            particleColor,
            particlesOptions,
            initializeParticles,
            particlesEffectRef,
        };
    }
}
</script>

<template>
  <div>
    <transition name="fade">
      <IntroScreen v-if="showIntro" @start="handleStart" />
    </transition>

    <transition name="save-the-date" mode="in-out" @after-enter="initializeParticles">
      <div v-if="showSaveTheDate">
        <ParticlesEffect 
          ref="particlesEffectRef"
          :options="particlesOptions" 
          :color="particleColor"
          containerId="particles-save-the-date"
        />
        <BackgroundImage :imageUrl="imageUrl">
          <MusicPlayer ref="musicPlayer" />
          <header class="save-the-date text-center">
              <h1 class="head__title title-appear">SAVE <span class="save-the-day__span">the</span> DATE</h1>
              <div class="save-the-date__date-container flex-center zoom-appear">
                  <hr class="save-the-date__line">
                  <p class="save-the-date__date">{{ formatDate }}</p>
                  <hr class="save-the-date__line">
              </div>
              <h2 class="save-the-date__couple text-left m-left couple-appear mb-5">{{ husband }} <span>&</span> {{ wife }}</h2>
              
              <div v-if="!isButtonVisible" class="timer-appear">
                <p class="flex-center timer-text">Invitación Disponible en</p>
                <CountDownTimer
                :releaseDate="releaseDate"
                @finished="handleTimerFinished"
                />
              </div>
              
              <div v-if="isButtonVisible">
                <InvitationButton />
              </div>
            </header>
              
              <CalendarButton 
                  :eventDate="eventDate"
                  :timeInit="timeInit"
                  :timeFinish="timeFinish"
              />
        </BackgroundImage>
      </div>
    </transition>
  </div>
</template>