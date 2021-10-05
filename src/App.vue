<template>
  <n-config-provider :theme="darkTheme">
    <img src="./assets/meeting-bubbles.png" style="height: 30vw; max-height: 20vh;">

    <!-- Counter -->
    <div @click="cycleCounterStyle()"
      style="position: relative; height: 1.5em; font-size: 10vw;"
    >
      <Flip :value="totalCostsInt" 
        v-if="counterStyle ==='flip'" 
        style="display: inline-block; margin: auto;"
      />
      <Roller :value="totalCostsInt" 
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
      
      <!-- for n-time-picker 00:00:00 is -3600000 -->
      <n-time-picker round v-model:value="counterRuntime" 
        :on-blur="() => totalCosts = costsPerSecond * (counterRuntime + 3600000)/1000"
        :actions="null"
        :disabled="counterRuntime > 0 - 3600000 || !!costCounterIterval"
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
              style="text-align: center; width: 8em; flex-shrink: 0; flex-grow: 0; margin-right: 3px;"
            >
              <template #prefix><n-icon><icon-person/></n-icon></template>
            </n-input-number>
            
            <n-input v-model:value="element.name" type="text" placeholder="Name" />
            
            <n-button type="default" text-color="#ffffffd1" round icon-placement="right" 
              @click="costEditorElement = element; showCostEditor = true"
              style="width: 6em; flex-shrink: 0; flex-grow: 0; margin-left: 2px !important; background-color: #ffffff1a"
            >
              {{ hourlyCostValue(element).toFixed(0) }}
              <template #icon>
                <div style="color: #ffffff61; font-size: 0.9em;">
                  <n-icon><icon-currency-dollar/></n-icon>
                  <span style="position: relative; left: -4px; bottom: 2px; font-size: 0.65em; ">/</span>
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
          <n-icon size='medium' style="margin-left: 8px;"/>
          <n-icon size='large' style="margin-left: 8px;"/>
        </div>
      </template>
    </draggable>
    
    <!-- Cost Value Editor -->
    <n-modal v-model:show="showCostEditor">
      <n-card size="medium" style="width: auto;" :title="costEditorElement.name || 'No Name'" :bordered="false" >
        <template #header-extra>Settings</template>
        <n-space vertical>
          <n-input-group round>
            <n-input-group-label style="width: 8em; margin-right: 3px; text-align: center;">
              Cost
            </n-input-group-label>    
            <n-input-number v-model:value="costEditorElement.value"
              placeholder="Cost" 
              :min="0" :max="999999999"
              :show-button="false"
              style="text-align: center; width: 8em; margin-right: 3px;"
            >
              <template #suffix><n-icon><icon-currency-dollar/></n-icon></template>
            </n-input-number>
            <n-select v-model:value="costEditorElement.unit"
              default-value="hourly"
              :options="costTimeUnits" 
              style="width: 7em;"
            />
          </n-input-group>
          <n-input-group round v-if="costEditorElement.unit !== 'hourly'" >
            <n-input-group-label style="width: 8em; margin-right: 3px;">
              {{ costEditorElement.unit === 'daily' ? 'Daily' : 'Weekly'}} hours
            </n-input-group-label>      
            <n-input-number v-model:value="costEditorElement.workingHours"
              placeholder="Hours" 
              :min="1" :max="168"
              :show-button="false"
              style="text-align: center; width: 8em;"
            >
              <template #suffix><n-icon><icon-diagram/></n-icon></template>
            </n-input-number>
          </n-input-group>
        </n-space>
        <!-- <template #footer> Footer </template> -->
      </n-card>
    </n-modal>
  </n-config-provider>
</template>

<script>
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
  Diagram as IconDiagram
} from '@vicons/carbon'

import Flip from "./components/Flip";
import Roller from "./components/Roller";
  
export default {
  name: 'App',
  components: {
    NConfigProvider,
    NDivider,
    NInputGroup, NInputGroupLabel, NDynamicInput, NInput, NInputNumber, NTimePicker,
    NSelect,
    NIcon, 
    IconPlay, IconPause, IconReset, IconCurrencyDollar, IconPerson, IconAdd, IconDraggable, IconTrashCan, IconDiagram,
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
      
      costCounterIterval: null,
      costCounterTickDelay: 1000,
      counterRuntime: 0 - 3600000, // for n-time-picker 00:00:00 is -3600000
      
      costsList: [],
      showCostEditor: false,
      costEditorElement: null,
      costElementHover: null,
      
      totalCosts: 0,
      
      counterStyle: 'flip',
      costTimeUnits: ['hourly',  'daily', 'monthly', 'yearly']
        .map(option => ({value: option, label: option}))
    }
  },
  computed: {
    totalCostsInt() {
      return Math.round(this.totalCosts)
    },
    costsPerSecond() {
      return this.costsList
        .filter(cost => cost.count && cost.value && cost.unit)
        .map(cost => this.hourlyCostValue(cost)/60/60 * cost.count)
        .reduce((a, b) => a + b, 0) // sum
    }
  },
  watch: {
    costsList: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("cash-creep/costsList", JSON.stringify(newValue));
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
      this.counterRuntime = 0 - 3600000, // for n-time-picker 00:00:00 is -3600000
      this.totalCosts = 0
    },
    costCounterTick() {
      this.counterRuntime += this.costCounterTickDelay
      this.totalCosts += this.costsPerSecond * (this.costCounterTickDelay/1000)
    },
    addCost(cost) {
      return this.costsList.push(Object.assign({
        id: window.performance.now() * Math.pow(10,10), // dirty id generation
        count: 0,
        value: 0,
        unit: 'hourly',
        workingHours: 8
      }, cost))
    },
    hourlyCostValue(cost) {
      const weeksPerMonth = 365/12/7
      const weeksPerYear = 365/7
      switch (cost.unit) {
        case 'hourly':  return cost.value;
        case 'daily':   return cost.value / cost.workingHours
        case 'monthly': return cost.value / (cost.workingHours * weeksPerMonth)
        case 'yearly':  return  cost.value / (cost.workingHours * weeksPerYear)
        default:
          throw Error('Unexpected unit: ' + cost.unit)
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
    if (localStorage.getItem("cash-creep/costsList")) {
      this.costsList = JSON.parse(localStorage.getItem("cash-creep/costsList"));
    } 
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
