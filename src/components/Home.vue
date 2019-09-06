<template>
  <div class="home">
    <div>
      <header class="header"></header>
    </div>
    <div>
        <ul>
            <li v-for="(item,i) in nav" :key='i'>
                <a href="javascript:;">
                    <div class="account-nav-primary" @click="tabPrimary(item)" :class="{active:item.isActive}">
                        <span>{{item.name}}</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </a>
                <div v-if="item.secondNav==true">
                    <ul class="account-nav-second" v-show="show">
                        <li v-for="(itemT,j) in item.navSecond" :key='j' :class="{active:itemT.name===title}"
                            @click="tabSecond(itemT)">
                            <span>{{itemT.name}}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        show: true,
        title: '学院介绍',
        nav: [
          {
            name: '学院介绍',
            isActive: false,
            secondNav: true, // 是否存在二级菜单,true为存在
            // path: 'background',
            navSecond: [
                {name: '创建背景', path: 'background'},
                {name: '创建单位', path: 'unit'},
                {name: '创建目的'},
                {name: '管理单位'},
                {name: '运行主体'}
            ]
          },
          {name: '关于我们', path: 'aboutMe', isActive: false, secondNav: false}
        ]
      }
    },
    computed: {
    },
    methods: {
      tabSecond (e) {
        this.$router.push({path: '/college/' + e.path})
      },
      tabPrimary (e) {
        let path = this.$route.path.split('/')[2]
        if (e.secondNav) {
        //   this.show = !this.show
          if (path === 'aboutMe') {
            this.$router.push({path: '/college/' + e.navSecond[0].path})
          }
        } else {
          this.$router.push({path: '/college/' + e.path})
        }
      }
    },
    created () {
      let path = this.$route.path.split('/')[2]
      this.nav.forEach(item => {
        item.isActive = false
        if (item.secondNav) {
          item.navSecond.forEach(itemT => {
            if (itemT.path === path) {
              this.title = itemT.name
              if (itemT.name === this.title) {
                item.isActive = true // 当属于子菜单时，父菜单高亮
              }
            }
          })
        } else {
          if (item.path === path) {
            this.title = item.name
            item.isActive = true
          }
        }
      })
    },
    components: {

    },
    watch: {
      $route (to) {
        let path = to.path.split('/')[2]
        this.nav.forEach(item => {
          item.isActive = false
          if (item.secondNav) {
            item.navSecond.forEach(itemT => {
              if (itemT.path === path) {
                this.title = itemT.name
                if (itemT.name === this.title) {
                  item.isActive = true // 当属于子菜单时，父菜单高亮
                }
              }
            })
          } else {
            if (item.path === path) {
              this.title = item.name
              item.isActive = true
            }
          }
        })
      }
    }
  }
</script>

<style>
    .home{
    font-size: 14px;
    }
    .home .header{
        padding: 16px;
        font-size: 14px;
        line-height: 1.5;
        color: hsla(0,0%,100%,.7);
        background-color: #24292e;
    }
</style>