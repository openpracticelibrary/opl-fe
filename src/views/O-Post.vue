<template>
  <div>
    Funk yeah {{id}}
    <div v-html="markdown"/>
  </div>
</template>

<script>
// import axios from 'axios';
import markdown from '@/assets/data/aeiouobservationframework.md';

export default {
  name: 'Post',
  components: {
  },
  mounted() {
    console.log(markdown.title);
  },
  props: {
    id: null,
  },
  data() {
    return {
      markdown,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
