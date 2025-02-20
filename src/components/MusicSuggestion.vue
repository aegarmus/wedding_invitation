<script>
import { ref } from 'vue';
import axios from 'axios';
import { config } from '../config/env.config.js';
import { searchTracks } from '../utils/spotyfyService';

export default {
    name: 'MusicSuggestion',
    setup() {
        const query = ref('');
        const suggestions = ref([]);
        const selectedTracks = ref([]);

        const fetchSuggestions = async () => {
            if (query.value.length > 2) {
                try {
                    const results = await searchTracks(query.value);
                    suggestions.value = results || [];
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                    suggestions.value = [];
                }
            } else {
                suggestions.value = [];
            }
        };

        const addTrack = (track) => {
            selectedTracks.value.push(track);
            query.value = '';
            suggestions.value = [];
        };

        const submitTracks = async () => {
            try {
                console.log(config.apiUrl);
                const response = await axios.post(`${config.apiUrl}/api/playlist`, selectedTracks.value);
                console.log('Playlist items created:', response.data);
            } catch (error) {
                console.error('Error creating playlist items:', error);
            }
        };

        return {
            query,
            suggestions,
            selectedTracks,
            fetchSuggestions,
            addTrack,
            submitTracks
        };
    }
}
</script>

<template>
    <div class="music-suggestions">
        <h3 class="mb-1 section-title">Sugerencias de Música</h3>
        <input
            type="text"
            v-model="query"
            @input="fetchSuggestions"
            placeholder="Escribe una canción..."
            class="music-input"
        />
        <ul v-if="suggestions.length" class="suggestions-list">
            <li v-for="track in suggestions" :key="track.id" @click="addTrack(track)" class="suggestion-item">
                <img :src="track.album.images[2]?.url" alt="Album cover" class="album-cover" />
                <div class="track-info">
                    <span class="track-name">{{ track.name }}</span>
                    <span class="track-artist">{{ track.artists[0]?.name }}</span>
                </div>
            </li>
        </ul>
        <ul class="selected-tracks">
            <li v-for="track in selectedTracks" :key="track.id" class="selected-track-item">
                <img :src="track.album.images[2]?.url" alt="Album cover" class="album-cover" />
                <div class="track-info">
                    <span class="track-name-selected">{{ track.name }}</span>
                    <span class="track-artist">{{ track.artists[0]?.name }}</span>
                </div>
            </li>
        </ul>
        <button @click="submitTracks" class="music-button">Enviar Sugerencias</button>
    </div>
</template>

<style scoped>
.music-suggestions {
    text-align: center;
    margin: 2rem 0;
}

.section-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.music-input {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
}

.music-input:focus {
    outline: none;
    box-shadow: 0 0 15px #fff;
}

.suggestions-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
}

.suggestion-item {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
}

.suggestion-item:hover {
    background-color: #f0f0f0;
}

.album-cover {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 5px;
}

.track-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.track-name {
    font-weight: bold;
    color: var(--contrast-color);
}

.track-name-selected {
    font-weight: bold;
    color: var(--neutral-color);
}

.track-artist {
    color: var(--contrast-color-500);
}

.selected-tracks {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0 0 0;
}

.selected-track-item {
    display: flex;
    align-items: center;
    padding: 5px 0;
}

.selected-track-item .album-cover {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 5px;
}

.music-button {
    background: linear-gradient(to right, var(--primary-color200), var(--primary-color400));
    color: white;
    border: none;
    padding: .6rem 2rem;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.music-button:hover {
    background: linear-gradient(to left, var(--primary-color200), var(--primary-color400));
}
</style>