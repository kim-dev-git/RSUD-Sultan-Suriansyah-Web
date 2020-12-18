<template>
  <div>
    <v-app-bar
      app
      elevate-on-scroll
      color="white"
    >
      <v-container>
        <v-layout
          :class="!$vuetify.breakpoint.mdAndUp ? 'mx-n6' : 'mx-n4'"
          class="align-center"
        >
          <v-card-title v-text="'RSUD SS'" @click="$router.push('/')" style="cursor: pointer;" />
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
                :to="!navigation.newtab ? navigation.link : ''"
                @click="goTo(navigation)"
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
                    :to="!item.newtab ? item.link : ''"
                    @click="goTo(item)"
                  >
                    <v-list-item-title
                      v-text="item.text"
                    />
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-layout>
          <v-app-bar-nav-icon v-else @click="drawer = true" />
        </v-layout>
      </v-container>

      

    </v-app-bar>

    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <template
            v-for="navigation in navigations"
          >
            <v-list-item
              v-if="!navigation.multimenu"
              :key="'nav-' + navigation.link"
              @click="goTo(navigation)"
            >
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon> -->
              <v-list-item-title v-text="navigation.text" />
            </v-list-item>
            <v-list-group
              v-else
              :key="'sub-' + navigation.link"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="navigation.text" />
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in navigation.submenu"
                :key="'child-' + child.link"
                @click="goTo(navigation)"
                :to="!navigation.newtab ? navigation.link : ''"
                class="ml-4"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    navigations: [
      { text: 'Beranda', link: '/', multimenu: false, newtab: false },
      { text: 'Profil', link: '/p/profil', multimenu: false, newtab: false },
      { text: 'Layanan', link: '/p/layanan', multimenu: false, newtab: false },
      { text: 'Informasi', link: '/informasi', multimenu: true, newtab: false,
        submenu: [
          { text: 'Poliklinik', link: '/p/poliklinik', newtab: false },
          { text: 'Penunjang', link: '/p/penunjang', newtab: false },
          { text: 'Rawat Jalan', link: '/p/rawatjalan', newtab: false },
          { text: 'Rawat Inap', link: '/p/rawatinap', newtab: false },
          // { text: 'Survei Kepuasan Masyarakat', link: '/p/survei', newtab: false },
        ]
      },
      { text: 'Poli Online', link: 'http://121.101.186.98/sultan_online', multimenu: false, newtab: true },
      { text: 'SISMADAK', link: 'http://rsudss-sismadak.banjarmasinkota.go.id/', multimenu: false, newtab: true },
      { text: 'Pengaduan Masyarakat', link: '/p/pengaduanmasyarakat', multimenu: false, newtab: false },
      { text: 'Perpustakaan Online', link: '/perpustakaan', multimenu: true, newtab: false,
        submenu: [
          { text: 'E-Library', link: 'https://www.persi.or.id/e-library', newtab: true },
          { text: 'Regulasi Undang-undang', link: 'https://www.persi.or.id/regulasi-persi/undang-undang', newtab: true },
          { text: 'Regulasi Peraturan Presiden', link: 'https://www.persi.or.id/regulasi-persi/peraturan-presiden', newtab: true },
          { text: 'Regulasi Peraturan Presiden', link: 'https://www.persi.or.id/regulasi-persi/peraturan-presiden', newtab: true },
          { text: 'Regulasi Peraturan Pemerintah', link: 'https://www.persi.or.id/regulasi-persi/peraturan-pemerintah', newtab: true },
          { text: 'Regulasi PERMENKES', link: 'https://www.persi.or.id/regulasi-persi/permenkes', newtab: true },
          { text: 'Regulasi KEMENKES', link: 'https://www.persi.or.id/regulasi-persi/kepmenkes', newtab: true },
          { text: 'Surat Edaran', link: 'https://persi.or.id/', newtab: true },
          { text: 'Surat Edaran KEMENKES', link: 'https://www.persi.or.id/regulasi-persi/edaran/surat-edaran-kemenkes', newtab: true },
          { text: 'Surat Edaran BPOM', link: 'https://www.persi.or.id/regulasi-persi/edaran/surat-edaran-bppom', newtab: true },
          { text: 'Keputusan Menteri Lain', link: 'https://www.persi.or.id/regulasi-persi/keputusan-menteri-lain', newtab: true },
          { text: 'Peraturan BPJS', link: 'https://www.persi.or.id/regulasi-persi/peraturan-bpjs', newtab: true },
        ]
      },
    ]
  }),
  methods: {
    test(on) {
      console.log(on)
    },
    goTo(navigation) {
      // console.log('Go: ' + navigation)
      if (navigation.newtab) {
        this.$router.open(navigation.link)
      } else {
        // this.$router.push(navigation.link)
      }
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