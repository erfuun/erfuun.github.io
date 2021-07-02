<template>
  <div class="page-content">
    <div id="content">
      <app-header></app-header>
      <intro-section></intro-section>
      <services></services>
      <skills></skills>
      <portfolio></portfolio>
      <experience></experience>
      <contact-us></contact-us>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/Header.vue";
import IntroSection from "./components/IntroSection.vue";
import Services from "./components/Services.vue";
import Skills from "./components/Skills.vue";
import portfolio from "./components/Portfolio.vue";
import Experience from "./components/Experience.vue";
import ContactUs from "./components/ContactUs.vue";
import AppFooter from "./components/Footer.vue";
export default defineComponent({
  setup() {},
  components: {
    AppHeader,
    IntroSection,
    Services,
    Skills,
    portfolio,
    Experience,
    ContactUs,
    AppFooter,
  },
});
</script>
