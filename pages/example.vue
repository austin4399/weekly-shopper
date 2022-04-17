<template>
  <div>
    {{recipeFormDialog}}
  </div>
</template>

<script lang='ts'>

import {Component, Prop, Vue} from 'vue-property-decorator';
import {Getter} from 'vuex-class';

@Component({})
export default class ExamplePage extends Vue {
  @Getter recipeFormDialog!: boolean;
}
</script>