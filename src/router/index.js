import { createRouter, createWebHistory } from 'vue-router'
import AgendaView from "@/views/AgendaView.vue";
import MonitoreoView from "@/views/MonitoreoView.vue";
import PacientesView from "@/views/PacientesView.vue";
const routes = [
  {path: "/", component: AgendaView},
  {path: "/monitoreo", component: MonitoreoView},
  {path: "/pacientes", component: PacientesView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
