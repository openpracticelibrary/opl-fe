<template>
  <div class="o-upvote-container">
    <v-icon medium class="o-card-icon-color">mdi-menu-up</v-icon><br/> {{count}}
  </div>
</template>

<script>
export default {
  name: 'O-Upvote',
  props: {
    count: Number,
  },
};
</script>

<style>
.o-upvote-container{
  text-align: center;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: .75rem;
}

.o-card-icon-color {
  color: rgba(0, 0, 0, 1) !important;
  margin-top: -8px;
}
</style>
