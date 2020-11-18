<template>
  <div>
    <slider-image :items="items" />
    <v-container id="posts">
      <v-row>
        <v-col
          cols="12"
          sm="8"
        >
          <v-layout
            column
            class="mt-n4 mb-6"
          >
            <v-card-title v-text="'Berita Terbaru'" class="headline ml-n4 mb-n3" />
            <the-line />
          </v-layout>
          <v-row>
            <v-col
              v-for="i in 8"
              :key="i"
              cols="12"
              sm="6"
            >
              <post-card :data="post" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SliderImage from '../components/SliderImage.vue'
import PostCard from '../components/PostCard.vue'
import TheLine from '../components/TheLine.vue'

export default {
  name: 'Home',
  components: {
    SliderImage,
    PostCard,
    TheLine,
  },
  data: () => ({
    items: [
      { text: 'Ini adalah suatu berita yang ke satu', img: 'https://st3.depositphotos.com/1192060/18399/i/1600/depositphotos_183990154-stock-photo-doctor-examining-female-patient-lying.jpg' },
      { text: 'Dan ini berita yang ke-2', img: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/hospital.jpg' },
      { text: 'Berita terakhir', img: 'https://globalhealthcare.news/wp-content/uploads/2019/09/some-medical-professionals-responding-to-a-code-blue-in-a-hospital.jpg' },
    ],
    post: {
      img: 'https://1.bp.blogspot.com/-O0qfJkCQSsg/X1cQvjDaeFI/AAAAAAAAAXA/lAyCiQ19ItQ1hJv98Zp2ZHpOjLtRSku2ACLcBGAsYHQ/s400/1.jpg',
      tag: 'Banjarmasin',
      creator: 'Admin RSUDSS',
      title: 'RSUD Sultan Suriansyah resmi memiliki Laboratorium Polymerase Chain Reaction (PCR)',
      createdAt: 'September 08, 2020',
      content: 'RSUD Sultan Suriansyah resmi memiliki laboratorium Polymerase Chain Reaction (PCR) \n (Banjarmasin, 01/09/2020) Kini Rumah Sakit Sultan Suriansyah Banjarmasin telah memiliki Laboratorium Polymerase Chain Reaction (PCR) yang telah diresmikan pada tanggal tanggal 1 September 2020. Acara peresmian Laboratorium (PCR) tersebut dilakukan oleh Wali Kota Banjarmasin, Bapak H. Ibnu Sina, S.Pi., M.Si yang dihadiri oleh Kepala Dinas Kesehatan Kota Banjarmasin, Bapak Dr. Machli Riyadi, SH., MH. Serta jajaran pejabat tinggi di lingkungan Pemerintah Kota Banjarmasin.',
      link: '/aa'
    },
  })
}
</script>
