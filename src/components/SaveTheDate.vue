<script>
import { useGlobalStore } from '../store/store';
import CalendarButton from './CalendarButton.vue';

export default {
    name: 'SaveTheDate',
    components: {
        CalendarButton
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
        },
    },
    setup() {
        const globalStore = useGlobalStore();

        return {
            husband: globalStore.husbandName,
            wife: globalStore.wifeName
        }
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
        <h1 class="head__title title-appear">{{ save }} <span class="save-the-day__span">{{ the }}</span> {{ dateText }}</h1>
        <div class="save-the-date__date-container flex-center date-appear">
            <hr class="save-the-date__line">
            <p class="save-the-date__date">{{ formatDate }}</p>
            <hr class="save-the-date__line">
        </div>
        <h2 class="save-the-date__couple text-left m-left couple-appear">{{ husband }} <span>&</span> {{ wife }}</h2>
        <CalendarButton 
            :eventDate="date"
            :timeInit="timeInit"
            :timeFinish="timeFinish"
        />
    </div>
</template>