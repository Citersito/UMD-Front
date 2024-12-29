<template>
  <nav class="navbar">
    <div v-if="isDesktop" class="navbar-top">
      <div id="navbar-logo">
      </div>
      <h1>
        UMD
      </h1>
    </div>
    <NavbarItem
        v-for="(item, index) in menuItems"
        :key="index"
        :icon="item.icon"
        :text="item.text"
        :class="`item-${index + 1}`"
    />
  </nav>
</template>

<script>
import NavbarItem from "@/components/NavbarItem.vue";
import {ref, onMounted, onUnmounted} from 'vue';

export default {
  components: {
    NavbarItem,
  },
  setup() {
    const isDesktop = ref(true);

    const updateScreenSize = () => {
      isDesktop.value = window.matchMedia("(min-width: 768px)").matches;
    };

    onMounted(() => {
      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateScreenSize);
    });

    return {
      isDesktop,
    };
  },
  data() {
    return {
      menuItems: [
        {icon: "people-outline", text: "Pacientes"},
        {icon: "calendar-clear-outline", text: "Agenda"},
        {icon: "bar-chart-outline", text: "Monitoreo"},
      ],
    };
  },
};
</script>
