<template>
    <div>
        {{recipes}}
    </div>
</template>

<script lang='ts'>

import {Component, Prop, Vue} from 'vue-property-decorator';
import {State, namespace} from 'vuex-class';
import { Cart } from '@/types';

const recipesModule = namespace('recipes');

@Component({components:{}})
export default class stoopid extends Vue {
    @recipesModule.State recipes!: Cart;

    mounted(){
        this.$store.dispatch('recipes/getRecipes')
    }
}
</script>