<template>
  <n-config-provider :theme="darkTheme">
    <img src="./assets/meeting-bubbles.png" style="height: 30vw; max-height: 20vh;">

    <!-- Counter -->
    <div @click="cycleCounterStyle()"
      style="position: relative; height: 1.5em; font-size: 10vw;"
    >
      <Flip :value="costCounterValueInt" 
        v-if="counterStyle ==='flip'" 
        style="display: inline-block; margin: auto;"
      />
      <Roller :value="costCounterValueInt" 
        v-if="counterStyle ==='roll'"
        style="display: inline-block; margin: auto;"
      />
      <n-icon color="#2c7b5e" style="position: absolute; height: 100%; line-height: 1.9em;">
        <icon-currency-dollar/>
      </n-icon>
    </div>
    
    <!-- Counter Controls -->
    <n-space justify="center"
      style="margin: auto; margin-top: 4em; width: 40em; max-width: 96vw;"
    >
      <n-button type="primary" round :ghost="!!costCounterIterval"
        @click="!costCounterIterval ? startCostCounter() : stopCostCounter()"
      >
        <template #icon>
          <n-icon v-if="!costCounterIterval"><icon-play/></n-icon>
          <n-icon v-else><icon-pause/></n-icon>
        </template>
      </n-button>
      
      <n-button type="default" round @click="resetCostCounter()">
        <template #icon><n-icon><icon-reset/></n-icon></template>
      </n-button>
      
      <n-time-picker round v-model:value="_costCounterRuntime_timePicker" 
        :on-blur="() => costCounter.value = costsPerSecond * costCounter.runtime/1000"
        :actions="null"
        :disabled="costCounter.runtime > 0 || !!costCounterIterval"
      />
    </n-space>
    
    <!-- Cost List -->
    <draggable v-model="costsList"
      item-key="id"
      handle=".draggable-handle"
      animation="300"
      ghost-class="draggable-ghost"
      style="margin: auto; margin-top: 4em; width: 40em; max-width: 96vw;"
    >
      <template #item="{i, element}">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <n-input-group round >
            <n-input-number v-model:value="element.count" :min="0" :max="9999"
              placeholder="0"
              style="width: 8em; flex-shrink: 0; flex-grow: 0; margin-right: 3px; text-align: center; "
            >
              <template #prefix><n-icon><icon-person/></n-icon></template>
            </n-input-number>
            
            <n-input v-model:value="element.name" type="text" placeholder="Name" />
            
            <n-button type="default" text-color="#ffffffd1" round icon-placement="right" 
              @click="costEditorElement = element; showCostEditor = true"
              style="width: 6em; flex-shrink: 0; flex-grow: 0; margin-left: 2px !important; background-color: #ffffff1a;"
            >
              {{ Math.round(hourlyCostValue(element)) }}
              <template #icon>
                <div style="color: #ffffff61; font-size: 0.9em;">
                  <n-icon><icon-currency-dollar/></n-icon>
                  <span style="position: relative; left: -4px; bottom: 2px; font-size: 0.65em;">/</span>
                  <span style="position: relative; left: -5px; bottom: 1px; font-size: 0.6em; font-weight: bold; font-style: italic;">h</span>
                </div>
              </template>
            </n-button>
          </n-input-group>
          
          <n-button text style="margin-left: 8px;"
            @click="costsList.splice(i, 1)" 
          >
            <template #icon>
              <n-icon size='medium' class="dim">
                <icon-trash-can/>
              </n-icon>
            </template>
          </n-button>
        
          <n-icon size='large' class="draggable-handle dim" style="margin-left: 8px;">
            <icon-draggable/>
          </n-icon>
        </div>
      </template>
      <template #footer>
        <div style="display: flex; margin-top: 16px;">
          <n-button type="default" round dashed ghost style="width: 100%;"
            @click="addCost()" 
          >
            <template #icon><n-icon class="dim"><icon-add/></n-icon></template>
          </n-button>
          <div style="margin-left: 52px;"/>
        </div>
      </template>
    </draggable>
    
    <!-- Cost Value Editor -->
    <n-modal v-model:show="showCostEditor">
      <n-card size="medium" style="width: auto;" :title="costEditorElement.name || 'No Name'" :bordered="false" >
        <template #header-extra>
          {{ Math.round(hourlyCostValue(costEditorElement)) }}
          <div style="position: relative; bottom: -3px; color: #ffffff61; font-size: 1.2em;">
            <n-icon><icon-currency-dollar/></n-icon>
            <span style="position: relative; left: -5px; bottom: 2px; font-size: 0.65em;">/</span>
            <span style="position: relative; left: -6px; bottom: 1px; font-size: 0.6em; font-style: italic;">h</span>
          </div>
        </template>
        <n-space vertical>
          <n-input-group round>
            <n-input-group-label style="width: 20%; margin-right: 3px;">
              Cost
            </n-input-group-label>
            <n-select v-model:value="costEditorElement.unit"
              default-value="hourly"
              :options="costTimeUnits" 
              style="width: 30%; margin-right: 3px; text-align: center; "
            />
            <n-input-number v-model:value="costEditorElement.value"
              placeholder="Cost" 
              :min="0" :max="999999999"
              style="width: 50%; text-align: center;"
            >
              <template #suffix><n-icon><icon-currency-dollar/></n-icon></template>
            </n-input-number>
            
          </n-input-group>
          <n-input-group round v-if="['daily', 'monthly', 'yearly'].includes(costEditorElement.unit)" >
            <n-input-group-label style="width: 50%; margin-right: 3px;">
              Daily working hours
            </n-input-group-label>      
            <n-input-number v-model:value="costEditorElement.workingHours"
              placeholder="Hours" 
              :min="1" :max="24"
              style="width: 50%; text-align: center"
            >
              <template #suffix><n-icon><icon-time/></n-icon></template>
            </n-input-number>
          </n-input-group>
          <n-input-group round v-if="['monthly', 'yearly'].includes(costEditorElement.unit)" >
            <n-input-group-label style="width: 50%; margin-right: 3px;">
              Weekly working days
            </n-input-group-label>      
            <n-input-number v-model:value="costEditorElement.workingDays"
              placeholder="Days" 
              :min="1" :max="7"
              style="width: 50%; text-align: center"
            >
              <template #suffix><n-icon><icon-calendar/></n-icon></template>
            </n-input-number>
          </n-input-group>
          <n-input-group round v-if="['monthly', 'yearly'].includes(costEditorElement.unit)" >
            <n-input-group-label style="width: 50%; margin-right: 3px;">
              Off days
            </n-input-group-label>      
            <n-input-number v-model:value="costEditorElement.daysOff"
              placeholder="Days" 
              :min="0" :max="Math.floor(costEditorElement.workingDays * weeksPerTimeUnit(costEditorElement.unit))"
              style="width: 50%; text-align: center;"
            >
              <template #suffix><n-icon><icon-calendar-heat-map/></n-icon></template>
            </n-input-number>
          </n-input-group>
        </n-space>
        <!-- <template #footer> Footer </template> -->
      </n-card>
    </n-modal>
  </n-config-provider>
