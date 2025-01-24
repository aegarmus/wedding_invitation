<script>
import { Header } from '../components';

export default {
    name: 'InvitationPage',
    components: {
        Header
    },
    setup() {
        return {
            imageUrl: '/images/header.webp'
        }
    }
}
</script>


<template>
    <Header :imageUrl="imageUrl" />
</template>