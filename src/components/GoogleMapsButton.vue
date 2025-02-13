<script>
import { config } from '../config/env.config.js';

export default {
    name: 'GoogleMapsButton',
    data() {
        return {
            location: config.place
        };
    },
    methods: {
        openGoogleMaps() {
            const baseUrl = 'https://www.google.com/maps/search/?api=1';
            const query = encodeURIComponent(this.location);
            const url = `${baseUrl}&query=${query}`;
            window.open(url, '_blank');
        }
    }
}
</script>

<template>
    <button @click="openGoogleMaps" class="google-maps-button">
        Ver en Google Maps
    </button>
</template>

<style scoped>
.google-maps-button {
    background: linear-gradient(to right, var(--contrast-color-500), var(--contrast-color));
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.google-maps-button:hover {
    background: linear-gradient(to right, var(--primary-color400), var(--primary-color200));
}
</style>