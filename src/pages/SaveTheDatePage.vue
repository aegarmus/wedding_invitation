<script>
import { ref } from 'vue'

import BackgroundImage from '../components/BackgroundImage.vue';
import SaveTheDate from '../components/SaveTheDate.vue';
import MusicPlayer from '../components/MusicPlayer.vue';
import IntroScreen from '../components/IntroScreen.vue'
import { useEventDateStore } from '../store/index';

export default {
    name: 'SaveTheDatePage',
    components: {
        BackgroundImage,
        SaveTheDate,
        MusicPlayer,
        IntroScreen
    },
    setup() {
        const eventDateStore = useEventDateStore();
        const showIntro = ref(true);
        const showSaveTheDate = ref(false)
        const musicPlayer = ref(null);

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
            musicPlayer
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
        <BackgroundImage :imageUrl="imageUrl">
          <MusicPlayer ref="musicPlayer" />
          <SaveTheDate
            :date="eventDate"
            :timeInit="timeInit"
            :timeFinish="timeFinish"
          />
        </BackgroundImage>
      </div>
    </transition>
  </div>
</template>