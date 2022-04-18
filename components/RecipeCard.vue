<template>
    <div>
        <v-card class="grey lighten-3 black--text">
            <v-card-title class="subheading font-weight-bold pa-md-8">
                <v-row>
                    {{ recipe.title }}
                    <v-spacer></v-spacer>
                    <v-btn small rounded fab elevation="1" color="primary">
                        <v-icon> mdi-pencil </v-icon>
                    </v-btn>
                </v-row>
            </v-card-title>

            <v-divider></v-divider>

            <v-list dense class="white black--text">
                <v-list-item class="black--text">
                    <v-col>
                        <v-list-item-content
                            class="black--text font-weight-thin"
                        >
                            {{ recipe.description }}
                        </v-list-item-content>
                    </v-col>
                </v-list-item>

                <v-list-item class="black--text">
                    <v-col class="align-center">
                        <v-list-item-content class="font-weight-thin">
                            Ingredients
                        </v-list-item-content>
                        <v-list-item-content
                            class="align-end black--text"
                            v-for="ingredient in recipe.ingredients"
                            :key="ingredient"
                        >
                            <v-list-item-title>
                                <v-icon> mdi-circle-small </v-icon>
                                {{ ingredient.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle class="pl-md-5">
                                {{ ingredient.description }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-col>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Recipe} from '@/types'

@Component({})
export default class RecipeCard extends Vue {
    @Prop() recipe!: Recipe;
}