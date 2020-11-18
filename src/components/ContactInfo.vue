<template>
  <v-sheet
    color="grey lighten-4"
  >
    <v-container>
      <v-layout
        class="caption align-center"
      >
        <v-icon v-text="'mdi-map-marker'" small />
        <span v-text="address" class="mr-6" />
        <v-icon v-text="'mdi-phone'" small />
        <span v-text="phone" class="mr-6" />
        <!-- <v-icon v-text="'mdi-email'" small />
        <span v-text="email" class="mr-6" /> -->
        <v-spacer />
        <v-icon v-text="'mdi-facebook'" class="mx-3" />
        <v-icon v-text="'mdi-instagram'" class="mx-3" />
      </v-layout>
    </v-container>
    
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    address: 'Jl. Rantauan Darat, Kelayan Sel.',
    phone: '(0511) 6782000',
    email: ''
  })
}
</script>

<style>

</style>