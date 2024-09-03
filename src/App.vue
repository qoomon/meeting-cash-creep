<template>
  <n-config-provider :theme="darkTheme">
    <div id="header">Cash Creep</div>

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
      <n-icon color="#2f7d60" style="position: absolute; height: 100%; line-height: 1.9em;">
        <icon-currency-dollar/>
      </n-icon>
    </div>

    <!-- Counter Controls -->
    <n-space justify="center" size="small"
      style="margin: 4em auto auto; max-width: 40em;"
    >

      <n-button type="primary" round color="#2f7d60"
                :ghost="!!costCounterInterval"
                @click="!costCounterInterval ? startCostCounter() : stopCostCounter()"
                style=""
      >
        <template #icon>
          <n-icon>
            <icon-play v-if="!costCounterInterval"/>
            <icon-pause v-else/>
          </n-icon>
        </template>
      </n-button>

      <n-time-picker v-model:value="_costCounter_runtime"
                     :on-blur="() => costCounter.value = costPerHourTotal/60/60 * costCounter.runtime/1000"
                     :actions="null"
                     :disabled="!!costCounterInterval"
                     :default-value="0"
                     clearable
      />
    </n-space>

    <!-- Cost List -->
    <draggable v-model="costsList"
      item-key="id"
      handle=".draggable-handle"
      animation="300"
      ghost-class="draggable-ghost"
      style="margin: 4em auto auto; max-width: 40em;"
    >
      <template #item="{element, index}">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <n-input-group>
            <n-input-number v-model:value="element.count" :min="0" :max="9999"
              placeholder="0"
              style="width: 8em; flex-shrink: 0; flex-grow: 0; margin-right: 3px; text-align: center;"
            >
              <template #prefix><n-icon size="large"><icon-person/></n-icon></template>
            </n-input-number>

            <n-input v-model:value="element.name" type="text" placeholder="Name" />

            <n-button type="default" text-color="#ffffffd1" icon-placement="right"
              @click="costEditorElement = element; showCostEditor = true"
              style="width: 6em; flex-shrink: 0; flex-grow: 0; margin-left: 2px !important;"
            >
              {{ Math.round(costPerHour(element)) }}
              <template #icon>
                <div style="color: #ffffff61; font-size: 0.9em;">
                  <n-icon size="large"><icon-currency-dollar/></n-icon>
                  <span style="position: relative; left: -0.4em; bottom: 0; font-size: 0.6em; font-weight: bold; font-style: italic;">h</span>
                </div>
              </template>
            </n-button>
          </n-input-group>

          <n-button text style="margin-left: 8px;"
            @click="costsList.splice(index, 1)"
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
          {{ Math.round(costPerHour(costEditorElement)) }}
          <div style="position: relative; bottom: -3px; color: #ffffff61; font-size: 1.2em;">
            <n-icon size="large"><icon-currency-dollar/></n-icon>
            <span style="position: relative; left: -0.4em; bottom: 0; font-size: 0.6em; font-weight: 400; font-style: italic;">h</span>
          </div>
        </template>
        <n-space vertical>
          <n-input-group round>
            <n-select v-model:value="costEditorElement.interval"
              default-value="hourly"
              :options="costIntervals.map(interval => ({value: interval, label: `${interval.capitalize()} Costs`}))"
              style="width: 50%; margin-right: 3px;"
            />
            <n-input-number v-model:value="costEditorElement.value"
              placeholder="Cost"
              :min="0" :max="999999999"
              style="width: 50%; text-align: center;"
            >
              <template #prefix><n-icon size="large"><icon-currency-dollar/></n-icon></template>
            </n-input-number>

          </n-input-group>
          <n-input-group round v-if="['daily', 'monthly', 'yearly'].includes(costEditorElement.interval)" >
            <n-input-group-label style="width: 50%; margin-right: 3px;">
              {{ costEditorElement.interval === 'daily' ? 'Daily' : 'Weekly' }} Working Hours
            </n-input-group-label>
            <n-input-number v-model:value="costEditorElement.workingHours"
              placeholder="Hours"
              :min="1" :max="costEditorElement.interval === 'daily' ? 24 : 24 * 7"
              style="width: 50%; text-align: center"
            >
              <template #prefix><n-icon size="large"><icon-time/></n-icon></template>
            </n-input-number>
          </n-input-group>
          <n-input-group round v-if="['monthly', 'yearly'].includes(costEditorElement.interval)" >
            <n-input-group-label style="width: 50%; margin-right: 3px;">
              Weekly Working Days
            </n-input-group-label>
            <n-input-number v-model:value="costEditorElement.workingDays"
              placeholder="Days"
              :min="1" :max="7"
              style="width: 50%; text-align: center"
            >
              <template #prefix><n-icon size="large"><icon-calendar/></n-icon></template>
            </n-input-number>
          </n-input-group>
          <n-input-group round v-if="['monthly', 'yearly'].includes(costEditorElement.interval)" >
            <n-input-group-label style="width: 50%; margin-right: 3px;">
              {{ costEditorElement.interval.capitalize() }} Off days
            </n-input-group-label>
            <n-input-number v-model:value="costEditorElement.daysOff"
              placeholder="Days"
              :min="0" :max="Math.floor(costEditorElement.workingDays * weeksPerInterval(costEditorElement.interval))"
              style="width: 50%; text-align: center;"
            >
              <template #prefix><n-icon size="large"><icon-calendar-heat-map/></n-icon></template>
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
  NIcon,
  NButton, NCheckbox, NTag,
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

