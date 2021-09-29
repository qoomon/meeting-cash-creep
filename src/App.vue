<template>
  <n-config-provider :theme="darkTheme">
    <img alt="Vue logo" src="./assets/logo.png">

    <div @click="cycleCounterStyle()"
    style="height: 1.5em; font-size: 10vw;"
    >
      <Flip v-if="counterStyle ==='flip'"
      :value="totalCostsInteger" style="margin: auto; "
      />
      <Roller v-if="counterStyle ==='roll'"
      :value="totalCostsInteger" style="margin: auto;"
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
    #="{ value }"
    :on-create="addCostEntry"
    :min="1"
    style="margin: auto; margin-top: 2em; width: 40em; max-width: 96vw;"
    >
      <div style="width: 100%; display: flex; align-items: center;">
        <n-checkbox v-model:checked="value.active" style="margin-right: 12px;" />
        <n-input v-model:value="value.description" type="text"
        placeholder="Description" 
        style="margin-right: 1em;"
        />
        <n-input-number v-model:value="value.value"
        placeholder="Cost" 
        :show-button="false"
        style="width: 12em; margin-right: 1em;"
        >
          <template #suffix><n-icon><currency-dollar/></n-icon></template>
        </n-input-number>
        <n-select v-model:value="value.interval"
        default-value="hourly"
        :options="costIntervalOptions" 
        style="width: 11em;"
        />
      </div>
    </n-dynamic-input>
    
  </n-config-provider>
</template>

<script>
import { 
  NConfigProvider, darkTheme, 
  NDynamicInput, NInput, NInputNumber, 
  NSelect,
  NIcon, NButton, NCheckbox, 
  NSpace
} from 'naive-ui'
import { Play, Pause, Reset, CurrencyDollar} from '@vicons/carbon'

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
    NDynamicInput, NInput, NInputNumber,
    NSelect,
    NIcon, Play, Pause, Reset, CurrencyDollar,
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
          interval: 'hourly',
          description: 'Coding Dude'
        }
      ],
      counterStyle: 'flip',
      costIntervalOptions: ['hourly',  'daily', 'mothly', 'yearly']
        .map(option => ({value: option, label: option}))
    }
  },
  computed: {
    totalCostsInteger() {
      return Math.ceil(this.totalCosts)
    },
    costsPerSecond() {
      return this.costsArray
        .filter(cost => cost.active && cost.value && cost.interval )
        .map(cost => {
          console.log(cost.value, cost.interval, cost.value / intervalInWorkingSeconds(cost.interval));
          return cost.value / intervalInWorkingSeconds(cost.interval)
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
      return {
        active: false,
        value: 10,
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
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
