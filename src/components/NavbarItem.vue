<template>
  <div class="navbar-item">
    <ion-icon v-if="icon" :name="icon"></ion-icon>
    <p v-if="showText">{{ text }}</p>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const showText = ref(true);

    const updateScreenSize = () => {
      showText.value = window.matchMedia("(min-width: 768px)").matches;
    };

    onMounted(() => {
      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateScreenSize);
    });

    return {
      showText,
    };
  },
};
</script>

<style scoped>
.navbar-item {
  display: flex;
  align-items: center;
}

.navbar-item ion-icon {
  margin-right: 8px;
}
</style>