</template>

<script>
import AppStorage from "./libs/AppStorage"
const appStorage = AppStorage(localStorage, 'cash-creep')

import draggable from 'vuedraggable'

import { 
  NConfigProvider, darkTheme, 
  NDivider,
  NInputGroup, NInputGroupLabel, NDynamicInput, NInput, NInputNumber, NTimePicker,
  NSelect,
  NIcon, NButton, NCheckbox, 
  NSpace,
  NModal,
  NCard
} from 'naive-ui'

import { 
  Play as IconPlay, 
  Pause as IconPause, 
  Reset as IconReset, 
  CurrencyDollar as IconCurrencyDollar, 
  Person as IconPerson, 
  Add as IconAdd, 
  Draggable as IconDraggable,
  TrashCan as IconTrashCan,
  Diagram as IconDiagram,
  Time as IconTime,
  Calendar as IconCalendar,
  CalendarHeatMap as IconCalendarHeatMap
} from '@vicons/carbon'

import Flip from "./components/Flip"
import Roller from "./components/Roller"

  
export default {
  name: 'App',
  components: {
    NConfigProvider,
    NDivider,
    NInputGroup, NInputGroupLabel, NDynamicInput, NInput, NInputNumber, NTimePicker,
    NSelect,
    NIcon, 
    IconPlay, IconPause, IconReset, IconCurrencyDollar, IconPerson, IconAdd, IconDraggable, IconTrashCan, IconDiagram, IconTime, IconCalendar, IconCalendarHeatMap,
    NButton, NCheckbox,
    NSpace,
    NModal,
    NCard,
    draggable,
    Flip, Roller
  },
  data() {
    return {
      darkTheme,
      
      costsList: [],
      costCounter: {
        runtime: 0,
        value: 0,
      },
    
      costCounterIterval: null,
      costCounterTickDelay: 1000,
    
      showCostEditor: false,
      costEditorElement: null,
      costElementHover: null,
      
      counterStyle: 'flip',
      costTimeUnits: ['hourly',  'daily', 'monthly', 'yearly']
        .map(option => ({value: option, label: option}))
    }
  },
  computed: {
    costCounterValueInt() {
      return Math.round(this.costCounter.value)
    },
    costsPerSecond() {
      return this.costsList
        .filter(cost => cost.count && cost.value && cost.unit)
        .map(cost => this.hourlyCostValue(cost)/60/60 * cost.count)
        .reduce((a, b) => a + b, 0) // sum
    },
    // WORKAROUND for n-time-picker value for 00:00:00 is -3600000
    _costCounterRuntime_timePicker:{
      get() {
        return this.costCounter.runtime - 3600000
      },
      set(val) {
        this.costCounter.runtime = val + 3600000
      }
    }
  },
  watch: {
    costsList: {
      deep: true,
      handler(newValue) {
        appStorage.costsList = newValue
      }
    },
    costCounter: {
      deep: true,
      handler(newValue) {
        appStorage.costCounter = newValue
      }
    }
  },
  methods: {
    startCostCounter() {
      this.stopCostCounter()
      this.costCounterIterval = setInterval(this.costCounterTick, this.costCounterTickDelay)
      
    },
    stopCostCounter() {
      if(this.costCounterIterval) {
        clearInterval(this.costCounterIterval)
        this.costCounterIterval = null
      }  
    },
    resetCostCounter() {
      this.costCounter = {
        runtime: 0,
        value: 0
      }
    },
    costCounterTick() {
      this.costCounter.runtime += this.costCounterTickDelay
      this.costCounter.value += this.costsPerSecond * (this.costCounterTickDelay/1000)
    },
    addCost(cost) {
      return this.costsList.push(Object.assign({
        id: window.performance.now() * Math.pow(10,10), // dirty id generation
        count: 0,
        value: 0,
        unit: 'hourly',
        workingHours: 8,
        workingDays: 5,
        daysOff: 24
      }, cost))
    },
    hourlyCostValue(cost) {
      const weeksOff = cost.daysOff / cost.workingDays
      switch (cost.unit) {
        case 'hourly':  return cost.value;
        case 'daily':   return cost.value / cost.workingHours
        case 'monthly': return cost.value / cost.workingHours / cost.workingDays / (this.weeksPerTimeUnit(cost.unit) - weeksOff)
        case 'yearly':  return cost.value / cost.workingHours / cost.workingDays / (this.weeksPerTimeUnit(cost.unit) - weeksOff)
        default:
          throw Error('Unexpected unit: ' + cost.unit)
      }
    },
    weeksPerTimeUnit(unit){
      switch (unit) {
        case 'monthly': return 365/12/7
        case 'yearly':  return 365/7
        default:
          throw Error('Unexpected unit: ' + unit)
      }
    },
    cycleCounterStyle() {
      switch (this.counterStyle) {
        case 'flip': this.counterStyle = 'roll'; break
        case 'roll': this.counterStyle = 'flip'; break
        default: this.counterStyle = 'flip'; break
      }
    }
  },
  created() {
    this.costCounter = appStorage.costCounter || this.costCounter
    this.costsList = appStorage.costsList || this.costsList
    if (this.costsList.length === 0) {
      this.addCost({
          count: 42,
          value: 99,
          unit: 'hourly',
          name: 'Whimsical Unicorn'
      })
    }
  },
  beforeDestroy() {
    this.stopCostCounter()
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
  margin-top: 2em;
}

div.n-input-number[round] > div.n-input,
div.n-time-picker[round] > div.n-input,
div.n-input-group[round] > div.n-input,
div.n-input-group[round] > div.n-input-group-label,
div.n-input-group[round] > div.n-input-number > div.n-input,
div.n-input-group[round] > div.n-select > div.n-base-selection  {
  border-radius: calc(var(--height) / 2);
}
div.n-input-group > button.n-button > div.n-button__border {
  display: none;
}

.n-icon.dim {
  opacity: 0.5;
  transition: opacity 0.3s;
}
button.n-button:hover > .n-button__icon .n-icon.dim {
  opacity: inherit;
}

.draggable-handle {
  cursor: grab;
}
.draggable-handle:active {
  cursor: grabbing;
}

.draggable-ghost {
  opacity: 0;
}
</style>
