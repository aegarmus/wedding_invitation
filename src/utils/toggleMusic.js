export const toggleMusic = (audio, context) => {
    if (context.isPlaying) {
        audio.pause();
    } else {
        audio.play().catch((error) => {
            console.error('Error al reproducir la música:', error);
        });
    }

    context.isPlaying = !context.isPlaying;
};