<template>
	<transition-group tag="div" name="roller" class="roller">
		<component :is="t != '\n' ? 'div' : 'br'" class="roller__wrapper" v-for="(t, idx) in String(value)" :key="getIndex(t, idx)">
			<ul
				v-if="t != '\n'"
				class="roller__char rollerBlock"
				:style="{ top: `${isRollStart ? findCharIndex(t) * -100 : 1}%`, height: `${charList.length * 100}%`, transition: `${transition}s` }"
			>
				<li class="roller__char__item" :class="{ copyable: t == char }" v-for="char in findCharIndex(t, true) != -1 ? charList : [t]" :key="char" :style="{ opacity: char == ' ' ? 0 : 1 }">
					{{ char == " " ? "-" : char }}
				</li>
			</ul>
		</component>
	</transition-group>
</template>

<script>
export default {
  name: "Roller",
  props: {
    value: Number,
    charList: {
      type: Array,
      default() {
       return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      }
    },
    transition: {
      type: Number,
      default: 0.8
    }
  },
  data() {
    return {
    	isRollStart: false,
    	isAnimationEnd: false
    }
  },
  computed: {

  },
  mounted() {
    // 0.2s start
		setTimeout(() => {
			this.isRollStart = true;
			// transition end
			setTimeout(() => {
				this.isAnimationEnd = true;
				this.$emit("animationend", true);
			}, this.transition * 1000 + 200);
		}, 200);
  },
  methods: {
    getIndex(t, idx) {
  		if (!this.isIncludeCharList(t)) {
  			if (!String(t).trim()) return "NULL" + idx;
  			else return String(t) + String(idx);
  		}
  	
			return idx.toString(); 
  	},
  	isIncludeCharList(t) {
  		return this.charList.indexOf(t) != -1;
  	},
  	findCharIndex(t, isOriginal) {
  		let idx = this.charList.indexOf(t);
  		if (idx == -1 && !isOriginal) return 0;
  		else return idx;
  	}
  },
  destroyed() {
    
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.roller-leave-active, .roller-enter-active {
  transition: top 0.75s, opacity 0.75s, width 0.75s;
}
.roller-leave-active {
  position: absolute;
}
.roller-item {
  transition: 0.5s;
}
.roller-move {
  transition: 0.5s;
}
.roller-enter {
  opacity: 0;
}
.roller-enter .roller__char {
  top: 100% !important;
}
.roller-enter-to {
  opacity: 1;
}
.roller-leave {
  opacity: 1;
  width: 1em;
}
.roller-leave-to {
  opacity: 0;
  width: 0;
}
.roller-leave-to .roller__char {
  top: 100% !important;
}
.roller {
  flex-wrap: wrap;
  overflow: hidden;
  width: fit-content;
  font-size: 1em;
  color: #edebeb;
}
.roller .roller__wrapper {
  display: inline-flex;
  position: relative;
  height: 1em !important;
  overflow: hidden;
  mask-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, black 10%, black 90%, rgba(255, 255, 255, 0) 100%);
}
.roller .roller__char {
  display: inline-flex;
  line-height: 1em;
  transition: 0.5s;
  position: relative;
  list-style: none;
  flex-direction: column;
}
.roller .roller__char .roller__char__item {
  user-select: none;
  flex: 1;
}
.roller .roller__char .copyable {
  user-select: all;
}
.block {
  padding: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
