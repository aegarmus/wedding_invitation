<script>
import { useHusbandStore, useWifeStore } from '../store/index';
import ParticlesEffect from './ParticlesEffect.vue';

export default {
    name: 'Header',
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    },
    components: {
        ParticlesEffect
    },
    setup() {
        const husbandStore = useHusbandStore();
        const wifeStore = useWifeStore();

        const particlesOptions = {
                particles: {
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 2000,
                        },
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0.2,
                            color: '#ffffff',
                        },
                        polygon: {
                            nb_sides: 1,
                        },
                    },
                    opacity: {
                        value: 1,
                        random: true,
                    },
                    size: {
                        value: 5,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 5,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        onclick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 800,
                            size: 80,
                            duration: 2,
                            opacity: 0,
                            speed: 3,
                        },
                        repulse: {
                            distance: 50,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }

        return {
            husband: husbandStore.husbandName,
            wife: wifeStore.wifeName,
            particlesOptions
        }
    }
}
</script>

<template>
    <header class="header">
        <ParticlesEffect 
            :options="particlesOptions" 
            color="#ffffff" 
            containerId="particles-header"
        />
        <img :src="imageUrl" alt="Imagen de Cabecera" class="header-image" />
        <div class="header-content">
            <h1 class="header__title title-appear white-title">{{ husband }} <span class="save-the-day__span">&</span> {{ wife }}</h1>
        </div>       
    </header>
</template>


<style scoped>
.header {
    position: relative;
    overflow: hidden;
}

.header-image {
    width: 100%;
    height: auto;
}

.header-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 3;
}

.particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
</style>