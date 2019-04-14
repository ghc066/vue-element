<template>
    <div id="icon">
        <el-row :gutter="20">
            <el-col :span="6"><i class="el-icon-edit"></i></el-col>
            <el-col :span="6"><i class="el-icon-share"></i></el-col>
            <el-col :span="6"><i class="el-icon-delete"></i></el-col>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"Icon"
}
</script>

<style scoped>
    #icon{
        text-align: center;
    }
    .el-row{
        height: 36px;
    }
</style>