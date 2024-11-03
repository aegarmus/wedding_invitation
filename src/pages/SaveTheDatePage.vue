<script>
import BackgroundImage from '../components/BackgroundImage.vue';
import SaveTheDate from '../components/SaveTheDate.vue';

export default {
    name: 'SaveTheDatePage',
    components: {
        BackgroundImage,
        SaveTheDate
    },
    data() {
        return {
            imageUrl: '/images/prueba-imagen.jpg',
            title: 'Save the Date!',
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