<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4" class="logo-width">
            <h2>element-ui</h2>
          </el-col>
          <el-col :span="20" class="menu-icon-col">
            <i class="el-icon-menu menu-icon" @click="TapMenu"></i>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="bottom-main el-col-24">
        <el-aside :width='aside_width'>
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse-transition=false :router=true @open="handleopen" @close="handleClose" :collapse ="isCollapse">
            <div v-for="(item,index) in aside_data" :key="index">
                <el-submenu v-if='item.haschild' :index="item.index">
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </template>
                
                  <el-menu-item v-for="(it,idx) in item.children" :key="idx" :index="it.link">
                      {{it.name}}
                  </el-menu-item>
                </el-submenu>
              
                <el-menu-item v-else :index="item.index">
                  <i :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </el-menu-item>            </div>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>   
    </el-container> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isCollapse:false,
      aside_width:"200px",
      pagedefault:"/layout",
      aside_data:[]
    };
  },
  created(){
      this.$http.get('../static/data/aside_data.json').then((data)=>{
        this.aside_data = data.data;
      }).catch((err)=>{
        console.log(err);
      })
  },
  methods:{
    handleopen(key,path){
      //console.log(key,path);
    },
    handleClose(key,path){
      //console.log(key,path);
    },
    TapMenu(){
      this.isCollapse = !this.isCollapse;
      this.aside_width = this.isCollapse?"64px":"200px";
    }
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>


<style scoped>
.logo-width{
  width: 200px;
  line-height: 60px;
  border-right: 1px solid hsla(62,77%,76%,.3);
}
.el-aside{
  background-color: #eef1f6;
  text-align: center;
}
.el-header{
  background-color: #20a0ff;
  text-align: center;
  padding: 0;
  margin: 0;
}
.el-main{
  text-align: center;
}
.bottom-main{
  display: flex;
  position: absolute;
  top:60px;
  bottom:0px;
  overflow: hidden;
}
.el-menu-vertical-demo{
  background-color: #eef1f6;
  text-align: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
  background-color: #eef1f6;
  text-align: left;
}
.menu-icon{
  color: #fff;
  font-size: 20px;
  line-height: 60px;
}
.menu-icon:hover{
  cursor: pointer;
  color:#F60;
}
.menu-icon-col{
  text-align: left;
  padding-left: 20px;
}
.el-menu{
  border-right: none;
}
</style>
