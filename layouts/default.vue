<template>
  <v-app>
    <v-app-bar
      app
      color="flex flex-around grey darken-1"
      flat
      rounded
    >
      <div
        :color="
          $vuetify.breakpoint.smAndDown ? 'light-grey lighten-3' : 'transparent'
        "
        size="32"
      ></div>
      <v-tabs grow centered class="ml-n9" color="black darken-1">
        <!-- path to weekly cart -->
        <v-tab left class="flex flex-between" to="/">
          <v-icon class="pa-md-sm"> mdi-cart-outline </v-icon>
        </v-tab>
        <!-- path to other pages -->
        <v-tab v-for="link in links" :key="link" :to="link.to">
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main>
        <Nuxt />
    </v-main>
    
  </v-app>
</template>
<style>

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class DefaultLayout extends Vue {
  links: any = [
    {
      name: 'Build a Cart',
      to: '/weeklycart',
      id: 'ran-rec',
    }
  ]

  clipped: boolean = false;
  drawer: boolean = false;
  fixed: boolean = false;

}
</script>
