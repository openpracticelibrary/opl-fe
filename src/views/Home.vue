<template>
  <div class="home">
    <v-img
      src='@/assets/img/kandinsky.jpg'
      max-height='350px'
    ></v-img>
    <o-practices-pane></o-practices-pane>
  </div>
</template>

<script>
import OPracticesPane from '@/components/O-PracticesPane.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    OPracticesPane,
  },
};
</script>
