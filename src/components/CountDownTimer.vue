<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { calculateTimeLeft } from '../utils/calculateTimeLeft';

export default {
    props: {
        realeaseDate: {
            type: Date,
            required: true
        }
    },
    setup(props) {
        const currentTime = ref(new Date());
        const realeaseDate = props.realeaseDate;

        const timeLeft = ref(calculateTimeLeft(realeaseDate, currentTime));

        onMounted(() => {
            setInterval(() => {
                currentTime.value = new Date();
                timeLeft.value = calculateTimeLeft(realeaseDate, currentTime.value)
            }, 1000)
        });

        onUnmounted(() => {
            clearInterval(timeLeft.value)
        });

        return { timeLeft }
    }
}
</script>

<template>
    <div v-if="timeLeft">
        <div>
            <div>
                <p>Días</p>
                <p>{{ timeLeft.days }}</p>
            </div>

            <div>
                <p>Horas</p>
                <p>{{ timeLeft.hours }}</p>
            </div>

            <div>
                <p>Minutos</p>
                <p>{{ timeLeft.minutes }}</p>
            </div>

            <div>
                <p>Segundos</p>
                <p>{{ timeLeft.seconds }}</p>
            </div>

        </div>
    </div>
</template>