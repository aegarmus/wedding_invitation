<script>
import BackgroundImage from '../components/BackgroundImage.vue';
import SaveTheDate from '../components/SaveTheDate.vue';
import MusicPlayer from '../components/MusicPlayer.vue'

export default {
    name: 'SaveTheDatePage',
    components: {
        BackgroundImage,
        SaveTheDate, 
        MusicPlayer
    },
    data() {
        return {
            imageUrl: '/images/prueba-imagen.jpg',
            eventDate: '2025-04-25',
            timeInit: '17:30',
            timeFinish: '22:00',
            husband: 'Alan',
            wife: 'Mariel'
        }
    }
}
</script>

<template>
    <BackgroundImage :imageUrl="imageUrl" >
        <MusicPlayer />
        <SaveTheDate
            :title="title"
            :date="eventDate"
            :timeInit="timeInit"
            :timeFinish="timeFinish"
            :husband="husband"
            :wife="wife"
        />

    </BackgroundImage>
</template>