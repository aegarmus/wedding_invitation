<script>
import SectionSeparator from './SectionSeparator.vue';

export default {
    name: 'Alert',
    components: {
        SectionSeparator
    },
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'success'
        }
    },
    data() {
        return {
            visible: true
        };
    },
    methods: {
        closeAlert() {
            this.visible = false;
        },
        handleOutsideClick(event) {
            if (event.target.classList.contains('alert-overlay')) {
                this.closeAlert();
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
};
</script>

<template>
    <div v-if="visible" class="alert-overlay">
        <div class="alert" :class="type">
             <SectionSeparator
                v-scroll-animation
                iconSrc="/icons/bird-love.svg"
                colorStart="--primary-color200"
                colorEnd="--primary-color400"
                size="3rem"
            />

            <p>{{ message }}</p>
            <button @click="closeAlert">Cerrar</button>
        </div>
    </div>
</template>

<style scoped>
.alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.alert {
    background: white;
    color: var(--contrast-color);
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: var(--body-font);
    font-size: 1rem;
}

.alert.success {
    border: 2px solid var(--primary-color400);
}

.alert.error {
    border: 2px solid var(--error-color400);
}

.alert button {
    background: none;
    border: none;
    color: var(--secondary-color600);
    font-size: 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
}
</style>
