<template>
  <div class="pa-md-10 mx-md-10">
    <v-row>
      <div>
        <v-btn @click="CLOSE">CLOSE</v-btn>
      </div>
      <div>
        {{ recipeFormDialog }}
      </div>
      <div>
        <v-btn @click="OPEN">OPEN</v-btn>
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex';
import { State, Mutation, Action } from 'vuex-class';

@Component({
  methods: {
    ...mapMutations(['OPEN', 'CLOSE']),
  },
})
export default class ExamplePage extends Vue {
  @State recipeFormDialog!: boolean;
}
</script>
