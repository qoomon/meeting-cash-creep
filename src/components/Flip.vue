<template>
  <div ref="tick" class="tick">
    <div data-repeat="true" aria-hidden="true">
      <span data-view="flip"></span>
    </div>
  </div>
</template>

<script>
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setDigit(value, pos, digit) {
  const valueDigits = String(value).split('').map(digit => +digit).reverse()
  if (pos >= valueDigits.length) {
    const digitsDiff = pos - valueDigits.length + 1
    valueDigits.push(...Array(digitsDiff).fill(0))
  }

  valueDigits[pos] = digit
  return valueDigits.reverse().join('')
}

export default {
  name: "Flip",
  props: {
    value: Number,
    padding: {
      type: Number,
      default: 1,
    },
    variance: {
      type: Number,
      default: 100,
    }
  },
  mounted() {
    this._tick = Tick.DOM.create(this.$refs.tick, {
      value: String(this.$props.value).padStart(this.$props.padding, "0"),
    });
  },
  destroyed() {
    Tick.DOM.destroy(this.$refs.tick);
  },
  watch: {
    async value(newValue, oldValue) {
      const newTickValue = String(newValue).padStart(this.$props.padding, "0");
      const currentTickValue = String(this._tick.value ?? 0)
      if (newTickValue.length < currentTickValue.length) {
        this._tick.value = currentTickValue.slice(-newTickValue.length);
      }
      let pos = 0
      for (const digit of newTickValue.split('').map(char => Number(char)).reverse()) {
        this._tick.value = setDigit(this._tick.value, pos, digit)
        await timeout(Math.random() * this.variance)
        pos++
      }
    }
  },
};
</script>

<style scoped>
.tick {
  font-size: 1em;
  width: fit-content;
}
</style>
<style>
.tick-credits {
  display: none;
}
</style>