<script>
  import { config } from '../config/env.config.js';
  import { 
      Header, 
      DateInvitation, 
      SectionSeparator, 
      EventLocationSecton, 
      GoogleMapsButton, 
      TransferDetails, 
      MusicSuggestion,
      AttendanceConfirmation,
      Itinerary,
      ImageCarousel,
      MusicPlayer
  } from '../components';
  
  export default {
      name: 'InvitationPage',
      components: {
          Header,
          DateInvitation,
          SectionSeparator,
          EventLocationSecton,
          GoogleMapsButton,
          TransferDetails,
          MusicSuggestion,
          AttendanceConfirmation,
          Itinerary,
          ImageCarousel,
          MusicPlayer
      },
      setup() {
          const carouselImages = [
              '/images/carrusel1.jpg',
              '/images/carrusel2.jpg',
              '/images/carrusel3.jpg',
              '/images/carrusel4.jpg',
              '/images/carrusel5.jpg',
              '/images/carrusel6.jpg',
          ];
  
          return {
              imageUrl: '/images/header.webp',
              location: config.place,
              carouselImages
          }
      }
  }
</script>

<template>
  <Header v-scroll-animation :imageUrl="imageUrl" />

  <section v-scroll-animation>
    <div v-scroll-animation class="annunce-content mb-1 mt-2 flex-column-center">
      <h2 class="section-title">¡Nos Casamos!</h2>
      <p class="section-p">Los esperamos</p>
      <p class="section-p">Para celebrar juntos este día</p>
    </div>
    <DateInvitation />
  </section>

  <SectionSeparator
    v-scroll-animation
    iconSrc="/icons/bird-love.svg"
    colorStart="--primary-color200"
    colorEnd="--primary-color400"
    size="3rem"
  />

  <section v-scroll-animation class="my-2 flex-column-center location-section">
    <h3 class="mb-1 section-title">Ubicación del Evento</h3>
    <p class="mb-1 section-p text-center">{{ location }}</p>
    <p class="mb-1 event-time"><span>18:00</span> hrs</p>
    <GoogleMapsButton v-scroll-animation/>
  </section>

  <section v-scroll-animation class="my-2 p-1 text-center flex-column-center bg-contrast dress-section">
    <SectionSeparator
      v-scroll-animation
      iconSrc="/icons/dnd.svg"
      colorStart="--neutral-color"
      colorEnd="--primary-color400"
      size="3rem"
    />
    <h3 v-scroll-animation class="mb-1 section-title">Código de Vestimenta</h3>
    <p v-scroll-animation class="mb-1 section-p">Te invitamos a sumergirte en la magia con un atuendo de fantasía medieval o recreación histórica. Si prefieres, la vestimenta formal también es bienvenida.</p>
    <p v-scroll-animation class="mb-1 section-p">¡Recuerda evitar el color azul oscuro y el blanco, colores reservados para los novios!</p>
    <h4 class="mt-2 mb-1">¡Esta invitación es Individual y solo para Mayores de Edad!</h4>
  </section>

  <SectionSeparator
    v-scroll-animation
    iconSrc="/icons/gift-card.svg"
    colorStart="--primary-color200"
    colorEnd="--primary-color400"
    size="3rem"
  />

  <section v-scroll-animation class="my-2 p-1 text-center flex-column-center gift-section">
    <h3 v-scroll-animation class="mb-1 section-title">Regalos</h3>
    <p v-scroll-animation class="mb-1 section-p">Tu presencia es el mejor regalo para nosotros, así que no es necesario traer nada.</p>
    <p v-scroll-animation class="mb-1 section-p">Si deseas hacernos un detalle, puedes aportar de manera voluntaria a nuestro hogar con una donación, ya sea por transferencia o con un sobre anonimo. ¡Lo más importante es compartir juntos este día especial!</p>
    <TransferDetails v-scroll-animation />
  </section>

  <section v-scroll-animation class="my-2 p-1 text-center flex-column-center bg-contrast dress-section">
    <SectionSeparator
      v-scroll-animation
      iconSrc="/icons/music.svg"
      colorStart="--neutral-color"
      colorEnd="--primary-color400"
      size="3rem"
    />
    <h3 class="mb-1 section-title">Recomendaciones</h3>
    <p class="mb-1 section-p">¡Queremos que seas parte de la banda sonora de nuestro día! Ayúdanos a armar la playlist del evento con tus sugerencias!.</p>
    <MusicSuggestion v-scroll-animation />
  </section>

  <SectionSeparator
    v-scroll-animation
    iconSrc="/icons/love-letter.svg"
    colorStart="--primary-color200"
    colorEnd="--primary-color400"
    size="3rem"
  />

  <section v-scroll-animation class="my-2 p-1 text-center flex-column-center times-section">
    <h3 class="mb-1 section-title">Itinerario</h3>
    <Itinerary v-scroll-animation/>
  </section>

  <section v-scroll-animation class="my-2 p-1 text-center flex-column-center bg-contrast">
    <SectionSeparator
      v-scroll-animation
      iconSrc="/icons/wedding-rings.svg"
      colorStart="--neutral-color"
      colorEnd="--primary-color400"
      size="3rem"
    />
    <h3 v-scroll-animation class="mb-1 section-title">Banquete</h3>
    <p v-scroll-animation class="mb-1 section-p">¡Ven a disfrutar de una deliciosa cena medieval! ¡Habrá opciones para todos los gustos!</p>
    <AttendanceConfirmation v-scroll-animation />
  </section>

  <SectionSeparator
    v-scroll-animation
    iconSrc="/icons/camera.svg"
    colorStart="--primary-color200"
    colorEnd="--primary-color400"
    size="3rem"
  />

  <section v-scroll-animation class="my-2 p-1 text-center flex-column-center photo-section">
    <p class="mb-1 section-p">Algunos de los momentos que han marcado nuestro viaje</p>
    <ImageCarousel :images="carouselImages" />
  </section>

  <section v-scroll-animation class="my-2 flex-column-center bg-contrast">
    <EventLocationSecton v-scroll-animation />
  </section>

  <MusicPlayer audioSrc="/audio/bg3_prueba.mp3" :useGradient="true" />
</template>
