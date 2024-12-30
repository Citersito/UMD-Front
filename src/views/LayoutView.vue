<template>
  <div class="layout">
    <NavbarView />
  <div class="content">
    <router-view />
  </div>
  </div>
</template>
<script>
import NavbarView from "./NavbarView.vue";
export default {
	components: {
		NavbarView,
	},
};
</script>
