<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:key="i" v-bind:class="{active : currentTab === i}" v-on:click="currentTab = i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <main>
      <ol>
        <li v-bind:class="{active:currentTab === 0}">
          <ItemsEditor v-bind:items="resume['profile']" v-bind:title="'个人信息'" v-bind:labels="resume['profileLabels']" v-bind:action="'false'" />
        </li>
        <li v-bind:class="{active:currentTab === 1}">
          <ItemsEditor v-bind:items="resume['workHistory']" v-bind:title="'工作经历'" v-bind:labels="resume['workLabels']" />
        </li>
        <li v-bind:class="{active:currentTab === 2}">
          <ItemsEditor v-bind:items="resume['studyHistory']" v-bind:title="'学习经历'" v-bind:labels="resume['studyLabels']" />
        </li>
        <li v-bind:class="{active:currentTab ===3 }">
          <ItemsEditor v-bind:items="resume['projectHistory']" v-bind:title="'项目经历'" v-bind:labels="resume['projectLabels']" />
        </li>
        <li v-bind:class="{active:currentTab ===4 }">
          <ItemsEditor v-bind:items="resume['awardsHistory']" v-bind:title="'获奖情况'" v-bind:labels="resume['awardsLabels']" />
        </li>
        <li v-bind:class="{active:currentTab ===5 }">
          <ItemsEditor v-bind:items="resume['contact']" v-bind:title="'联系方式'" v-bind:labels="resume['contactLabels']" v-bind:action="'false'" />
        </li>
      </ol>
    </main>
  </div>
</template>

<script>
  import ItemsEditor from './ItemsEditor.vue'
  export default {
    components: {
      ItemsEditor
    },
    props:['resume'],
    data() {
      return {
        currentTab: 0,
        icons: ['cardid', 'work', 'book', 'zan1', 'icon--', 'dianhua1'],
      }
    }
  }

</script>


<style lang="scss">
  #editor {
    display: flex;
    >nav {
      background: #000;
      width: 80px;
      >ol>li {
        padding: 16px 0;
        text-align: center;
        >.icon {
          width: 24px;
          height: 24px;
          fill: #fff;
        }
        &.active {
          background: #fff;
          >.icon {
            fill: #000;
          }
        }
      }
    }
    >main {
      background: #fff;
      >ol {
        flex: 1;
        >li {
          display: none;
          padding: 32px;
          overflow: auto;
          height: 88%;
          &.active {
            display: block;
          }
          .container {
            position: relative;
            .el-icon-delete {
              position: absolute;
              top: 12px;
              right: 0;
            }
          }
        }
      }
    }
  }

</style>
