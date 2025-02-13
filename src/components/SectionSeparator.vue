<script>
export default {
    name: 'SectionSeparator',
    props: {
        iconSrc: {
            type: String,
            required: true
        },
        colorStart: {
            type: String,
            default: '--primary-color200'
        },
        colorEnd: {
            type: String,
            default: '--primary-color400'
        },
        size: {
            type: String,
            default: '2rem'
        }
    },
    computed: {
        gradientStyle() {
            return {
                background: `linear-gradient(to right, var(${this.colorStart}), var(${this.colorEnd}))`
            };
        },
        gradientStyleInverse() {
            return {
                background: `linear-gradient(to left, var(${this.colorStart}), var(${this.colorEnd}))`
            };
        },
        iconStyle() {
            return {
                width: this.size,
                height: this.size,
                background: `linear-gradient(to left, var(${this.colorStart}), var(${this.colorEnd}))`,
                WebkitMaskImage: `url(${this.iconSrc})`,
                maskImage: `url(${this.iconSrc})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center'
            };
        }
    }
}
</script>

<template>
    <div class="section-separator my-2">
        <hr class="line" :style="gradientStyle" />
        <div :style="iconStyle" class="icon"></div>
        <hr class="line" :style="gradientStyleInverse" />
    </div>
</template>

<style scoped>
.section-separator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.line {
    flex: 1;
    height: 2px;
    margin: 0 1rem;
}

.icon {
    display: inline-block;
    text-align: center;
}
</style>