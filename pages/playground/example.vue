<template>
  <div class="pa-md-10 ma-md-10">
    <div>
      <v-row>
        <h3>The below element is pulled from store index</h3>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="CLOSE">CLOSE</v-btn>
        </v-col>
        <v-col>
          {{ recipeFormDialog }}
        </v-col>
        <v-col>
          <v-btn @click="OPEN">OPEN</v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col>
          <h3>The below element is pulled from store cart module</h3>
          <v-row v-for="item in cart" :key="item" class="mt-sm-5">
            {{ item }}
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
import { State, Mutation, Action, namespace } from 'vuex-class'

const cartModule = namespace('cart')

@Component({
  methods: {
    ...mapMutations(['OPEN', 'CLOSE']),
  },
})
export default class ExamplePage extends Vue {
  @State recipeFormDialog!: boolean

  @cartModule.State cart!: string[]
}
</script>
