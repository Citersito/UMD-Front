<template>
  <nav class="navbar">
    <div v-if="isDesktop" class="navbar-top">
      <div id="navbar-logo">
        <!-- Aquí podrías añadir un logo si lo tienes -->
      </div>
      <h1>UMD</h1>
    </div>
    <NavbarItem
        v-for="(item, index) in menuItems"
        :key="index"
        :icon="item.icon"
        :text="item.text"
        :link="item.link"
        :class="`item-${index + 1}`"
    />
  </nav>
</template>

<script>
import {useMediaQuery} from '@vueuse/core';
import NavbarItem from "@/components/NavbarItem.vue";

export default {
  components: {
    NavbarItem,
  },
  setup() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return {
      isDesktop,
    };
  },
  data() {
    return {
      menuItems: [
        {icon: "people-outline", text: "Pacientes", link: "/pacientes"},
        {icon: "calendar-clear-outline", text: "Agenda", link: "/"},
        {icon: "bar-chart-outline", text: "Monitoreo", link: "/monitoreo"},
      ],
    };
  },
};
</script>
