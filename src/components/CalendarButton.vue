<script>
import { addToGoogleCalendar } from '../utils/calendarService.js';

export default {
    name: 'CalendarButton',
    props: {
        eventDate : {
            type: String,
            required: true,
        },
        timeInit : {
            type: String,
            required: true,
        },
        timeFinish : {
            type: String,
            required: true,
        }
    },
    methods: {
        saveToCalendar() {
            addToGoogleCalendar(this.eventDate, this.timeInit, this.timeFinish)
        }
    }
}

</script>


<template>
    <button class="button button-calendar" @click="saveToCalendar"><i class="fa-regular fa-calendar-days"></i></button>
</template>