<template>
    <div id="button">
        <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
        </el-row>

        <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round disabled>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
        </el-row>

        <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>

        <el-row>
            <el-button type="text">文字按钮</el-button>
            <el-button type="primary" :loading="true">加载中</el-button>
        </el-row>

        <el-row>
            <el-button-group>
                <el-button icon="el-icon-edit" type="primary"></el-button>
                <el-button icon="el-icon-share" type="primary"></el-button>
                <el-button icon="el-icon-delete" type="primary"></el-button>
            </el-button-group>
        </el-row>

        <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium" round>中等按钮</el-button>
            <el-button size="small" round>小型按钮</el-button>
            <el-button size="mini" round>超小按钮</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"Button"
}
</script>

<style scoped>
    .el-row{
        margin-bottom: 20px;
    }
</style>