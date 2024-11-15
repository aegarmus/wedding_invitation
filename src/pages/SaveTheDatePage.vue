<script>
import BackgroundImage from '../components/BackgroundImage.vue';
import SaveTheDate from '../components/SaveTheDate.vue';
import MusicPlayer from '../components/MusicPlayer.vue';
import { useEventDateStore } from '../store/index';

export default {
    name: 'SaveTheDatePage',
    components: {
        BackgroundImage,
        SaveTheDate,
        MusicPlayer
    },
    setup() {
        const eventDateStore = useEventDateStore();
        
        return {
            imageUrl: '/images/IMG_2121.jpeg',
            eventDate: eventDateStore.eventDate,
            timeInit: eventDateStore.timeInit,
            timeFinish: eventDateStore.eventEndTime,
        };
    }
}
</script>

<template>
    <BackgroundImage :imageUrl="imageUrl">
        <MusicPlayer />
        <SaveTheDate
            :date="eventDate"
            :timeInit="timeInit"
            :timeFinish="timeFinish"
        />
    </BackgroundImage>
</template>
