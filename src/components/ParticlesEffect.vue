<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';

export default {
    name: 'ParticlesEffect',
    props: {
        options: {
            type: Object,
            required: true
        },
        containerId: {
            type: String,
            default: 'particules-js'
        },
    },
    setup(props) {
        const particlesInstance = ref(null);

        onMounted(() => {
            particlesInstance.value = particlesJS(props.containerId, props.options)
        });

        onBeforeUnmount(() => {
            if (window.pJSDom && window.pJSDom.length) {
                window.pJSDom = window.pJSDom.filter((pJS) => {
                    if (pJS.pJS.canvas.el.id === props.containerId) {
                        pJS.pJS.fn.vendors.destroypJS();
                        return false;
                    }
                    return true;
                });
            }
        });

        return {}
    }
}
</script>

<template>
    <div :id="containerId" class="particles-container"></div>
</template>