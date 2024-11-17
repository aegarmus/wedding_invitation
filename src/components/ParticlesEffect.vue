<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';

export default {
  name: 'ParticlesEffect',
  props: {
    options: {
      type: Object,
      required: true,
    },
    containerId: {
      type: String,
      default: 'particles-js',
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
  setup(props) {
    const particlesInstance = ref(null);

    onMounted(() => {
      const optionsWithColor = {
        ...props.options,
        particles: {
          ...props.options.particles,
          color: {
            value: props.color,
          },
        },
      };

      particlesInstance.value = particlesJS(props.containerId, optionsWithColor);
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

    return {};
  },
};
</script>

<template>
    <div :id="containerId" class="particles-container"></div>
</template>