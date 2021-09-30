<template>
  <n-config-provider :theme="darkTheme">
    <img alt="Vue logo" src="./assets/logo.png">

    <div @click="cycleCounterStyle()"
    style="position: relative; height: 1.5em; font-size: 10vw;"
    >
      <Flip v-if="counterStyle ==='flip'"
      :value="totalCosts" 
      style="display: inline-block; margin: auto;"
      />
      <Roller v-if="counterStyle ==='roll'"
      :value="totalCosts" 
      style="display: inline-block; margin: auto;"
      />
      <n-icon color="#528679" style="position: absolute; height: 100%; line-height: 1.9em;">
        <currency-dollar/>
      </n-icon>
    </div>
    
    
    <n-space justify="center"
    style="margin: auto; margin-top: 2em; width: 40em; max-width: 96vw;"
    >
      <n-button v-if="counterIterval"
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
     <n-time-picker v-model:value="counterRuntime"
     round :disabled="!!counterIterval" :actions="null"
     />
    </n-space>
    
    
    <n-dynamic-input
    v-model:value="costsArray"
    #="{ value }"
    :on-create="addCostEntry"
    :min="1"
    style="margin: auto; margin-top: 3em; width: 40em; max-width: 96vw;"
    > 
      <div style="width: 100%; display: flex; align-items: center;">
        <n-input-number v-model:value="value.count"
        round 
        placeholder="0"
        :min="0"
        :max="9999"
        style="width: 24em; margin-right: 1em;"
        >
          <template #prefix><n-icon><person/></n-icon></template>
        </n-input-number>
        <n-input v-model:value="value.description" type="text"
        placeholder="Description" 
        style="margin-right: 1em;"
        />
        <n-input-group round >
          <n-input-number v-model:value="value.value"
          placeholder="Cost" 
          :min="0"
          :max="999999999"
          :show-button="false"
          style="width: 8em; margin-right: 0.15em;"
          >
            <template #suffix><n-icon><currency-dollar/></n-icon></template>
          </n-input-number>
          <n-select v-model:value="value.interval"
          default-value="hourly"
          :options="costIntervalOptions" 
          style="width: 7em;"
          />
        </n-input-group>
      </div>
    </n-dynamic-input>
    
  </n-config-provider>
</template>

<script>
import { 
  NConfigProvider, darkTheme, 
  NDivider,
  NInputGroup, NDynamicInput, NInput, NInputNumber, NTimePicker,
  NSelect,
  NIcon, NButton, NCheckbox, 
  NSpace
} from 'naive-ui'
import { Play, Pause, Reset, CurrencyDollar, Person} from '@vicons/carbon'

import Flip from "./components/Flip";
import Roller from "./components/Roller";

function intervalInWorkingSeconds(interval) {
  const workingHours = 8
  const wokingWeekDays = 5
  switch (interval) {
    case 'hourly':  return 60 * 60;
    case 'daily':   return 60 * 60 * 24 * (workingHours/24);
    case 'monthly': return 60 * 60 * 24 * (workingHours/24) * (wokingWeekDays/7) * 365/12;
    case 'yearly':  return 60 * 60 * 24 * (workingHours/24) * (wokingWeekDays/7) * 356;
    default:
      throw Error('Unexpected interval: ' + interval)
  }
}
  
export default {
  name: 'App',
  components: {
    NConfigProvider,
    NDivider,
    NInputGroup, NDynamicInput, NInput, NInputNumber, NTimePicker,
    NSelect,
    NIcon, Play, Pause, Reset, CurrencyDollar, Person,
    NButton, NCheckbox,
    NSpace,
    Flip, Roller
  },
  data() {
    return {
      tickDelay: 1000,
      darkTheme,
      counterIterval: null,
      counterStart: null,
      
      counterRuntime: 0 - 3600000, // for n-time-picker 00:00:00 is -3600000
      costsArray: [
        {
          count: 42,
          value: 99,
          interval: 'hourly',
          description: 'Coding Dude'
        }
      ],
      counterStyle: 'flip',
      costIntervalOptions: ['hourly',  'daily', 'monthly', 'yearly']
        .map(option => ({value: option, label: option}))
    }
  },
  computed: {
    totalCosts() {
      const runtimeSeconds = (this.counterRuntime + 3600000) / 1000
      return Math.ceil(runtimeSeconds * this.costsPerSecond)
    },
    costsPerSecond() {
      return this.costsArray
        .filter(cost => cost.count && cost.value && cost.interval )
        .map(cost => {
          return cost.value / intervalInWorkingSeconds(cost.interval) * cost.count
        })
        .reduce((a, b) => a + b, 0) // sum
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
      this.counterIterval = setInterval(this.costTick, this.tickDelay)
      
    },
    stopCounter() {
      if(this.counterIterval) {
        clearInterval(this.counterIterval)
        this.counterIterval = null
      }  
    },
    resetCounter() {
      this.counterRuntime = 0 - 3600000
    },
    costTick() {
      this.counterRuntime += this.tickDelay
    },
    addCostEntry() {
      return {
        count: 0,
        value: 42,
        interval: 'hourly'
      }
    },
    cycleCounterStyle() {
      switch (this.counterStyle) {
        case 'flip': this.counterStyle = 'roll'; break
        case 'roll': this.counterStyle = 'flip'; break
        default: this.counterStyle = 'flip'; break
      }
    },
    
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
  color: #c3c3c6;
  margin-top: 60px;
  
}
div.n-input-number[round] > div.n-input,
div.n-time-picker[round] > div.n-input,
div.n-input-group[round] > div.n-input-number > div.n-input,
div.n-input-group[round] > div.n-select > div.n-base-selection  {
  border-radius: calc(var(--height) / 2);
}

</style>
