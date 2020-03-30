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
import axios from 'axios';

const uri = process.env.VUE_APP_CMSURL;

export default {
  name: 'O-PracticesPane',
  components: {
    OPracticesFilter,
    OPracticesItem,
  },
  async mounted() {
    try {
      const result = await axios({
        method: 'POST',
        url: `${uri}/graphql`,
        data: {
          query: `
            {
              articles{
                id
                title
                comments {
                  id
                }
                upvotes
                image {
                  url
                }
              }
            }
          `,
        },
      });
      this.practiceItems = result.data.data.articles;
    } catch (error) {
      console.error(error);
    }
  },
  data: () => ({
    practiceItems: [],
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
