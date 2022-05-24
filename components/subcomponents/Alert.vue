<template>
  <v-row v-if="alert == true" id="success-alert">
    <v-alert type="success">
      {{ alertMessage }}
    </v-alert>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component({})
export default class Alert extends Vue {
  @State alert!: boolean
  @State alertMessage!: string
  @Watch('alert')
  onStateChange(newValue: boolean): void {
    setTimeout(() => {
      this.$store.commit('HIDE_ALERT')
    }, 3000)
  }
}
</script>

<style scoped>
#success-alert {
  width: fit-content;
  position: fixed;
  top: 10%;
  right: 50%;
  left: 50%;
  z-index: 9999;
}
</style>
