<template>
  <v-app dark align = "center">
    <v-card class ="overflow-hidden d-inline-flex flex-center" style="align-items: center;">
      <v-app-bar
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      fade-img-on-scroll
      floating
      >
       <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-title id = "app-bar-title" class="flex flex-center" style="align-items: center;" align = "center">
          Weekly shopper

      </v-app-bar-title>
      </v-app-bar>

    </v-card>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>
<style>
#app-bar-title{
    display: center;
    align-items: center;
}
</style>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Weekly-shopper',
    }
  },
}
</script>
