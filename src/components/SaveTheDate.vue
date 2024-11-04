<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useHusbandStore, useWifeStore, useEventDateStore } from '../store/index';
import CalendarButton from './CalendarButton.vue';
import CountDownTimer from './CountDownTimer.vue';

export default {
    name: 'SaveTheDate',
    components: {
        CalendarButton,
        CountDownTimer
    },
    props: {
        date: {
            type: String,
            required: true
        },
        timeInit: {
            type: String,
            required: true
        },
        timeFinish: {
            type: String,
            required: true
        }
    },
    computed: {
        formatDate() {
            const [year, month, day] = this.date.split('-');
            return `${day}.${month}.${year}`;
        }
    },
    setup() {
        const husbandStore = useHusbandStore();
        const wifeStore = useWifeStore();
        const eventDateStore = useEventDateStore();
        
        const currentTime = ref(new Date());
        const releaseDate = eventDateStore.releaseDate;

        const isButtonVisible = computed(() => currentTime.value >= releaseDate);

        onMounted(() => {
            const intervalId = setInterval(() => {
                currentTime.value = new Date();
            }, 1000);

            onUnmounted(() => {
                clearInterval(intervalId);
            });
        });

        return {
            husband: husbandStore.husbandName,
            wife: wifeStore.wifeName,
            releaseDate,
            isButtonVisible
        };
    }
}
</script>


<template>
    <div class="save-the-date text-center">
        <h1 class="head__title title-appear">SAVE <span class="save-the-day__span">the</span> DATE</h1>
        <div class="save-the-date__date-container flex-center date-appear">
            <hr class="save-the-date__line">
            <p class="save-the-date__date">{{ formatDate }}</p>
            <hr class="save-the-date__line">
        </div>
        <h2 class="save-the-date__couple text-left m-left couple-appear">{{ husband }} <span>&</span> {{ wife }}</h2>

        <CountDownTimer v-if="!isButtonVisible" :realeaseDate="releaseDate" />

        <CalendarButton 
            :eventDate="date"
            :timeInit="timeInit"
            :timeFinish="timeFinish"
        />
    </div>
</template>