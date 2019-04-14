<template>
    <div id="container">
        <el-container class="bottom-container">
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>

        <el-container class="bottom-container">
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>

        <el-container class="bottom-container">
            <el-aside>Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>

        <el-container class="bottom-container">
            <el-header>Header</el-header>
            <el-container>
               <el-aside>Aside</el-aside>
               <el-main>Main</el-main> 
            </el-container>
        </el-container>

        <el-container class="bottom-container">
            <el-header>Header</el-header>
            <el-container>
               <el-aside>Aside</el-aside>
               <el-container>
                   <el-main>Main</el-main> 
                   <el-footer>Footer</el-footer>
               </el-container>
            </el-container>
        </el-container>

        <el-container class="bottom-container">
            <el-aside>Aside</el-aside> 
            <el-container>
               <el-header>Header</el-header>
               <el-main>Main</el-main> 
            </el-container>
        </el-container>

        <el-container class="bottom-container">
            <el-aside>Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main> 
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name:"Container",
    data(){
        return{
            title:"Container"
        }
    }
}
</script>

<style scoped>
    #container{
        text-align: center;
    }
    .bottom-container{
        margin-bottom: 20px;
    }
    .el-header{
        background: #99a9bf;
        line-height: 60px;
    }
    .el-main{
        height: 200px;
        line-height: 160px;
        background: #d3dce6;
    }
    .el-aside{
        background: #e5e9f2;
        line-height: 160px;
        width: 200px;
    }
    .el-footer{
        background: #99a9bf;
        line-height: 60px;
    }
</style>