<template>
  <div id="preview">
    <h1>{{resume.profile.name}}</h1>
    <p>{{resume.profile.city}} | {{resume.profile.birth}}</p>
  </div>
</template>

<script>
  export default {
    props: ['resume'],
    methods: {
      // 过滤对象 将所有值为空的对象过滤掉
      fitrer(obj) {
        return obj.fitrer(m => !this.isEmpty(obj))
      },
      // 判断一个对象是否全是空值
      isEmpty(obj) {
        let empty = true
        for (const key in obj) {
          if (obj[key]) {
            empty = false
            break
          }
        }
        return empty;
      }
    }
  }

</script>


<style lang="scss" scoped>
  #preview {}

</style>
