<template>
  <v-hover
    v-slot="{ hover }"
  >
    <v-card
      @click="$router.push(data.link)"
      flat
      outlined
    >
      <v-layout id="post-cover"
        column
        style="overflow: hidden !important;"
      >
        <img id="post-cover-img"
          :src="data.img"
          class="image"
          :class="{ 'image-hover': hover }"
        />
      </v-layout>
      <v-layout id="post-tag"
        class="ml-6 mt-n6"
        style="position: absolute; z-index: 2;"
      >
        <v-sheet
          class="px-6 py-2 elevation-4"
          color="success"
          rounded
          dark
        >
        <span v-text="data.tag" />
        </v-sheet>
      </v-layout>
      <v-card-title id="post-title"
        class="px-6 pb-2 mt-4"
      >
        <span class="text-truncate" v-text="data.title" />
      </v-card-title>
      <v-card-text id="post-content"
        class="pa-6 pt-0"
      >
        <span v-html="truncate(data.content, 85)" />
      </v-card-text>
      <v-divider class="mx-6" />
      <v-card-actions
        class="px-5 pb-6 pt-4"
      >
        <v-layout
          class="align-center"
        >
          <v-icon v-text="'mdi-calendar-outline'" small left />
          <span v-text="data.createdAt" class="body-2 text--secondary" />
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: [
    'data'
  ],
  methods: {
    truncate(text, max) {
      return text.substr(0,max-1)+(text.length>max?'&hellip;':'')
    },
    hovering() {
      console.log($("#post-cover-img"))
    }
  }
}
</script>

<style lang="scss" scoped>
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: .6s;
  }
  .image-hover {
    transform: scale(1.12)
  }
  #post-title {
    color: black;
    transition: .6s;
  }
  #post-title:hover {
    color: #039BE5;
  }
</style>>

</style>