<template>
  <div class="about-view">
    <MainHeader/>
    <AboutCall/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHeader from "@/components/MainHeader.vue";
import AboutCall from "@/components/about/AboutCall.vue";

export default defineComponent({
  name: 'AboutView',
  components: {AboutCall, MainHeader},
});
</script>
