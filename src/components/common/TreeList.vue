<template>
    <div class="tree-list">
        <ul class="treelist-item">
            <li v-for="(item,i) in items" :key='i'>
                <div v-if="item.isFolder">
                    <div class="treelist-row" @click="toggle(i)">
                        <div class="item-icon iconfont icon-zhuye"></div>
                        <div class="treelist-item-text">{{item.name}}</div>
                        <div><span class="iconfont icon-webicon215 expand"></span></div>
                    </div>
                </div>
                <div v-else>
                    <div class="treelist-row" @click="navto(item)">
                        <div class="item-icon"><span class="iconfont icon-guanyuwomen"></span></div>
                        <div class="treelist-item-text">{{item.name}}</div>
                    </div>
                </div>
                
                <div v-if="item.isFolder==true" v-show="item.isOpen">
                    <ul>
                        <li v-for="(itemT,j) in item.navSecond" :key='j' class="row-li" @click="navto(itemT)">
                            <div class="treelist-row">
                                <div class="treelist-item-text">{{itemT.name}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
      props: {
          items:{
              type: null,
              required: true
          }
      },
      data(){
          return {
              
          }
      },
      methods: {
        toggle: function (num) {
            console.log('toggle')
            if (this.items[num].isFolder) {
                this.items[num].isOpen=!this.items[num].isOpen
            }
        },
        navto (e) {
            this.$router.push({path: '/myweb/' + e.path})
        },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/common/TreeList.scss';
</style>