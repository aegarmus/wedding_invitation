<script>
import { ref, watchEffect } from 'vue';

export default {
    name: "RippleEffect",
    props: {
        axisX : {
            type: Number,
            required: true
        },
        axisY: {
            type: Number,
            required: true
        }, 
        active: {
            type: Boolean,
            required: true
        },
        rippleColor: {
            type: String,
            required: false,
            default: 'rgba(255, 255, 255, 0.5)',
        },
    },
    setup(props, { emit }) {
        const rippleStyle = ref({});

        watchEffect(() => {
            if(props.active) {
                const { axisX, axisY, rippleColor } = props;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                // Calcula las distancias a las esquinas
                const distances = [
                    Math.hypot(axisX, axisY), // Esquina superior izquierda
                    Math.hypot(windowWidth - axisX, axisY), // Esquina superior derecha
                    Math.hypot(axisX, windowHeight - axisY), // Esquina inferior izquierda
                    Math.hypot(windowWidth - axisX, windowHeight - axisY) // Esquina inferior derecha
                ];

                const maxDistance = Math.max(...distances);

                const size = maxDistance * 2;

                rippleStyle.value = {
                    left: `${axisX - size / 2}px`,
                    top: `${axisY - size / 2}px`,
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `radial-gradient(circle, ${rippleColor} 30%, transparent 70%)`
                };

                setTimeout(() => {
                    emit('animationEnd');
                }, 500);
            }
        });

        return { rippleStyle };
    }
}
</script>


<template>
    <div class="ripple-container">
        <div class="ripple" :class="{ 'ripple-active': active }" :style="rippleStyle">
        </div>
    </div>
</template>