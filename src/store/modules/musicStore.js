import { defineStore } from "pinia";
import { ref } from "vue";

export const useMusicStore = defineStore("musicStore", () => {
  const isPlaying = ref(false);
  const audio = ref(null);

  const playMusic = async () => {
    if (audio.value) {
      try {
        await audio.value.play();
        isPlaying.value = true;
      } catch (error) {
        console.error("La música fue bloqueada:", error);
        isPlaying.value = false;
      }
    }
  };

  const pauseMusic = () => {
    if (audio.value) {
      audio.value.pause();
      isPlaying.value = false;
    }
  };

  const togglePlay = () => {
    if (isPlaying.value) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const setAudio = (audioElement) => {
    audio.value = audioElement;
  };
  const setIsPlaying = (value) => {
    isPlaying.value = value;
    console.log("isPlaying actualizado a:", value);
  };

  return {
    isPlaying,
    audio,
    playMusic,
    pauseMusic,
    togglePlay,
    setAudio,
    setIsPlaying
  };
});
