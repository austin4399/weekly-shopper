<template>
  <div>
    <span>
      <v-btn
        color="primary"
        @click="CLOSE"
      >
        -
      </v-btn>
      {{$store.state.recipeFormDialog}}
      <v-btn
        color="primary"
        @click="OPEN"
      >
        +
      </v-btn>
    </span>
  </div>
</template>

<script lang='ts'>

import {Component, Prop, Vue} from 'vue-property-decorator';
import {mapMutations} from 'vuex';

@Component({
  methods: {
    ...mapMutations([
      'OPEN',
      'CLOSE'
    ])
  }
})
export default class ExamplePage extends Vue {
}
</script>