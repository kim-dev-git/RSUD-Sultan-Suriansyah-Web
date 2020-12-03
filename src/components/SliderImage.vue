<template>
  <swiper class="swiper" :options="swiperOption">
    <template
      v-for="(i, index) in items"
    >
      <swiper-slide
        :key="index"
        :style="getImage(i.images[0].url)"
      >
        <v-sheet
          style="position: absolute; bottom: 0; background-color: rgba(0, 0, 0, .32); width: 100%; cursor: pointer;"
          class="pb-6"
          @click="onClick(i)"
        >
          <v-layout
            column
            class="align-center justify-center py-4"
          >
            <h3 v-text="i.title" class="white--text text-center headline" />
          </v-layout>
        </v-sheet>
      </swiper-slide>
    </template>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-fade-effect',
  title: 'Fade effect',
  props: [ 'items' ],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    getImage (url) {
      return `background-image:url(${url})`
    },
    onClick(item) {
      console.log('item')
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper {
    height: 80vh;

    .swiper-slide {
      background-position: center;
      background-size: cover;

      &.slide-1 {
        background-image:url('/images/example/5.jpg')
      }
      &.slide-2 {
        background-image:url('/images/example/6.jpg')
      }
      &.slide-3 {
        background-image:url('/images/example/7.jpg')
      }
      &.slide-4 {
        background-image:url('/images/example/8.jpg')
      }
      &.slide-5 {
        background-image:url('/images/example/9.jpg')
      }
    }
  }
</style>