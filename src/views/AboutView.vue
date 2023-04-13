<template>
  <div class="about-view">
    <MainHeader></MainHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  name: 'AboutView',
  components: {MainHeader},
});
</script>
