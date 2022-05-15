<template>
  <div>
    <v-row v-show="alert == true" id="success-alert">
      <v-alert
        type="success"
      ></v-alert>
    </v-row>
    <v-btn
      @click="showAlert()"
    ></v-btn>
    <div v-if="pageLoading == false" class="pa-md-4 mx-lg-auto">
      <v-card class="pa-md-4 mx-lg-auto grey lighten-3">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-iterator
          class="mb-lg-10"
          :items="recipes"
          :search="search"
          disable-pagination
          disable-items-per-page
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row class="px-md-1 mx-md-1">
              <v-col
                v-for="recipe in props.items"
                :key="recipe.title"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <RecipeCard :recipe="recipe" />
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
        <RecipeFormDialog/>
      </v-card>
      <v-btn
        id="floating-action-button"
        fab
        bottom
        right
        fixed
        @click="OPEN"
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import axios from 'axios'
import { number } from 'zod'
import { Recipe } from '@/types'
import { mapMutations, mapState } from 'vuex'
import RecipeCard from '@/components/RecipeCard.vue'
import { data } from 'browserslist'
import { State, namespace} from 'vuex-class'
import RecipeFormDialog from '@/components/RecipeFormDialog.vue'

const recipesModule = namespace('recipes')

@Component({
  components: {
    RecipeCard,
    RecipeFormDialog
  },
  methods: {
    ...mapMutations(['OPEN', 'CLOSE']),
  },
})
export default class RecipesPage extends Vue {
  mounted() {
    this.$store.dispatch('recipes/getRecipes')
    this.pageLoading = false
  }

  pageLoading = true

  @recipesModule.State recipes!: Recipe[];
  @Watch('recipes')
  onRecipesChange(newValue: Recipe[]): void {
    this.$store.commit('CLOSE')
    console.log(newValue[newValue.length -1].title)
  }
  search: string = ''
  cost!: number;
  alert = false;
  showAlert(){
    this.alert = true
    setTimeout(() => {  this.alert = false; }, 3000);
  } 
}
</script>

<style lang="css">
#search {
  resize: both;
}
#floating-action-button {
  bottom: 80px;
}
#btn-container {
  display: inline;
}
#success-alert{
  position: absolute;
}
@media screen and (max-width: 700px) {
  .form-card {
    height: 100%;
    width: auto;
    padding: 0.5em;
    position: relative;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
    display: flex;
    top: 50%;
    left: 50%;
  }
  .form-card-content {
    position: absolute;
  }
  #ingredient-container {
    margin: 2%;
  }
  #description-container {
    margin: 1%;
  }
  #btn-container {
    margin: 5%;
    padding: 5%;
  }
}
</style>
