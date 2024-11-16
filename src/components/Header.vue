<script>
import { useHusbandStore, useWifeStore } from '../store/index';
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
        const husbandStore = useHusbandStore();
        const wifeStore = useWifeStore();

        return {
            husband: husbandStore.husbandName,
            wife: wifeStore.wifeName,
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