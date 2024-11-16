<script>
import { ref, nextTick, onMounted } from 'vue';
import RippleEffect from './RippleEffect.vue';


export default {
    name: "IntroScreen",
    components: {
        RippleEffect
    },
    emits: ["start"],
    setup(_, { emit }) {
        const rippleCoords = ref({ x: 0, y: 0 });
        const isRippleActive = ref(false);
        
        const handleClick = (event) => {
            rippleCoords.value = {
                x: event.clientX,
                y: event.clientY
            };
            
            isRippleActive.value = true;
            nextTick(() => {
                isRippleActive.value = true;
            });
        }
        
        const handleAnimationEnd = () => {            
            emit("start");
        }

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

        onMounted(() => {            
            initParticles()
        });

        return { 
            rippleCoords,
            isRippleActive,
            handleClick,
            handleAnimationEnd
        };
    },
};
</script>

<template>
    <div id="particles-js" class="particles-container" @click="handleClick">
        <div class="intro-screen flex-center">
            <div class="intro-screen__message title-appear">
                <p>Pulsa cualquier cosa para comenzar</p>
            </div>
        </div>

        <RippleEffect 
            v-if="isRippleActive"
            :axisX="rippleCoords.x" 
            :axisY="rippleCoords.y" 
            :active="isRippleActive" 
            @animationEnd="handleAnimationEnd" 
        />
    </div>
</template>