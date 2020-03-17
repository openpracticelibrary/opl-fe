<template>
  <div class="o-practices-filter">
    <div class="o-practices-filter-large">
      <span
        class='o-filter-item'
        v-for="(type, index) in practiceTypes"
        :key="`type-${index}`"
      >
        {{type}}
      </span>
    </div>
    <v-select
      :items="practiceTypes"
      label="Filter Practices"
      class="o-practices-filter-small"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'O-PracticesFilter',
  data: () => ({
    practiceTypes: [
      'All',
      'Methodology',
      'Culture',
      'Ceremonies',
      'Strategy',
      'Design',
      'Management',
      'Development',
    ],
  }),
};
</script>

<style lang="scss" scoped>
.o-practices-filter-large{
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.o-practices-filter-small {
    display: none;
  }

.o-filter-item {
  padding-left: 5px;
  padding-right: 5px;
}

@media screen and (max-width: 375px) {
  .o-practices-filter-large {
    display: none !important;
  }
  .o-practices-filter-small {
    display: flex;
  }
}
</style>
