<template>
  <div id="app">
    <Topbar class="topbar" />
    <main>
      <Editor class="editor" />
      <Preview class="preview" />
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    name: 'App',
    components: {
      Topbar,
      Editor,
      Preview
    }
  }

</script>

<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .topbar {
    z-index: 1;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  }

  main {
    display: flex;
    flex: 1;
    background: #E1E1E1;
    >.editor {
      width: 40em;
      margin: 16px 8px 16px 16px;
      background: #fff;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 5px;
      overflow: hidden;
    }
    >.preview {
      flex: 1;
      margin: 16px 8px 16px 16px;
      background: #fff;
      overflow: hidden;
    }
  }

</style>
