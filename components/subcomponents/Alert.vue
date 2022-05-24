<template>
    <v-row v-if="alert == true" id="success-alert">
      <v-alert
        type="success"
      >
        Recipe added!
      </v-alert>
    </v-row>
</template>

<script lang='ts'>

import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {mapState} from 'vuex';
import {State} from 'vuex-class';

@Component({
})
export default class Alert extends Vue {
    @State alert!: boolean;
    @Watch('alert')
    onStateChange(newValue: boolean): void {
        setTimeout(() => {  this.$store.commit('HIDE_ALERT')}, 3000);
    }
}
</script>