<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    width="33%"
    max-width="500"
    @click="openPost"
  >
    <v-img
      :src="require(`@/assets/img/${carddata.image}`)"
      aspect-ratio="2.0"
    >
      <o-upvote :count="carddata.upvotes"></o-upvote>
      <o-comment-count :count="carddata.comments"></o-comment-count>
    </v-img>
    <v-card-title>{{carddata.title}}</v-card-title>
  </v-card>
</template>

<script>
import OUpvote from '@/components/O-Upvote.vue';
import OCommentCount from '@/components/O-CommentCount.vue';

export default {
  name: 'O-PracticesItem',
  components: {
    OUpvote,
    OCommentCount,
  },
  props: {
    carddata: Object,
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    openPost() {
      this.$router.push({ name: 'post', params: { id: this.carddata.id } });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
