<template>
  <v-app-bar
    app
    elevate-on-scroll
    color="white"
  >
    <v-container>
      <v-layout
        class="align-center"
      >
        <v-card-title v-text="'RSUD SS'" />
        <v-spacer />
        <v-layout v-if="$vuetify.breakpoint.mdAndUp"
          class="justify-end"
        >
          <template
            v-for="navigation in navigations"
          >
            <v-btn
              :key="navigation.link"
              v-if="!navigation.multimenu"
              text
              class="text-none"
              active-class="primary--text"
              :to="navigation.link"
              exact
            >
              <span v-text="navigation.text" class="subtitle font-weight-medium" />
            </v-btn>

            <v-menu
              :key="navigation.link"
              v-else
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  :class="attrs['aria-expanded'] === 'true' ? 'primary--text' : ''"
                  class="text-none"
                  active-class="primary--text"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span v-text="navigation.text" />
                  <v-icon
                    v-text="'mdi-chevron-down'"
                    class="mr-n1 animate"
                    :class="attrs['aria-expanded'] === 'true' ? 'rotate' : ''"
                  />
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in navigation.submenu"
                  :key="index"
                  @click="$router.push(`/${item.link}`)"
                >
                  <v-list-item-title
                    v-text="item.text"
                  />
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-layout>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    navigations: [
      { text: 'Beranda', link: '/', multimenu: false },
      { text: 'Profil', link: '/profil', multimenu: false },
      { text: 'Layanan', link: '/layanan', multimenu: false },
      { text: 'Informasi', link: '/informasi', multimenu: true,
        submenu: [
          { text: 'Poliklinik', link: '/poliklinik' },
          { text: 'Penunjang', link: '/poliklinik' },
          { text: 'Rawat Jalan', link: '/rawatjalan' },
          { text: 'Rawat Inap', link: '/rawatinap' },
          { text: 'Survei Kepuasan Masyarakat', link: '/survei' },
        ]
      },
    ]
  }),
  methods: {
    test(on) {
      console.log(on)
    }
  }
}
</script>

<style lang="scss" scoped>
  .rotate {  
    transform: rotate(180deg);
  }
  .animate {
    transition: transform 0.3s ease;;
  }
</style>