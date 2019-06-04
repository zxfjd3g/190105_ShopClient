<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    name: 'App',
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

