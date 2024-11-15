<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { updateTimerLeft } from '../utils/calculateTimeLeft';

export default {
    props: {
        releaseDate: {
            type: Date,
            required: true,
        },
    },
    emit: ['finished'],
    setup(props, { emit }) {
        const currentTime = ref(new Date());
        const timeLeft = ref(null);
        const isLoaded = ref(false); 
        let intervalId;

        const checkTimerFinished = () => {
            updateTimerLeft(timeLeft, props.releaseDate, currentTime.value, isLoaded);

            if (!timeLeft.value && isLoaded.value) {
                clearInterval(intervalId);
                emit('finished');
            }
        };

        onMounted(() => {
            checkTimerFinished();
            intervalId = setInterval(() => {
                currentTime.value = new Date();
                checkTimerFinished();
            }, 1000);
        });


        onUnmounted(() => {
            clearInterval(intervalId);
        });

        return { timeLeft, isLoaded };
    },
};
</script>

<template>
     <div v-if="isLoaded" class="timer__container flex-center timer-appear">
        <div class="flex-column-center timer__field">
            <p class="timer__label">Días</p>
            <p class="timer__value">{{ timeLeft.days }}</p>
        </div>

        <div class="timer__separator"></div>

        <div class="timer__field flex-column-center">
            <p class="timer__label">Horas</p>
            <p class="timer__value">{{ timeLeft.hours }}</p>
        </div>

        <div class="timer__separator"></div>

        <div class="timer__field flex-column-center">
            <p class="timer__label">Minutos</p>
            <p class="timer__value">{{ timeLeft.minutes }}</p>
        </div>

        <div class="timer__separator"></div>

        <div class="timer__field flex-column-center">
            <p class="timer__label">Segundos</p>
            <p class="timer__value">{{ timeLeft.seconds }}</p>
        </div>
    </div>
</template>