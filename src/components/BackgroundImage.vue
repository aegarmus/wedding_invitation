<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true,
        }
    }
};
</script>

<template>
    <div class="background-image flex-center" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="overlay"></div>
        <div class="content-overlay">
            <slot></slot>
        </div>
    </div>
</template>