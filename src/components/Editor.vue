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
        <li v-bind:class="{active:currentTab === 0}">tab 1</li>
        <li v-bind:class="{active:currentTab === 1}">tab 2</li>
        <li v-bind:class="{active:currentTab === 2}">tab 3</li>
        <li v-bind:class="{active:currentTab === 3}">tab 4</li>
        <li v-bind:class="{active:currentTab === 4}">tab 5</li>
        <li v-bind:class="{active:currentTab === 5}">tab 6</li>
      </ol>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentTab: 0,
        icons: ['cardid','work','book','zan1','icon--','dianhua1']
      }
    }
  }

</script>


<style lang="scss" scoped>
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
          /*当前元素*/
          background: #fff;
          >.icon {
            fill: #000;
          }
        }
      }
    }
    >main {
      >ol>li {
        display: none;
        &.active {
          display: inline-block;
        }
      }
    }
  }

</style>
