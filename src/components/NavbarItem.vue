<template>
  <router-link :to="link">
    <div class="navbar-item">
      <ion-icon v-if="icon" :name="icon"></ion-icon>
      <p v-if="showText">{{ text }}</p>
    </div>
  </router-link>
</template>

<script>
import {ref} from 'vue';
import {useMediaQuery} from '@vueuse/core';

export default {
  name: 'NavbarItem',
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  },
  setup() {
    // Use vueuse to handle media query
    const showText = useMediaQuery('(min-width: 768px)');

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
