<script>
import { config } from '../config/env.config.js';
import { Header, DateInvitation, SectionSeparator, EventLocationSecton, GoogleMapsButton } from '../components';

export default {
    name: 'InvitationPage',
    components: {
        Header,
        DateInvitation,
        SectionSeparator,
        EventLocationSecton,
        GoogleMapsButton
    },
    setup() {
        return {
            imageUrl: '/images/header.webp',
            location: config.place
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

    <section class="my-2 flex-column-center location-section">
        <h2 class="mb-1">Ubicación del Evento</h2>
        <p class="mb-1">{{ location }}</p>
        <GoogleMapsButton />
    </section>

    <section>
        <EventLocationSecton />
    </section>


</template>