<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const goToInvitation = () => {
            router.push('/invitation');
        }

        return {
            goToInvitation
        };
    }
}
</script>

<template>
    <button @click="goToInvitation" class="button button-invitation zoom-appear">
        Ver Invitación
    </button>
</template>