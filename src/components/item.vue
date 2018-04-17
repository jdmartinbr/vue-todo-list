<template>
  <div class="test">
    <div class="item-list d-flex justify-content-between" v-bind:style="{ borderLeftColor: todo.color }">
        <div class="d-flex align-items-center" v-on:click="doneTodo">
        <div class="d-flex">
          <div class="d-flex align-items-center">
            <label class="containerCb">
              <input type="checkbox" v-model="todo.done">
              <span class="checkmarkCb"></span>
            </label>
          </div>
          <h3 class="d-flex align-items-center mb-0" v-bind:class="{ done: todo.done }">Tarea {{index+1}} - {{todo.title}}</h3>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div>
          <i class="delete-icon material-icons" v-on:click="removeTodo">clear</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item',
    data() {
      return {
      }
    },
    props: ['todo', 'index'],
    computed : {
      key: function () {
        return this.index
      },
      color: function () {
        return this.$store.state.color
      }
    },
    methods:{
      removeTodo(){
        this.$store.commit('removeTodo',this.key)
      },
      doneTodo(){
        this.$store.commit('doneTodo',this.key)
      },
    }
  }
</script>

<style scoped>

  .delete-icon {
    font-size: 35px;
    margin-left: auto;
    cursor: pointer;
    opacity: 0;
    transition: all 0.2s;
  }

  .done {
    color: rgb(204, 204, 204);
    text-decoration: line-through;
  }

  .test:hover .delete-icon {
    color: red;
    opacity: 1;
  }

  .item-checkbox{
    height: 1em;
    width: 1em;
    margin-right: 1em;
  }

  /* Customize the label (the container) */
  .containerCb {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 22px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .containerCb input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom checkbox */
  .checkmarkCb {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .containerCb:hover input ~ .checkmarkCb {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .containerCb input:checked ~ .checkmarkCb {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmarkCb:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .containerCb input:checked ~ .checkmarkCb:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .containerCb .checkmarkCb:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
