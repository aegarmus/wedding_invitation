<script>
import { useGlobalStore } from '../store/store';
import BackgroundImage from './BackgroundImage.vue';

export default {
    name: 'HeaderInvitation',
    components: {
        BackgroundImage
    },
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    },
    setup() {
        const globalStore = useGlobalStore();

        return {
            husband: globalStore.husbandName,
            wife: globalStore.wifeName
        }
    }
}

</script>


<template>
    <header>
        <BackgroundImage :imageUrl="imageUrl">
            <div>
                <h1 class="head__title title-appear">{{ husband }} <span class="save-the-day__span">&</span> {{ wife }}</h1>
            </div>
        </BackgroundImage>
    </header>
</template>