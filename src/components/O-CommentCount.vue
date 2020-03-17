<template>
  <div class="o-comment-container">
    <v-icon small class="o-card-icon-color">mdi-chat</v-icon> {{count}}
  </div>
</template>

<script>
export default {
  name: 'O-CommentCount',
  props: {
    count: Number,
  },
};
</script>

<style>
.o-comment-container {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: .75rem;
}

.o-card-icon-color {
  color: rgba(0, 0, 0, 1) !important;
  margin-top: -3px;
}
</style>
