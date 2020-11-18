<template>
  <v-sheet
    dark
    color="blue-grey darken-4"
    class="font-weight-medium mt-6"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-layout
            column
          >
            <span v-text="'Hubungi Kami'" class="title" />
            <the-line class="mb-4" />
            <span v-text="'Telepon : (0511)6782000 / (0511)6782222'" class="body-2" />
            <v-divider class="my-2" />
            <span v-text="'IGD RSUD Sultan Suriansyah : 0811-5012-324'" class="body-2" />
            <v-divider class="my-2" />
            <span v-text="'IGD PONEK RSUD Sultan Suriansyah : 0878-1100-1747'" class="body-2" />
            <v-divider class="my-2" />
            <span v-text="'Email : rsudsultansuriansyah@gmail.com'" class="body-2" />
            <v-divider class="my-2" />
          </v-layout>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-layout
            column
          >
            <span v-text="'Alamat'" class="title" />
            <the-line class="mb-4" />
            <span v-text="'Jalan Rantauan Darat RT.04 RW.01 Kelurahan Kelayan Selatan Banjarmasin Kode Pos 70246'" class="body-2" />
          </v-layout>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-layout
            column
          >
            <span v-text="'Jadwal Poliklinik'" class="title" />
            <the-line class="mb-4" />
            <span v-text="'Senin - Kamis : 08.00 - 11.00'" class="body-2" />
            <span v-text="'Jumat : 08.00 - 10.00'" class="body-2" />
            <span v-text="'Sabtu : 08.00 - 10.00'" class="body-2" />
            <span v-text="'Minggu : Tutup'" class="body-2" />
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import TheLine from './TheLine.vue'
export default {
  components: { TheLine },

}
</script>

<style>

</style>