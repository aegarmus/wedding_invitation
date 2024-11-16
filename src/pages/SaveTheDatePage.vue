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
        const musicPlayer = ref(null);

        const handleStart = () => {
            showIntro.value = false;
            musicPlayer.value.play()
        }
        
        return {
            imageUrl: '/images/IMG_2121.jpeg',
            eventDate: eventDateStore.eventDate,
            timeInit: eventDateStore.timeInit,
            timeFinish: eventDateStore.eventEndTime,
            showIntro,
            handleStart,
            musicPlayer
        };
    }
}
</script>

<template>
    <IntroScreen v-if="showIntro" @start="handleStart" />

    <BackgroundImage :imageUrl="imageUrl">
        <MusicPlayer />
        <SaveTheDate
            :date="eventDate"
            :timeInit="timeInit"
            :timeFinish="timeFinish"
        />
    </BackgroundImage>
</template>
