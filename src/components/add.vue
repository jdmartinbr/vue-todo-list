<template>
  <section>
    <div class="input-wrapper">
      <div class="container">
        <div class="form-group d-flex">
          <div class="form-group d-flex align-items-center">
              <label v-for="(color, index) in $store.state.colors" class="containerR">
                <input type="radio" name="radio" v-bind:value="color" v-model="picked" checked>
                <span class="checkmark"  v-bind:style="{ backgroundColor: color}"></span>
              </label>
          </div>
          <div class="input-content w-100">
            <div class="input-group mb-2">
              <input v-on:keyup.enter="addTodoAction" v-model="message" id="input-task" type="text" class="form-control" placeholder="What do I have to do?" aria-label="" aria-describedby="basic-addon1">
              <div class="input-group-append">
                <button id="addTask" class="btn btn-outline-secondary" type="button" v-on:click="addTodoAction">Add Task</button>
              </div>
            </div>
          </div>

        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <h3 class="text-color">Tasks status: {{dones.length}}/{{$store.state.todos.length}}</h3>
          </div>
          <div class="d-flex align-items-center justify-content-end">
            <label class="switch">
              <input type="checkbox" v-model="onlyDone">
              <span class="slider round"></span>
            </label>
            <input class="btn btn-outline-secondary ml-3" type="button" value="Delete done" v-on:click="deleteAllCompleted">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'add',
    data() {
      return {
        picked: "",
      }
    },
    props: [],
    computed: {
      dones: function () {
        return this.$store.state.todos.filter(todo => todo.done);
      },
      message: {
        get () {
          return this.$store.state.message
        },
        set (value) {
          this.$store.commit('updateMessage', value)
        }
      },
      onlyDone: {
        get () {
          return this.$store.state.onlyDone
        },
        set (value) {
          this.$store.commit('updateDone')
        }
      },
      // color: {
      //   get(id) {
      //     return this.$store.state.color
      //   }
      // }
    },
    methods:{
      addTodo(){
        this.$store.commit('addTodo','nuevo todo desde mutation')
      },
      addTodoAction(){
        this.$store.dispatch('addTodo', { title: this.$store.state.message, color: this.picked } )
      },
      deleteAllCompleted(){
        this.$store.dispatch('deleteAllCompleted')
      },
    }
  }
</script>

<style>
  .text-color{
    color: #6c757d;
  }
  .switch {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    width: 60px;
    height: 34px;
  }

  .switch input {display:none;}

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  /* Customize the label (the container) */
  .containerR {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .containerR input {
    position: absolute;
    opacity: 0;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .containerR:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .containerR input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .containerR input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .containerR .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
</style>
