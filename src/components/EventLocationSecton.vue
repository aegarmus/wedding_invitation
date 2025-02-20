<script>
import { config } from '../config/env.config.js';

export default {
    name: 'EventLocation',
    data() {
        return {
            location: config.place
        };
    },
    computed: {
        googleMapUrl() {
            const baseUrl = 'https://www.google.com/maps/embed/v1/place';
            const apiKey = config.google.apiMaps;
            const query = encodeURIComponent(this.location);
            return `${baseUrl}?key=${apiKey}&q=${query}`;
        }
    }
}
</script>

<template>
    <div class="event-location">
        <div class="map-container">
            <iframe
                :src="googleMapUrl"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</template>

<style scoped>
.event-location {
    text-align: center;
    margin: 2rem 0;
}

.map-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

iframe {
    border: 0;
    border-radius: 1rem;

    width: 90%;
    max-width: 600px;
    height: 25rem;
}
</style>