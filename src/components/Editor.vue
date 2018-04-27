<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active : currentTab === i}" v-on:click="currentTab = i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <main>
      <ol>
        <li v-bind:class="{active:currentTab === 0}">
          <ProfileEditor v-bind:profile="profile" />
        </li>
        <li v-bind:class="{active:currentTab === 1}">
          <WorksEditor v-bind:items="workHistory" />
        </li>
        <li v-bind:class="{active:currentTab === 2}">
          <StudysEditor v-bind:items="studyHistory" />
        </li>
        <li v-bind:class=" {active:currentTab===3 } ">
          <ProjectsEditor v-bind:items="projectHistory"/>
        </li>
        <li v-bind:class="{active:currentTab===4 } ">
          <h2>获奖情况</h2>
        </li>
        <li v-bind:class="{active:currentTab===5 } ">
          <h2>联系方式</h2>
        </li>
      </ol>
    </main>
  </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor.vue'
  import WorksEditor from './WorksEditor.vue'
  import StudysEditor from './StudysEditor.vue'
  import ProjectsEditor from './ProjectsEditor.vue'
  export default {
    components: {
      ProfileEditor,
      WorksEditor,
      StudysEditor,
      ProjectsEditor
    },
    data() {
      return {
        currentTab: 0,
        icons: ['cardid', 'work', 'book', 'zan1', 'icon--', 'dianhua1'],
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workHistory: [{
          company: '',
          content: ''
        }],
        studyHistory: [{
          school: '',
          duration: '',
          degree: ''
        }],
        projectHistory: [{
          name: '',
          post: '',
          content: ''
        }]
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
