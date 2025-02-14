<template>
  <div class="itinerary scroll-animate">
    <h2 class="section-title scroll-animate">Itinerario</h2>
    <div class="timeline">
      <div v-for="(event, index) in events" :key="index" class="timeline-item scroll-animate">
        <div class="dot" :style="{ backgroundColor: event.color }"></div>
        <div class="content">
          <strong class="time">{{ event.time }}</strong>
          <div>
            <strong class="event-title">{{ event.name }}</strong>
            <div class="text-caption" v-if="event.description">
              {{ event.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Itinerary',
  setup() {
    const events = ref([
      { time: '18:00', name: 'Inicio', color: 'var(--contrast-color)' },
      { time: '19:00', name: 'Coctel y Juegos', color: 'var(--primary-color400)' },
      { time: '21:00', name: 'Cena', color: 'var(--contrast-color)' },
      { time: '23:30', name: 'Término', color: 'var(--primary-color400)' }
    ]);

    return { events };
  }
}
</script>

<style scoped>
.itinerary {
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary-color400);
  font-family: var(--title-font);
}

.timeline {
  position: relative;
  margin: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: var(--contrast-color);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  box-sizing: border-box;
}

.timeline-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.timeline-item:nth-child(even) {
  left: 50%;
  text-align: left;
}

.timeline-item .content {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s;
}

.timeline-item .content:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.dot {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  border: 3px solid #fff;
}

.timeline-item:nth-child(odd) .dot {
  right: -8px;
}

.timeline-item:nth-child(even) .dot {
  left: -8px;
}

.time {
  display: block;
  font-weight: bold;
  color: var(--primary-color400);
  margin-bottom: 0.5rem;
  font-family: var(--title-font);
  font-size: 1.5rem;
  font-style: italic;
}

.event-title {
  font-family: var(--body-font);
  font-size: 1.25rem;
  color: var(--contrast-color);
}

.text-caption {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  font-family: var(--body-font);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 40px;
    text-align: left !important;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    left: 0;
  }

  .timeline-item .dot {
    left: 20px !important;
  }

  .timeline-item .content {
    margin-left: 60px;
  }
}
</style>