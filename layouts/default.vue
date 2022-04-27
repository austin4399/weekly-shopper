<template>
  <v-app class="app-container">
    <v-app-bar dense app color="secondary" class="app-bar">
      <v-row justify="center" align="center">
          <v-icon>mdi-cart</v-icon>
            <h2 class="font-weight-light">Weekly shopper</h2>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-col class="align-stretch">
        <Nuxt />
      </v-col>
    </v-main>

    <v-bottom-navigation fixed background-color="secondary" class="app-bar">
      <v-btn v-for="link in links" :key="link.name" :to="link.to">
        <span>{{ link.name }}</span>
        <v-icon>{{ link.icon }}</v-icon>
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
    },
  ]
}
</script>
<style>
.app-bar{
  display: flex;
  align-items: center;
  position: absolute;
  padding: 0.5em;
}
.app-container{
  overflow: hidden;
  align-items: center;
  content: flex;
  position: relative;
}
@media screen and (max-width: 399px) {
  .app-bar{
    display: flex;
    size: auto;
    height: 100%;
    width: auto;
    position: relative;
    align-items: center;
  }
}
</style>
