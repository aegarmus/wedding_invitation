<script>
import Header from '../components/Header.vue';

export default {
    name: 'InvitationPage',
    components: {
        Header
    },
    data() {
        return {
            imageUrl: 'images/header.jpg'
        }
    }
}
</script>


<template>
    <Header :imageUrl="imageUrl" />
</template>