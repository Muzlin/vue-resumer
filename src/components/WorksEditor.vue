<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="container" v-for="(work,index) in workHistory">
        <el-form-item label="公司">
          <el-input v-model="work.company"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="work.content"></el-input>
        </el-form-item>
        <i v-on:click="removeWorks(index)" class="el-icon-delete"></i>
        <hr>
      </div>
      <el-button v-on:click="addWorks()" type="primary">添加</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['workHistory'],
    methods: {
      addWorks() {
        this.workHistory.push({
          company: '',
          content: ''
        })
      },
      removeWorks(index) {
        this.workHistory.splice(index, 1)
      }
    }
  }

</script>
