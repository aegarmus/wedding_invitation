<script>
import { toggleMusic } from '../utils/toggleMusic.js'

export default {
    name: 'MusicPlayer',
    data(){
        return {
            audio: null,
            isPlaying: false
        };
    },
    mounted() {
        this.audio = new Audio(('/audio/bg3_prueba.mp3'));
        this.audio.loop = true;

        this.audio.play().then(() => {
            this.isPlaying = true
        }).catch((error) => {
            console.error('La Música fue bloequeada :c');
            this.isPlaying = false
        });
    }, 
    methods: {
        toggleMusicHandler() {
            if (this.audio) {
                toggleMusic(this.audio, this);
            } else {
                console.error('El objeto de audio no está inicializado.');
            };
        }
    }
}
</script>

<template>
    <div class="music-control">
        <button v-touch-hover="'hover-button'" @click="toggleMusicHandler" class="music-toggle-button">
            <i :class="isPlaying ? 'fas fa-volume-up' : 'fas fa-volume-mute'"></i> 
        </button>
    </div>
</template>