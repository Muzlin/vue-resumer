<template>
  <div>
    <h2>学习经历</h2>
    <el-form>
      <div class="container" v-for="(item,index) in items">
        <el-form-item label="学校">
          <el-input v-model="item.school"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="item.duration"></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input v-model="item.degree"></el-input>
        </el-form-item>
        <i v-on:click="removeItem(index)" class="el-icon-delete"></i>
        <hr>
      </div>
      <el-button v-on:click="addItem()" type="primary">添加</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['items'],
    methods: {
      addItem() {
        this.items.push({
          school: '',
          duration: '',
          degree: ''
        })
      },
      removeItem(index) {
        this.items.splice(index, 1)
      }
    }
  }

</script>