String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1)
}

export default {
  name: 'App',
  components: {
    NConfigProvider,
    NDivider,
    NInputGroup, NInputGroupLabel, NDynamicInput, NInput, NInputNumber, NTimePicker,
    NSelect,
    NIcon,
    IconPlay, IconPause, IconReset, IconCurrencyDollar, IconPerson, IconAdd, IconDraggable, IconTrashCan, IconDiagram, IconTime, IconCalendar, IconCalendarHeatMap,
    NButton, NCheckbox, NTag,
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

      costCounterInterval: null,
      costCounterTickDelay: 1000,

      showCostEditor: false,
      costEditorElement: null,
      costElementHover: null,

      counterStyle: 'flip',
      costIntervals: ['yearly', 'monthly', 'daily', 'hourly']
    }
  },
  computed: {
    costPerHourTotal() {
      return this.costsList
        .filter(cost => cost.count && cost.value && cost.interval)
        .map(cost => this.costPerHour(cost) * cost.count)
        .reduce((a, b) => a + b, 0) // sum
    },
    costCounterValueInt() {
      return Math.round(this.costCounter.value)
    },
    // WORKAROUND for n-time-picker value for 00:00:00 is -3600000
    _costCounter_runtime:{
      get() {
        return this.costCounter.runtime - 3600000
      },
      set(val) {
        this.costCounter.runtime = (val || -3600000) + 3600000
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
      this.costCounterInterval = setInterval(this.costCounterTick, this.costCounterTickDelay)
    },
    stopCostCounter() {
      if(this.costCounterInterval) {
        clearInterval(this.costCounterInterval)
        this.costCounterInterval = null
      }
    },
    costCounterTick() {
      this.costCounter.runtime += this.costCounterTickDelay
      this.costCounter.value += this.costPerHourTotal/60/60 * (this.costCounterTickDelay/1000)
    },
    addCost(cost) {
      return this.costsList.push(Object.assign({
        id: window.performance.now() * Math.pow(10,10), // dirty id generation
        count: 0,
        value: 0,
        interval: 'hourly',
        workingHours: 0,
        workingDays: 0,
        daysOff: 0
      }, cost))
    },
    costPerHour(cost) {
      switch (cost.interval) {
        case 'hourly':
          return cost.value
        case 'daily': {
          return cost.workingHours > 0
              ? cost.value / cost.workingHours : 0
        }
        case 'yearly':
        case 'monthly': {
          const weeksOff = cost.daysOff / cost.workingDays
          let workingWeeks = this.weeksPerInterval(cost.interval) - weeksOff
          return workingWeeks > 0 && cost.workingHours > 0
              ? cost.value / workingWeeks / cost.workingHours : 0
        }
      }
      throw Error('Unexpected interval: ' + cost.interval)
    },
    weeksPerInterval(interval){
      switch (interval) {
        case 'yearly':  return 365/7
        case 'monthly': return 365/12/7
        case 'daily': return 1/7
        case 'hourly': return 1/7/24
        default:
          throw Error('Unexpected interval: ' + interval)
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
        name: 'Whimsical Unicorn',
        value: 99000,
        interval: 'yearly',
        workingHours: 40,
        workingDays: 5,
        daysOff: 24,
        count: 42
      })
    }
  },
  beforeDestroy() {
    this.stopCostCounter()
  }
}
</script>

<style>
:root {
  color-scheme: dark;
  background-color: #181a1b;
  color: whitesmoke;
}

body {
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
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

#header {
  height: 30vw;
  max-height: 20vh;
  background-image: url('./assets/meeting-bubbles.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: min(5vw, 2rem);
  padding-top: 0.5em;
  align-content: center;
  font-family: fantasy;
  font-weight: bold;
  margin-bottom: 1em;
}

.n-input,
.n-input.n-input--disabled{
  background-color: transparent;
}


.n-input input[style*='text-decoration: line-through;'] {
  color: #da5353;
}

.n-input-group > .n-button > .n-button__border {
  display: none;
}

.n-icon.dim {
  opacity: 0.5;
  transition: opacity 0.3s;
}

.n-button:hover > .n-button__icon .n-icon.dim {
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

.tick-flip-panel {
  color: rgb(220, 217, 212);
  background-color: rgb(38, 41, 43);
}
</style>
