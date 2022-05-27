<template>
<div class="calories">
  <h1>
    <!-- {{calories}} -->
  </h1>
</div>
</template>

<script lang="ts">
import { response } from 'express'
import axios from 'axios'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
export default class IndexPage extends Vue {
  mounted() {
    // produceCalories(),
    // this.calories
  }
  calories: any = {}
}

</script>

<style></style>
