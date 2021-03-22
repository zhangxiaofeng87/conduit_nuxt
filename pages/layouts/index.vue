<template>
  <div>
    <v-header></v-header>
    <nuxt-child />
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './header';
import VFooter from './footer';
export default {
  name: 'DefaultIndex',
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style>

</style>