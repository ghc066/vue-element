<template>
  <div id="myfrom">
    <el-container>
      <el-form ref="form" :model="form" label-width="80px" class="my_container">
        <el-form-item label="用户账号">
          <el-input placeholder="请输入账号" size="small" clearable v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input type="password" placeholder="请输入密码" size="small" clearable v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="请选择日期" size="small" v-model="form.bir"></el-date-picker>
        </el-form-item>
        <el-form-item label="区域选择">
          <el-select size="small" v-model="form.selection" placeholder="请选择区域">
            <el-option label="一线城市" value="one"></el-option>
            <el-option label="二线城市" value="two"></el-option>
            <el-option label="三线城市" value="three"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否开启">
          <el-switch v-model="form.switch" active-color="#13ce66" inactive-color="#ccc"></el-switch>
        </el-form-item>
        <el-form-item label="选择类型">
          <el-radio v-model="form.type" label="1">普通用户</el-radio>
          <el-radio v-model="form.type" label="2">开发者</el-radio>
        </el-form-item>
        <el-form-item label="个人爱好">
          <el-checkbox-group v-model="form.checkboxList">
            <el-checkbox label="篮球"></el-checkbox>
            <el-checkbox label="游泳"></el-checkbox>
            <el-checkbox label="足球"></el-checkbox>
            <el-checkbox label="羽毛球"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" style="width:100%;">提交注册</el-button>
      </el-form>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return{
      form:{
        account:"",
        password:"",
        bir:"",
        selection:"",
        switch:"",
        type:"1",
        checkboxList:[]
      }
    };
  },
  created(){
      
  },
  methods:{
    onSubmit(){

    }
  },

}
</script>

<style scoped>
  .el-form-item{
    margin-bottom: 10px;
  }
  .my_container{
    border:1px solid #ccc;
    padding:10px;
  }
  .el-date-editor.el-input{
    width:100%;
  }
  .el-select{
    width:100%;
  }
</style>
