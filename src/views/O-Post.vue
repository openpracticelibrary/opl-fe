<template>
  <div class="o-post-container">
    <div class="o-post-header">
      <h2>{{post.title}}</h2>
      <h2>{{post.subtitle}}</h2>
      <span>{{author}}</span>
      <br/>
      <span>Last update: {{postDate}}</span>
    </div>
    <v-img
      :src='myImage'
      aspect-ratio="4.0"
    ></v-img>
    <div class="o-post-body">
      <vue-markdown :source="post.body"></vue-markdown>
      <v-divider class="o-section-divider"></v-divider>
      <o-comments></o-comments>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.o-post-body,
.o-post-header {
  padding-top: 20px;
  width: 80vw;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 20px;
}

.o-section-divider {
  border-color: #666;
  border-width: 1px;
  border-radius: .5px;
}
</style>

<script>
import axios from 'axios';
import { DateTime } from 'luxon';
import VueMarkdown from 'vue-markdown';
import OComments from '@/components/O-Comments.vue';

const uri = process.env.VUE_APP_CMSURL;

export default {
  name: 'Post',
  components: {
    VueMarkdown,
    OComments,
  },
  props: {
    id: null,
  },
  data() {
    return {
      post: '',
    };
  },
  computed: {
    myImage() {
      if (this.post.image) {
        return `${uri}${this.post.image[0].url}`;
      }
      return '';
    },
    author() {
      if (this.post.author) {
        return `${this.post.author.firstName} ${this.post.author.lastName}`;
      }
      return '';
    },
    postDate() {
      const dt = DateTime.fromISO(this.post.updatedAt);
      return dt.setLocale('en-US').toLocaleString(DateTime.DATE_FULL);
    },
  },
  async mounted() {
    try {
      const result = await axios({
        method: 'POST',
        url: `${uri}/graphql`,
        data: {
          query: `
            {
              article(id: "${this.id}"){
                updatedAt
                title
                subtitle
                author{
                  firstName
                  lastName
                  avatar{
                    url
                  }
                }
                image{
                  url
                }
                body
                Links {
                  name
                  link
                }
                requirements{
                  people
                  participants
                  time
                  difficulty
                }
                RelatedContent {
                  name
                  link
                }
                relatedImages {
                  image{
                    url
                  }
                }
                upvotes
                comments{
                  updatedAt
                  username
                  comment
                }
                tags{
                  id
                  tag
                }
              }
            }
          `,
        },
      });
      this.post = result.data.data.article;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
