<template>
  <v-app>
    <o-header></o-header>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import OHeader from '@/components/O-Header.vue';

export default {
  name: 'App',
  components: {
    OHeader,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
