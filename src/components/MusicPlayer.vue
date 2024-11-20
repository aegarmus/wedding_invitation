
<script>
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue';
import { useMusicStore } from '../store';

export default {
    name: 'MusicPlayer',
    props: {
        audioSrc: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const musicStore = useMusicStore();
        const audioElement = ref(null);
        const wasPlaying = ref(false); 

        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (musicStore.isPlaying) {
                    musicStore.pauseMusic();
                    wasPlaying.value = true;
                }
            } else {
                if (wasPlaying.value) {
                    musicStore.playMusic();
                    wasPlaying.value = false; 
                }
            }
        };

        onMounted(() => {
            audioElement.value = new Audio(props.audioSrc);
            audioElement.value.loop = true;
            musicStore.setAudio(audioElement.value);

            audioElement.value.addEventListener('play', () => {
                musicStore.setIsPlaying(true);
                console.log("Evento 'play' detectado");
            });

            audioElement.value.addEventListener('pause', () => {
                musicStore.setIsPlaying(false);
                console.log("Evento 'pause' detectado");
            }); 
            document.addEventListener('visibilitychange', handleVisibilityChange);  
            musicStore.playMusic();
        });

        onBeforeUnmount(() => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);

            if (audioElement.value) {
                audioElement.value.pause();
                musicStore.pauseMusic();
                musicStore.setAudio(null);
            }
        });

        watch(
            () => musicStore.isPlaying,
        );

        const isPlaying = computed(() => musicStore.isPlaying);

        return {
            isPlaying,
            togglePlay: musicStore.togglePlay,
        };
    },
};
</script>


<template>
  <div class="music-control">
    <button
      v-touch-hover="'hover-button'"
      @click="togglePlay"
      class="music-toggle-button"
      aria-label="Toggle Music"
    >
      <i :class="isPlaying ? 'fas fa-volume-up' : 'fas fa-volume-mute'"></i> 
    </button>
  </div>
</template>