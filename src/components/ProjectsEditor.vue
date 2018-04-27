<template>
  <div>
    <h2>项目经历</h2>
    <el-form>
      <div class="container" v-for="(item,index) in items">
        <el-form-item label="项目名称">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item label="岗位职责">
          <el-input v-model="item.post"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="item.content"></el-input>
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
          name: '',
          post: '',
          content: ''
        })
      },
      removeItem(index) {
        this.items.splice(index, 1)
      }
    }
  }

</script>
