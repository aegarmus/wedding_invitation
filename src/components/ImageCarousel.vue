<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" />
      </div>
    </div>
    <button class="carousel-control prev" @click="prevSlide">‹</button>
    <button class="carousel-control next" @click="nextSlide">›</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ImageCarousel',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const currentIndex = ref(0);

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    };

    return {
      currentIndex,
      prevSlide,
      nextSlide
    };
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  max-width: 800px;
  margin: auto;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1;
  font-size: 2rem;
  transition: background 0.3s ease;
}

.carousel-control:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
</style>