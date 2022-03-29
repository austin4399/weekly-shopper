<template>
  <v-app>
    <v-app-bar app color="grey darken-1">
      <v-row class="ml-sm">
        <p>Weekly shopper</p>
      </v-row>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-bottom-navigation v-model="tab" :background-color="color" dark shift>
      <v-btn v-for="link in links" :key="link" :to="link.to">
        <span>{{link.name}}</span>
        <v-icon>{{link.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<style></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class DefaultLayout extends Vue {
  links: any = [
    {
      name: 'Home',
      to: '/',
      icon: 'mdi-home-outline',
    },
    {
      name: 'Recipes',
      to: '/recipes',
      icon: 'mdi-food-apple-outline',
    },
    {
      name: 'Cart',
      to: '/weeklycart',
      icon: 'mdi-cart-outline',
    }
  ]
  color: string = 'grey darken-1'
  tab: number = 0;
  clipped: boolean = false
  drawer: boolean = false
  fixed: boolean = false
}

</script>
