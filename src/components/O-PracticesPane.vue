<template>
  <div class="o-practices-container">
    <o-practices-filter></o-practices-filter>
    <div class="o-practices-container o-practices-container-menu">
      <o-practices-item
        v-for="item in practiceItems"
        :key="item.id"
        class="o-practices-item"
        :carddata='item'></o-practices-item>
    </div>
  </div>
</template>

<script>
import OPracticesFilter from '@/components/O-PracticesFilter.vue';
import OPracticesItem from '@/components/O-PracticesItem.vue';

export default {
  name: 'O-PracticesPane',
  components: {
    OPracticesFilter,
    OPracticesItem,
  },
  data: () => ({
    practiceItems: [
      {
        id: 0,
        title: 'Start With Why',
        image: 'startwithwhy.png',
        comments: 20,
        upvotes: 1143,
      },
      {
        id: 1,
        title: 'Lean UX Workshop',
        image: 'leanuxworkshop.jpg',
        comments: 20,
        upvotes: 1143,
      },
      {
        id: 3,
        title: 'The Art Gallery',
        image: 'theartgallery.jpg',
        comments: 20,
        upvotes: 1143,
      },
      {
        id: 4,
        title: 'Continuous Integration',
        image: 'continuousintegration.jpg',
        comments: 20,
        upvotes: 1143,
      },
      {
        id: 5,
        title: 'AEIOU Observation Framework',
        image: 'aeiouobservationframework.png',
        comments: 20,
        upvotes: 1143,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.o-practices-container{
  padding-top: 20px;
  width: 80vw;
  max-width: 1000px;
  margin: auto;
}

.o-practices-container-menu{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.o-practices-item {
  flex: 0 1 calc(33% - 1em);
  min-width: 290px;
}
</style>
