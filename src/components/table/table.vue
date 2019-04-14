<template>
    <div id="table">
        <el-tabs v-model="cur_tab">
            <el-tab-pane label="基础表格" name="basic">
                <el-table :data="table_data" stripe style="width:100%;">
                    <el-table-column prop="name" label="名称" ></el-table-column>
                    <el-table-column prop="price" label="价格" ></el-table-column>
                    <el-table-column prop="descri" label="描述" ></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="可全选表格" name="selected">
                <el-table ref="multipleTable" :data="table_data" @selection-change="handleSelChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="name" label="名称" ></el-table-column>
                    <el-table-column prop="price" label="价格" ></el-table-column>
                    <el-table-column label="描述" >
                        <template slot-scope="scope">{{scope.row.descri}}</template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
             <el-tab-pane label="上固定" name="top">
                <el-table :data="table_data" stripe style="width:100%;" height="200">
                    <el-table-column prop="name" label="名称" ></el-table-column>
                    <el-table-column prop="price" label="价格" ></el-table-column>
                    <el-table-column prop="descri" label="描述" ></el-table-column>
                </el-table>
            </el-tab-pane>
             <el-tab-pane label="左固定" name="left">
                <el-table :data="table_data" stripe style="width:200px;">
                    <el-table-column fixed prop="name" label="名称" ></el-table-column>
                    <el-table-column prop="price" label="价格" ></el-table-column>
                    <el-table-column prop="descri" label="描述" ></el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name:"Table",
    data(){
        return{
           table_data:[],
           cur_tab:"basic",
           multipleSelection:[]
        }
    },
    created(){
        this.$http.get('../static/data/table_data.json').then((data)=>{
            this.table_data = data.data;
            console.log(this.table_data);
        }).catch((er)=>{
            console.log(er);
        })
    },
    methods:{
        handleSelChange(val){
            this.multipleSelection = val;
        }
    }
}
</script>

<style scoped>
    
</style>


