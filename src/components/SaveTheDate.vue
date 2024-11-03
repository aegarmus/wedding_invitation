<script>
import CalendarButton from './CalendarButton.vue';

export default {
    name: 'SaveTheDate',
    components: {
        CalendarButton
    },
    props: {
        husband: {
            type: String,
            required: true
        },
        wife: {
            type: String,
            required: true
        },
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
        },
    },
    data() {
        return {
            save: 'SAVE',
            the: 'the',
            dateText: 'DATE'
        }
        

    }
}
</script>

<template>
    <div class="save-the-date text-center">
        <h1 class="save-the-date__title">{{ save }} <span class="save-the-day__span">{{ the }}</span> {{ dateText }}</h1>
        <div class="save-the-date__date-container flex-center">
            <hr class="save-the-date__line">
            <p class="save-the-date__date">{{ formatDate }}</p>
            <hr class="save-the-date__line">
        </div>
        <h2 class="save-the-date__couple text-left m-left">{{ husband }} <span>&</span> {{ wife }}</h2>
        <CalendarButton 
            :eventDate="date"
            :timiInit="timeInit"
            :timeFinish="timeFinish"
        />
    </div>
</template>