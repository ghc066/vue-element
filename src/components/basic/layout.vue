<template>
    <div id="layout">
        <!-- 无间隔24分栏-->
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"><h4 class="c-txt">24栏平均分</h4></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple-dark"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <!-- 有间隔24分栏-->
        <el-row :gutter="20">
            <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"> <div class="grid-content bg-purple"><h4 class="c-txt">24栏间隔平均分</h4></div></el-col>
            <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <!-- 混合 -->
        <el-row :gutter="20">
            <el-col :span="16"><div class="grid-content bg-purple"><h4 class="c-txt">24栏混合分</h4></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <!-- 分栏偏移 -->
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>      
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"><h4 class="c-txt">偏移了6格</h4></div></el-col> 
        </el-row>

        <!-- 对齐方式 -->
        <el-row type="flex" justify="space-between">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>      
            <el-col :span="6"><div class="grid-content bg-purple"><h5 class="c-txt">对齐start/end/center/space-between/spance-around</h5></div></el-col>      
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>      
        </el-row>

        <!-- 响应式 -->
        <el-row :gutter="10">
            <el-col :xs="8" :sm='6' :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"><h4 class="c-txt">响应式</h4></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <!-- 基于断点的隐藏类 -->
        <el-row>
            <el-col :span="24" class="hidden-md-and-down"><div class="grid-content bg-purple"><h4 class="c-txt">基于断点的隐藏类,md隐藏</h4></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"Layout",
    data(){
        return{
            title:"Layout"
        }
    }
}
</script>

<style scoped>
    #layout{
        text-align: center;
    }
    .el-row{
        margin-bottom: 20px;
    }
    .c-txt{
        line-height: 36px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>


