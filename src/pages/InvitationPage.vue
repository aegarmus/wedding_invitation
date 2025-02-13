<script>
import { Header } from '../components';
import DateInvitation from '../components/DateInvitation.vue';

export default {
    name: 'InvitationPage',
    components: {
        Header,
        DateInvitation
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

    <div>
        <div class="annunce-content mb-1 mt-2 flex-column-center">
            <h2>¡Nos Casamos!</h2>
            <p>Los esperamos</p>
            <p>Para celebrar juntos este día</p>
        </div>
        <DateInvitation />
    </div>

    

</template>