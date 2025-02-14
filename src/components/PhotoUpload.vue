<script>
import { ref, onMounted } from 'vue';
import { config } from '../config/env.config';

export default {
    name: 'PhotoUpload',
    setup() {
        const photos = ref([]);
        const isAuthenticated = ref(false);

        const { clientId, apiKey, folderId } = config.google;

        const scope = 'https://www.googleapis.com/auth/drive.file';

        const handleClientLoad = () => {
            gapi.load('client:auth2', initClient);
        };

        const initClient = () => {
            gapi.client.init({
                apiKey,
                clientId,
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
                scope
            }).then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        };

        const updateSigninStatus = (isSignedIn) => {
            isAuthenticated.value = isSignedIn;
        };

        const handleAuthClick = () => {
            gapi.auth2.getAuthInstance().signIn();
        };

        const handleSignoutClick = () => {
            gapi.auth2.getAuthInstance().signOut();
        };

        const handleFileChange = (event) => {
            photos.value = Array.from(event.target.files);
        };

        const uploadPhotos = () => {
            photos.value.forEach(photo => {
                const fileMetadata = {
                    name: photo.name,
                    parents: [folderId]
                };
                const media = {
                    mimeType: photo.type,
                    body: photo
                };
                gapi.client.drive.files.create({
                    resource: fileMetadata,
                    media: media,
                    fields: 'id'
                }).then((response) => {
                    console.log('File ID: ', response.result.id);
                });
            });
        };

        onMounted(() => {
            handleClientLoad();
        });

        return {
            photos,
            isAuthenticated,
            handleAuthClick,
            handleSignoutClick,
            handleFileChange,
            uploadPhotos
        };
    }
}
</script>

<template>
    <div class="photo-upload">
        <h3 class="section-title">Subir Fotos del Evento</h3>
        <p class="section-p">Puedes subir una o varias fotos que tomes durante el evento.</p>
        <div v-if="!isAuthenticated">
            <button @click="handleAuthClick" class="auth-button">Iniciar sesión con Google</button>
        </div>
        <div v-else>
            <input type="file" multiple @change="handleFileChange" class="file-input" ref="fileInput" style="display: none;" />
            <button @click="$refs.fileInput.click()" class="upload-button">
                <img src="/icons/camera.svg" alt="Upload Icon" class="button-icon" />
                Seleccionar Fotos
            </button>
            <button @click="uploadPhotos" class="upload-button">Subir Fotos</button>
            <button @click="handleSignoutClick" class="signout-button">Cerrar sesión</button>
        </div>
    </div>
</template>

<style scoped>
.photo-upload {
    text-align: center;
    margin: 2rem 0;
    padding: 0 1rem;
    font-family: var(--body-font);
}

.section-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.section-p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.auth-button, .upload-button, .signout-button {
    background: linear-gradient(45deg, var(--primary-color200), var(--primary-color400));
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.auth-button:hover, .upload-button:hover, .signout-button:hover {
    background: linear-gradient(45deg, var(--primary-color400), var(--primary-color200));
}

.file-input {
    margin-bottom: 1rem;
}

.button-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
</style>