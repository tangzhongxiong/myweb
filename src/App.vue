<template>
  <div class="home">
    <div class="header">
      <header></header>
    </div>
    <div class="home-content">
      <div class="left">
          <TreeList :items="items"></TreeList>
      </div>
      
      <div class="right">
        <router-view/>
      </div>
    </div>
    
  </div>

  
</template>

<script>
  import TreeList from './components/common/TreeList'

  export default {
    name: 'App',
    data () {
      return {
        items:[
          {
            name: '个人博客',
            isOpen: false,
            isFolder: true, // 是否存在二级菜单,true为存在
            navSecond: [
                {name: '主页', path: 'home'},
                {name: '创建单位', path: 'unit'},
                {name: '创建目的'},
                {name: '管理单位'},
                {name: '运行主体'}
            ]
          },
          {
            name: '关于我', 
            path: 'aboutMe', 
            isOpen: false, 
            isFolder: false
          }
        ]
      }
    },
    computed: {
    },
    methods: {

    },

    components: {
      TreeList
    },
    watch: {

    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/css/App.scss';
</style>

