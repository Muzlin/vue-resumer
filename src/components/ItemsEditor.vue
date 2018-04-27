<template>
  <div>
    <h2>{{title}}</h2>
    <el-form v-if="IsList">
      <div class="container" v-for="(item,index) in items" v-bind:key="index">
        <el-form-item v-for="key in Keys" v-bind:key="key" v-bind:label="labels[key]">
          <el-input v-model="items[key]"></el-input>
        </el-form-item>
        <i v-if="Action" v-on:click="removeItem(index)" class="el-icon-delete"></i>
        <hr>
      </div>
      <el-button v-if="Action" v-on:click="addItem()" type="primary">添加</el-button>
    </el-form>
    <el-form v-else>
      <div class="container">
        <el-form-item v-for="(v,k) in items" :key="k" v-bind:label="labels[k]">
          <el-input v-model="items[k]"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['title', 'items', 'labels','action'],
    computed: {
      Keys: function () {
        if (this.items instanceof Array) {
          return Object.keys(this.items[0])
        }else{
          return this.items
        }
      },
      Action:function() {
        return !(this.action === 'false')
      },
      IsList:function(){
        return this.items instanceof Array
      }
    },
    methods: {
      addItem() {
        const empty = {}
        this.Keys.map((key)=>{
          empty[key] = ''
        })
        this.items.push(empty)
      },
      removeItem(index) {
        if(index === 0) return
        this.items.splice(index, 1)
      }
    }
  }
</script>
