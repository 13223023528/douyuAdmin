<template>
    <div id="app">
        <div class="page-container" :style="{left: !showMenu ? '0' : pageNavShrink ? '3.5rem' : '12rem'}">
            <keep-alive :include="$store.state.keepAliveViews" :max="5">
                <router-view />
            </keep-alive>
        </div>
        <div  :class="{'page-navigation':true, 'shrink':pageNavShrink}" v-if="showMenu">
              <!--
                <div class="page-logo" :style="{display: 'flex',alignItems: 'center'}">
                    <img v-show="!pageNavShrink" class="nav-logo" :style="{height: '70%'}" src="./assets/logo.png">
                    <img v-show="pageNavShrink" class="nav-logo" src="./assets/logo.png">
                </div> -->  
        

            <!-- 左侧菜单栏目 -->
            <SidebarMenu 
                v-show="!pageNavShrink" 
                class="navigation" 
                theme="dark" 
                width="12rem" 
                :items="pages" 
                @item-click="menuItemClick"  />

            <!-- 左侧菜单栏目（收缩时） -->
            <SidebarMenuShrink  
                v-show="pageNavShrink" 
                class="navigation" 
                theme="dark" 
                width="3.5rem" 
                :items="pages" 
                @item-click="menuItemClick" />
        </div>
    </div>
</template>

<script>
//载入样式
import './common/sass/frame.scss';
//载入组件
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import SidebarMenuShrink from './components/SidebarMenu/SidebarMenuShrink';

export default {
    name: 'App',
    data () {
        return {
            //左侧菜单
            pageArray: [
                {title: '视频管理',icon:'ios-home',name:'Index',path:'/video'},
            ]
        }
    },
    components: {
        SidebarMenu,
        SidebarMenuShrink
    },
    mounted () {
       
    },
    computed: {
        pageNavShrink(){
            return this.$store.state.pageNavShrink;
        },
        showMenu(){
            return this.$store.state.showMenu;
        },
        pages () {
            return this.pageArray;
        }
    },
    methods: {
        //左侧导航item被点击时处理函数
        menuItemClick(item, itemName){
            this.$router.push(item.path);
        }
    }
}

</script>

