<template>
  <div>
    <heads />
    <router-view />
  </div>
</template>

<script>
  import heads from "./components/heads.vue";
  export default {
    components: { heads }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
