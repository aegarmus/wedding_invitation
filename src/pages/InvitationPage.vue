<script>
import { Header, DateInvitation, SectionSeparator, EventLocationSecton } from '../components';

export default {
    name: 'InvitationPage',
    components: {
        Header,
        DateInvitation,
        SectionSeparator,
        EventLocationSecton
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

    <section>
        <div class="annunce-content mb-1 mt-2 flex-column-center">
            <h2>¡Nos Casamos!</h2>
            <p>Los esperamos</p>
            <p>Para celebrar juntos este día</p>
        </div>
        <DateInvitation />
    </section>

    <SectionSeparator
        iconSrc="/icons/bird-love.svg"
        colorStart="--primary-color200"
        colorEnd="--primary-color400"
        size="3rem"
    />

    <section>
        <h2>Ubicación del Evento</h2>
        <p>{{ location }}</p>
        
    </section>

    <section>
        <EventLocationSecton />
    </section>


</template>