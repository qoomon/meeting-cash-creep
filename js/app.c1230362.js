(function(e){function t(t){for(var r,l,i=t[0],o=t[1],u=t[2],d=0,b=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&b.push(a[l][0]),a[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/meeting-cash-creep/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1952:function(e,t,n){},"1f62":function(e,t,n){"use strict";n("1952")},5639:function(e,t,n){"use strict";n("a123")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=n("d049"),c=n.n(a);const l=Object(r["l"])("img",{src:c.a,style:{height:"30vw","max-height":"20vh"}},null,-1),i={style:{width:"100%",display:"flex","align-items":"center"}};function o(e,t,n,a,c,o){const u=Object(r["K"])("Flip"),s=Object(r["K"])("Roller"),d=Object(r["K"])("currency-dollar"),b=Object(r["K"])("n-icon"),p=Object(r["K"])("pause"),h=Object(r["K"])("n-button"),O=Object(r["K"])("play"),j=Object(r["K"])("reset"),v=Object(r["K"])("n-time-picker"),y=Object(r["K"])("n-space"),f=Object(r["K"])("person"),m=Object(r["K"])("n-input-number"),g=Object(r["K"])("n-input"),S=Object(r["K"])("n-select"),k=Object(r["K"])("n-input-group"),_=Object(r["K"])("n-dynamic-input"),w=Object(r["K"])("n-config-provider");return Object(r["B"])(),Object(r["i"])(w,{theme:c.darkTheme},{default:Object(r["S"])(()=>[l,Object(r["l"])("div",{onClick:t[0]||(t[0]=e=>o.cycleCounterStyle()),style:{position:"relative",height:"1.5em","font-size":"10vw"}},["flip"===c.counterStyle?(Object(r["B"])(),Object(r["i"])(u,{key:0,value:o.totalCosts,style:{display:"inline-block",margin:"auto"}},null,8,["value"])):Object(r["j"])("",!0),"roll"===c.counterStyle?(Object(r["B"])(),Object(r["i"])(s,{key:1,value:o.totalCosts,style:{display:"inline-block",margin:"auto"}},null,8,["value"])):Object(r["j"])("",!0),Object(r["n"])(b,{color:"#2c7b5e",style:{position:"absolute",height:"100%","line-height":"1.9em"}},{default:Object(r["S"])(()=>[Object(r["n"])(d)]),_:1})]),Object(r["n"])(y,{justify:"center",style:{margin:"auto","margin-top":"4em",width:"40em","max-width":"96vw"}},{default:Object(r["S"])(()=>[c.counterIterval?(Object(r["B"])(),Object(r["i"])(h,{key:0,type:"primary",round:"",ghost:"",onClick:t[1]||(t[1]=e=>o.stopCounter())},{icon:Object(r["S"])(()=>[Object(r["n"])(b,null,{default:Object(r["S"])(()=>[Object(r["n"])(p)]),_:1})]),_:1})):(Object(r["B"])(),Object(r["i"])(h,{key:1,type:"primary",round:"",onClick:t[2]||(t[2]=e=>o.startCounter())},{icon:Object(r["S"])(()=>[Object(r["n"])(b,null,{default:Object(r["S"])(()=>[Object(r["n"])(O)]),_:1})]),_:1})),Object(r["n"])(h,{round:"",onClick:t[3]||(t[3]=e=>o.resetCounter())},{icon:Object(r["S"])(()=>[Object(r["n"])(b,null,{default:Object(r["S"])(()=>[Object(r["n"])(j)]),_:1})]),_:1}),Object(r["n"])(v,{value:c.counterRuntime,"onUpdate:value":t[4]||(t[4]=e=>c.counterRuntime=e),round:"",disabled:!!c.counterIterval,actions:null},null,8,["value","disabled"])]),_:1}),Object(r["n"])(_,{value:c.costsArray,"onUpdate:value":t[5]||(t[5]=e=>c.costsArray=e),"on-create":o.addCostEntry,min:1,style:{margin:"auto","margin-top":"4em",width:"40em","max-width":"96vw"}},{default:Object(r["S"])(({value:e})=>[Object(r["l"])("div",i,[Object(r["n"])(m,{value:e.count,"onUpdate:value":t=>e.count=t,round:"",placeholder:"0",min:0,max:9999,style:{width:"24em","margin-right":"1em"}},{prefix:Object(r["S"])(()=>[Object(r["n"])(b,null,{default:Object(r["S"])(()=>[Object(r["n"])(f)]),_:1})]),_:2},1032,["value","onUpdate:value"]),Object(r["n"])(g,{value:e.description,"onUpdate:value":t=>e.description=t,type:"text",placeholder:"Description",style:{"margin-right":"1em"}},null,8,["value","onUpdate:value"]),Object(r["n"])(k,{round:""},{default:Object(r["S"])(()=>[Object(r["n"])(m,{value:e.value,"onUpdate:value":t=>e.value=t,placeholder:"Cost",min:0,max:999999999,"show-button":!1,style:{width:"8em","margin-right":"0.15em"}},{suffix:Object(r["S"])(()=>[Object(r["n"])(b,null,{default:Object(r["S"])(()=>[Object(r["n"])(d)]),_:1})]),_:2},1032,["value","onUpdate:value"]),Object(r["n"])(S,{value:e.interval,"onUpdate:value":t=>e.interval=t,"default-value":"hourly",options:c.costIntervalOptions,style:{width:"7em"}},null,8,["value","onUpdate:value","options"])]),_:2},1024)])]),_:1},8,["value","on-create"])]),_:1},8,["theme"])}var u=n("5927"),s=n("a9d8"),d=n("7965"),b=n("1aac"),p=n("b6e9"),h=n("21e1"),O=n("7613"),j=n("7baf"),v=n("c678"),y=n("3519"),f=n("edfc"),m=n("c872"),g=n("8f5d"),S=n("4bd7"),k=n("640e"),_=n("c417"),w=n("2dd7"),C=n("9e9e");const x=e=>(Object(r["E"])("data-v-34539765"),e=e(),Object(r["C"])(),e),I={ref:"tick",class:"tick"},N=x(()=>Object(r["l"])("div",{"data-repeat":"true","aria-hidden":"true"},[Object(r["l"])("span",{"data-view":"flip"})],-1)),K=[N];function P(e,t,n,a,c,l){return Object(r["B"])(),Object(r["k"])("div",I,K,512)}var A=n("e2eb");n("4379");function B(e){return new Promise(t=>setTimeout(t,e))}function R(e,t,n){const r=String(e).split("").map(e=>+e).reverse();if(t>=r.length){const e=t-r.length+1;r.push(...Array(e).fill(0))}return r[t]=n,r.reverse().join("")}var M={name:"Flip",props:{value:Number,variance:{type:Number,default:100}},mounted(){this._tick=A["a"].DOM.create(this.$refs.tick,{value:this.$props.value})},destroyed(){A["a"].DOM.destroy(this.$refs.tick)},watch:{async value(e,t){const n=Math.ceil(Math.log10(e+1));this._tick.value=this._tick.value%Math.pow(10,n);let r=0;for(const a of String(e).split("").map(e=>Number(e)).reverse())await B(Math.random()*this.variance),this._tick.value=R(this._tick.value,r,a),r++}}},U=(n("5639"),n("6b0d")),D=n.n(U),L=D()(M,[["render",P],["__scopeId","data-v-34539765"]]);function T(e,t,n,a,c,l){return Object(r["B"])(),Object(r["i"])(r["e"],{tag:"div",name:"roller",class:"roller"},{default:Object(r["S"])(()=>[(Object(r["B"])(!0),Object(r["k"])(r["b"],null,Object(r["I"])(String(n.value),(e,t)=>(Object(r["B"])(),Object(r["i"])(Object(r["L"])("\n"!=e?"div":"br"),{class:"roller__wrapper",key:l.getIndex(e,t)},{default:Object(r["S"])(()=>["\n"!=e?(Object(r["B"])(),Object(r["k"])("ul",{key:0,class:"roller__char rollerBlock",style:Object(r["x"])({top:(c.isRollStart?-100*l.findCharIndex(e):1)+"%",height:100*n.charList.length+"%",transition:n.transition+"s"})},[(Object(r["B"])(!0),Object(r["k"])(r["b"],null,Object(r["I"])(-1!=l.findCharIndex(e,!0)?n.charList:[e],t=>(Object(r["B"])(),Object(r["k"])("li",{class:Object(r["w"])(["roller__char__item",{copyable:e==t}]),key:t,style:Object(r["x"])({opacity:" "==t?0:1})},Object(r["M"])(" "==t?"-":t),7))),128))],4)):Object(r["j"])("",!0)]),_:2},1024))),128))]),_:1})}var E={name:"Roller",props:{value:Number,charList:{type:Array,default(){return["0","1","2","3","4","5","6","7","8","9"]}},transition:{type:Number,default:.8}},data(){return{isRollStart:!1,isAnimationEnd:!1}},computed:{},mounted(){setTimeout(()=>{this.isRollStart=!0,setTimeout(()=>{this.isAnimationEnd=!0,this.$emit("animationend",!0)},1e3*this.transition+200)},200)},methods:{getIndex(e,t){return this.isIncludeCharList(e)?t.toString():String(e).trim()?String(e)+String(t):"NULL"+t},isIncludeCharList(e){return-1!=this.charList.indexOf(e)},findCharIndex(e,t){let n=this.charList.indexOf(e);return-1!=n||t?n:0}},destroyed(){}},J=(n("ed55"),D()(E,[["render",T],["__scopeId","data-v-7df911d4"]]));function $(e){const t=8,n=5;switch(e){case"hourly":return 3600;case"daily":return t/24*86400;case"monthly":return t/24*86400*(n/7)*365/12;case"yearly":return t/24*86400*(n/7)*356;default:throw Error("Unexpected interval: "+e)}}var F={name:"App",components:{NConfigProvider:u["b"],NDivider:s["a"],NInputGroup:d["a"],NDynamicInput:b["a"],NInput:p["a"],NInputNumber:h["a"],NTimePicker:O["a"],NSelect:j["a"],NIcon:v["a"],Play:S["a"],Pause:k["a"],Reset:_["a"],CurrencyDollar:w["a"],Person:C["a"],NButton:y["a"],NCheckbox:f["a"],NSpace:m["a"],Flip:L,Roller:J},data(){return{tickDelay:1e3,darkTheme:g["a"],counterIterval:null,counterStart:null,counterRuntime:-36e5,costsArray:[{count:42,value:99,interval:"hourly",description:"Coding Dude"}],counterStyle:"flip",costIntervalOptions:["hourly","daily","monthly","yearly"].map(e=>({value:e,label:e}))}},computed:{totalCosts(){const e=(this.counterRuntime+36e5)/1e3;return Math.ceil(e*this.costsPerSecond)},costsPerSecond(){return this.costsArray.filter(e=>e.count&&e.value&&e.interval).map(e=>e.value/$(e.interval)*e.count).reduce((e,t)=>e+t,0)}},watch:{costsArray:{deep:!0,handler(e){localStorage.costsArray=JSON.stringify(e)}}},methods:{startCounter(){this.stopCounter(),this.counterIterval=setInterval(this.costTick,this.tickDelay)},stopCounter(){this.counterIterval&&(clearInterval(this.counterIterval),this.counterIterval=null)},resetCounter(){this.counterRuntime=-36e5},costTick(){this.counterRuntime+=this.tickDelay},addCostEntry(){return{count:0,value:42,interval:"hourly"}},cycleCounterStyle(){switch(this.counterStyle){case"flip":this.counterStyle="roll";break;case"roll":this.counterStyle="flip";break;default:this.counterStyle="flip";break}}},created(){localStorage.costsArray&&(this.costsArray=JSON.parse(localStorage.costsArray))},beforeDestroy(){this.stopCounter()}},z=(n("1f62"),D()(F,[["render",o]]));Object(r["h"])(z).mount("#app")},"7b5a":function(e,t,n){},a123:function(e,t,n){},d049:function(e,t,n){e.exports=n.p+"img/meeting-bubbles.c8866770.png"},ed55:function(e,t,n){"use strict";n("7b5a")}});
//# sourceMappingURL=app.c1230362.js.map