<script>
import { useHusbandStore, useWifeStore } from '../store/index';



export default {
    name: 'Header',
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
    <header class="header">
      <img src="/images/header.webp" alt="Imagen de Cabecera" class="header-image" />
        <div class="header-content">
            <h1 class="head__title title-appear">{{ husband }} <span class="save-the-day__span">&</span> {{ wife }}</h1>
        </div>       
    </header>
</template>