<template>
  <div id="app">
    <div class="page-content">
      <div id="content">
        <app-header></app-header>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/Header.vue";
export default defineComponent({
  setup() {},
  components: {
    AppHeader,
  },
});
</script>
