<script>
import { ref, onMounted } from 'vue';


export default {
    name: "IntroScreen",
    emits: ["start"],
    setup(_, { emit }) {
        const initParticles = () => {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 150, density: { enable: true, value_area: 2300 } },
                    color: { value: '#fff' },
                    shape: {
                        type: 'circle',
                        stroke: { width: 0.3, color: '#6f8d74' },
                        polygon: { nb_sides: 10 }
                    },
                    opacity: { value: 0.5, random: true },
                    size: { value: 5, random: true },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'repulse' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    }
                },
                retina_detect: true
            })
        }

        const start = () => {
            emit("start");
        };

        onMounted(() => {            
            initParticles()

            window.addEventListener("click", start);
            window.addEventListener("keydown", start);
            window.addEventListener("touchstart", start);
        });

        return { };
    },
};
</script>

<template>
    <div id="particles-js" class="particles-container">
        <div class="intro-screen flex-center">
            <div class="intro-screen__message title-appear">
                <p>Pulsa cualquier cosa para comenzar</p>
            </div>
        </div>
    </div>
</template>