<template>
  <n-config-provider :theme="darkTheme">
    <img alt="Vue logo" src="./assets/logo.png">

    <Flip :value="totalCosts" style="margin: auto; font-size: 10vw;"/>
    <!-- <Roller :value="counter" style="margin: auto; font-size: 10vw;"/> -->
    
    <br>

    <n-dynamic-input
    v-model:value="costsArray"
    :on-create="addCost"
    #="{ value }"
    style="margin: auto; width: 40em; max-width: 96vw;"
    >
      <div style="width: 100%; display: flex; align-items: center;">
        <n-checkbox v-model:checked="value.active" style="margin-right: 12px;" />
        <n-input-number
          v-model:value="value.value"
          style="margin-right: 12px; width: 160px;"
        />
        <n-input v-model:value="value.description" type="text" />
      </div>
    </n-dynamic-input>
  </n-config-provider>
</template>

<script>
import { 
  NConfigProvider, darkTheme, 
  NDynamicInput, NInput, NInputNumber, NCheckbox, NSpace
} from 'naive-ui'
import Flip from "./components/Flip";
import Roller from "./components/Roller";
  
export default {
  name: 'App',
  components: {
    NConfigProvider, NDynamicInput, NInput, NInputNumber, NCheckbox, NSpace,
    Flip,
    Roller
  },
  data() {
    return {
      darkTheme,
      totalCosts: 0,
      totalCostsUpdateIterval: null,
      costsArray: [
        {
          active: true,
          value: 99,
          description: 'Coding Dude'
        }
      ]
    }
  },
  computed: {
    costsPerSecond(){
      return this.costsArray
        .filter(cost => cost.active && cost.value)
        .map(cost => cost.value)
        .reduce((a, b) => a + b, 0)
    }
  },
  methods: {
    costTick() {
      this.totalCosts += this.costsPerSecond
    },
    addCost () {
        return {}
      }
  },
  created() {
    this.totalCostsUpdateIterval = setInterval(this.costTick, 1000)
  },
  beforeDestroy() {
    clearInterval(this.totalCostsUpdateIterval)
  }
}
</script>

<style>
body {
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
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
