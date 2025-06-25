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
  if(pos >= valueDigits.length){
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
    variance: {
      type: Number,
      default: 100
    }
  },
  mounted() {
    this._tick = Tick.DOM.create(this.$refs.tick, {
      value: this.$props.value
    });
  },
  destroyed() {
    Tick.DOM.destroy(this.$refs.tick);
  },
  watch: {
    async value(newValue, oldValue) {
      // -- flip vaiance for each digit --
      const newValueLenght = Math.ceil(Math.log10(newValue + 1))
      this._tick.value = this._tick.value % Math.pow(10, newValueLenght)
      let pos = 0
      for (const digit of String(newValue).split('').map(char => Number(char)).reverse()) {
        await timeout(Math.random() * this.variance)
        this._tick.value = setDigit(this._tick.value, pos, digit)
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
.tick-credits {
  display: none;
}
</style>
