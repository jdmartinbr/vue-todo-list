<template>
  <section>
    <div class="main-wrapper">
      <div class="container">
        <div class="title-content">
          <div id="list-task">
            <Item v-for="(todo, index) in $store.getters.getTodos" :todo="todo" :index="index"></Item>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Item from './item';

  export default {
    name: 'list',
    components: {
      Item,
    },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .title-content {
    padding: 2em 0em;
    color: #878787;
  }
</style>
