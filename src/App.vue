<template>
  <n-config-provider :theme="darkTheme">
    <img alt="Vue logo" src="./assets/logo.png">

    <div @click="cycleCounterStyle()"
    style="height: 1.5em; font-size: 10vw;"
    >
      <Flip v-if="counterStyle ==='flip'"
      :value="totalCosts" style="margin: auto; "
      />
      <Roller v-if="counterStyle ==='roll'"
      :value="totalCosts" style="margin: auto;"
      />
    </div>
    
    <n-space justify="center"
    style="margin: auto; margin-top: 2em; width: 40em; max-width: 96vw;"
    >
      <n-button v-if="totalCostsUpdateIterval"
      type="primary" round ghost
      @click="stopCounter()"
      >
        <template #icon><n-icon><pause/></n-icon></template>
      </n-button>
      <n-button v-else
      type="primary" round
      @click="startCounter()"
      >
        <template #icon><n-icon><play/></n-icon></template>
      </n-button>
      
      <n-button round
      @click="resetCounter()"
      >
        <template #icon><n-icon><reset/></n-icon></template>
     </n-button>
    <!-- <n-button>Set</n-button> -->
    </n-space>
    
    <n-dynamic-input
    v-model:value="costsArray"
    :on-create="addCostEntry"
    #="{ value }"
    style="margin: auto; margin-top: 2em; width: 40em; max-width: 96vw;"
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
  NDynamicInput, NInput, NInputNumber, 
  NIcon, NButton, NCheckbox, 
  NSpace
} from 'naive-ui'
import { Play, Pause, Reset} from '@vicons/carbon'

import Flip from "./components/Flip";
import Roller from "./components/Roller";
  
export default {
  name: 'App',
  components: {
    NConfigProvider, 
    NDynamicInput, NInput, NInputNumber, 
    NIcon, Play, Pause, Reset,
    NButton, NCheckbox, 
    NSpace,
    Flip, Roller
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
      ],
      counterStyle: 'flip'
    }
  },
  computed: {
    costsPerSecond() {
      return this.costsArray
        .filter(cost => cost.active && cost.value)
        .map(cost => cost.value)
        .reduce((a, b) => a + b, 0)
    }
  },
  watch: {
    costsArray: {
      deep: true,
      handler(newValue) {
        localStorage.costsArray = JSON.stringify(newValue);
      }
    }
  },
  methods: {
    startCounter() {
      this.stopCounter()
      this.totalCostsUpdateIterval = setInterval(this.costTick, 1000)
    },
    stopCounter() {
      if(this.totalCostsUpdateIterval) {
        clearInterval(this.totalCostsUpdateIterval)
        this.totalCostsUpdateIterval = null
      }  
    },
    resetCounter() {
      this.totalCosts = 0  
    },
    costTick() {
      this.totalCosts += this.costsPerSecond
    },
    addCostEntry() {
      return {}
    },
    cycleCounterStyle() {
      switch (this.counterStyle) {
        case 'flip': this.counterStyle = 'roll'; break
        case 'roll': this.counterStyle = 'flip'; break
        default: this.counterStyle = 'flip'; break
      }
      console.log(this.counterStyle);
    }
  },
  created() {
    if (localStorage.costsArray) {
      this.costsArray = JSON.parse(localStorage.costsArray);
    }
  },
  beforeDestroy() {
    this.stopCounter()
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
