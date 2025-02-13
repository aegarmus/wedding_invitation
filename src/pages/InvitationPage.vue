<script>
import { Header, DateInvitation, SectionSeparator } from '../components';

export default {
    name: 'InvitationPage',
    components: {
        Header,
        DateInvitation,
        SectionSeparator
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

    <SectionSeparator
        iconSrc="/icons/bird-love.svg"
        colorStart="--primary-color200"
        colorEnd="--primary-color400"
        size="3rem"
    />



</template>