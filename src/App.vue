<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <p>
    <Flip :value="counter" 
      style="margin: auto; font-size: 10vw;"/>
    <br>
    <Roller :value="counter"
      style="margin: auto; font-size: 10vw;"/>
  </p>
</template>

<script>
import Flip from "./components/Flip";
import Roller from "./components/Roller";

export default {
  name: 'App',
  components: {
    Flip,
    Roller
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increase() {
      this.counter += 1013
    }
  },
  mounted() {
    setInterval(this.increase,1000)
  }
}
</script>

<style>
body {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  background-color: #40414a;
  overflow-y: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
