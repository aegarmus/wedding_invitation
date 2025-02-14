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
        useGradient: {
            type: Boolean,
            default: false,
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
            if (!musicStore.audio) {
                audioElement.value = new Audio(props.audioSrc);
                audioElement.value.loop = true;
                musicStore.setAudio(audioElement.value);
            } else {
                audioElement.value = musicStore.audio;
            }

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
      @click="togglePlay"
      class="music-toggle-button"
      :class="{ 'icon-gradient': useGradient }"
      aria-label="Toggle Music"
    >
      <i :class="isPlaying ? 'fas fa-volume-up' : 'fas fa-volume-mute'"></i> 
    </button>
  </div>
</template>

<style scoped>
.music-control {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.music-toggle-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: transform 0.3s ease;
  color: #fff; /* Default color */
}

.music-toggle-button:hover {
  transform: scale(1.1);
}

.music-toggle-button:focus {
  outline: none;
}

.icon-gradient {
  background: linear-gradient(45deg, var(--primary-color200), var(--primary-color400));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>