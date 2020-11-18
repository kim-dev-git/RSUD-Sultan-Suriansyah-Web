<template>
  <div>
    <v-app-bar
      app
      elevate-on-scroll
      color="white"
    >
      <v-container>
        <v-layout
          :class="!$vuetify.breakpoint.mdAndUp ? 'mx-n6' : ''"
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
              :key="navigation.link"
              :to="navigation.link"
            >
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon> -->
              <v-list-item-title v-text="navigation.text" />
            </v-list-item>
            <v-list-group
              v-else
              :key="navigation.link"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="navigation.text" />
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in navigation.submenu"
                :key="child.link"
                :to="child.link"
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
      { text: 'Beranda', link: '/', multimenu: false },
      { text: 'Profil', link: '/profil', multimenu: false },
      { text: 'Layanan', link: '/layanan', multimenu: false },
      { text: 'Informasi', link: '/informasi', multimenu: true,
        submenu: [
          { text: 'Poliklinik', link: '/poliklinik' },
          { text: 'Penunjang', link: '/penunjang' },
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