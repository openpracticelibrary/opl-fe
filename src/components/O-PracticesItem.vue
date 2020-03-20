/* eslint-disable vue/no-parsing-error */
<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    width="33%"
    max-width="500"
    @click="openPost"
  >
    <v-img
      :src='myImage'
      aspect-ratio="2.0"
    >
      <o-upvote :count="carddata.upvotes"></o-upvote>
      <o-comment-count :count="carddata.comments.length"></o-comment-count>
    </v-img>
    <v-card-title>{{carddata.title}}</v-card-title>
  </v-card>
</template>

<script>
import OUpvote from '@/components/O-Upvote.vue';
import OCommentCount from '@/components/O-CommentCount.vue';

const uri = process.env.VUE_APP_CMSURL;

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
  computed: {
    myImage() {
      return `${uri}${this.carddata.image[0].url}`;
    },
  },
  methods: {
    openPost() {
      this.$router.push({ name: 'post', params: { id: this.carddata.id } });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
