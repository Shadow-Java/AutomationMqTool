<template>
  <div id="app">
    <indexMenu></indexMenu>
  </div>
</template>

<script>
  import indexMenu from './components/indexMenu'
  export default {
    name:"App",
    components:{
        indexMenu
    }
  }
</script>
<style lang="less">
    html,body{
        width: 100%;
        height: 100%;
        margin: 0;
    }
    #app{
        height: 100vh;
    }
</style>
