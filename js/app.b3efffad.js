(function(e){function t(t){for(var n,a,l=t[0],i=t[1],s=t[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/meeting-cash-creep/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},5639:function(e,t,o){"use strict";o("a123")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=o("d049"),c=o.n(r);const a=Object(n["createElementVNode"])("img",{src:c.a,style:{height:"30vw","max-height":"20vh"}},null,-1),l={style:{display:"flex","align-items":"center","margin-bottom":"8px"}},i={style:{color:"#ffffff61","font-size":"0.9em"}},s=Object(n["createElementVNode"])("span",{style:{position:"relative",left:"-4px",bottom:"2px","font-size":"0.65em"}},"/",-1),u=Object(n["createElementVNode"])("span",{style:{position:"relative",left:"-5px",bottom:"1px","font-size":"0.6em","font-weight":"bold","font-style":"italic"}},"h",-1),d={style:{display:"flex","margin-top":"16px"}},b=Object(n["createElementVNode"])("div",{style:{"margin-left":"52px"}},null,-1),p=Object(n["createTextVNode"])("Settings"),h=Object(n["createTextVNode"])(" Cost ");function m(e,t,o,r,c,m){const O=Object(n["resolveComponent"])("Flip"),j=Object(n["resolveComponent"])("Roller"),f=Object(n["resolveComponent"])("icon-currency-dollar"),C=Object(n["resolveComponent"])("n-icon"),v=Object(n["resolveComponent"])("icon-play"),y=Object(n["resolveComponent"])("icon-pause"),g=Object(n["resolveComponent"])("n-button"),w=Object(n["resolveComponent"])("icon-reset"),x=Object(n["resolveComponent"])("n-time-picker"),k=Object(n["resolveComponent"])("n-space"),N=Object(n["resolveComponent"])("icon-person"),V=Object(n["resolveComponent"])("n-input-number"),_=Object(n["resolveComponent"])("n-input"),E=Object(n["resolveComponent"])("n-input-group"),I=Object(n["resolveComponent"])("icon-trash-can"),S=Object(n["resolveComponent"])("icon-draggable"),B=Object(n["resolveComponent"])("icon-add"),L=Object(n["resolveComponent"])("draggable"),T=Object(n["resolveComponent"])("n-input-group-label"),P=Object(n["resolveComponent"])("n-select"),D=Object(n["resolveComponent"])("icon-diagram"),U=Object(n["resolveComponent"])("n-card"),M=Object(n["resolveComponent"])("n-modal"),z=Object(n["resolveComponent"])("n-config-provider");return Object(n["openBlock"])(),Object(n["createBlock"])(z,{theme:c.darkTheme},{default:Object(n["withCtx"])(()=>[a,Object(n["createElementVNode"])("div",{onClick:t[0]||(t[0]=e=>m.cycleCounterStyle()),style:{position:"relative",height:"1.5em","font-size":"10vw"}},["flip"===c.counterStyle?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,value:m.costCounterValueInt,style:{display:"inline-block",margin:"auto"}},null,8,["value"])):Object(n["createCommentVNode"])("",!0),"roll"===c.counterStyle?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:1,value:m.costCounterValueInt,style:{display:"inline-block",margin:"auto"}},null,8,["value"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(C,{color:"#2c7b5e",style:{position:"absolute",height:"100%","line-height":"1.9em"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f)]),_:1})]),Object(n["createVNode"])(k,{justify:"center",style:{margin:"auto","margin-top":"4em",width:"40em","max-width":"96vw"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,{type:"primary",round:"",ghost:!!c.costCounterIterval,onClick:t[1]||(t[1]=e=>c.costCounterIterval?m.stopCostCounter():m.startCostCounter())},{icon:Object(n["withCtx"])(()=>[c.costCounterIterval?(Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y)]),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(v)]),_:1}))]),_:1},8,["ghost"]),Object(n["createVNode"])(g,{type:"default",round:"",onClick:t[2]||(t[2]=e=>m.resetCostCounter())},{icon:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(w)]),_:1})]),_:1}),Object(n["createVNode"])(x,{round:"",value:m._costCounterRuntime_timePicker,"onUpdate:value":t[3]||(t[3]=e=>m._costCounterRuntime_timePicker=e),"on-blur":()=>c.costCounter.value=m.costsPerSecond*c.costCounter.runtime/1e3,actions:null,disabled:c.costCounter.runtime>0||!!c.costCounterIterval},null,8,["value","on-blur","disabled"])]),_:1}),Object(n["createVNode"])(L,{modelValue:c.costsList,"onUpdate:modelValue":t[5]||(t[5]=e=>c.costsList=e),"item-key":"id",handle:".draggable-handle",animation:"300","ghost-class":"draggable-ghost",style:{margin:"auto","margin-top":"4em",width:"40em","max-width":"96vw"}},{item:Object(n["withCtx"])(({i:e,element:t})=>[Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(E,{round:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(V,{value:t.count,"onUpdate:value":e=>t.count=e,min:0,max:9999,placeholder:"0",style:{"text-align":"center",width:"8em","flex-shrink":"0","flex-grow":"0","margin-right":"3px"}},{prefix:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(N)]),_:1})]),_:2},1032,["value","onUpdate:value"]),Object(n["createVNode"])(_,{value:t.name,"onUpdate:value":e=>t.name=e,type:"text",placeholder:"Name"},null,8,["value","onUpdate:value"]),Object(n["createVNode"])(g,{type:"default","text-color":"#ffffffd1",round:"","icon-placement":"right",onClick:e=>{c.costEditorElement=t,c.showCostEditor=!0},style:{width:"6em","flex-shrink":"0","flex-grow":"0","margin-left":"2px !important","background-color":"#ffffff1a"}},{icon:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f)]),_:1}),s,u])]),default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.hourlyCostValue(t).toFixed(0))+" ",1)]),_:2},1032,["onClick"])]),_:2},1024),Object(n["createVNode"])(g,{text:"",style:{"margin-left":"8px"},onClick:t=>c.costsList.splice(e,1)},{icon:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,{size:"medium",class:"dim"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(I)]),_:1})]),_:2},1032,["onClick"]),Object(n["createVNode"])(C,{size:"large",class:"draggable-handle dim",style:{"margin-left":"8px"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(S)]),_:1})])]),footer:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(g,{type:"default",round:"",dashed:"",ghost:"",style:{width:"100%"},onClick:t[4]||(t[4]=e=>m.addCost())},{icon:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,{class:"dim"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(B)]),_:1})]),_:1}),b])]),_:1},8,["modelValue"]),Object(n["createVNode"])(M,{show:c.showCostEditor,"onUpdate:show":t[9]||(t[9]=e=>c.showCostEditor=e)},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(U,{size:"medium",style:{width:"auto"},title:c.costEditorElement.name||"No Name",bordered:!1},{"header-extra":Object(n["withCtx"])(()=>[p]),default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(k,{vertical:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(E,{round:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(T,{style:{width:"8em","margin-right":"3px","text-align":"center"}},{default:Object(n["withCtx"])(()=>[h]),_:1}),Object(n["createVNode"])(V,{value:c.costEditorElement.value,"onUpdate:value":t[6]||(t[6]=e=>c.costEditorElement.value=e),placeholder:"Cost",min:0,max:999999999,"show-button":!1,style:{"text-align":"center",width:"8em","margin-right":"3px"}},{suffix:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f)]),_:1})]),_:1},8,["value"]),Object(n["createVNode"])(P,{value:c.costEditorElement.unit,"onUpdate:value":t[7]||(t[7]=e=>c.costEditorElement.unit=e),"default-value":"hourly",options:c.costTimeUnits,style:{width:"7em"}},null,8,["value","options"])]),_:1}),"hourly"!==c.costEditorElement.unit?(Object(n["openBlock"])(),Object(n["createBlock"])(E,{key:0,round:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(T,{style:{width:"8em","margin-right":"3px"}},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])("daily"===c.costEditorElement.unit?"Daily":"Weekly")+" hours ",1)]),_:1}),Object(n["createVNode"])(V,{value:c.costEditorElement.workingHours,"onUpdate:value":t[8]||(t[8]=e=>c.costEditorElement.workingHours=e),placeholder:"Hours",min:1,max:168,"show-button":!1,style:{"text-align":"center",width:"8em"}},{suffix:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(D)]),_:1})]),_:1},8,["value"])]),_:1})):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1},8,["title"])]),_:1},8,["show"])]),_:1},8,["theme"])}function O(e,t){const o=e=>`${t}/${e}`;return new Proxy(e,{get(e,t){const n=e.getItem(o(t));return JSON.parse(n)},set(e,t,n){const r=JSON.stringify(n);return e.setItem(o(t),r),!0},deleteProperty(e,t){return e.removeItem(o(t)),!0}})}var j=O,f=o("b76a"),C=o.n(f),v=o("5927"),y=o("a9d8"),g=o("7965"),w=o("f945"),x=o("1aac"),k=o("b6e9"),N=o("21e1"),V=o("7613"),_=o("7baf"),E=o("c678"),I=o("3519"),S=o("edfc"),B=o("c872"),L=o("6e31"),T=o("4951"),P=o("8f5d"),D=o("4bd7"),U=o("640e"),M=o("c417"),z=o("2dd7"),R=o("9e9e"),H=o("ebb8"),A=o("a223"),F=o("83bf"),$=o("c98c");const J=e=>(Object(n["pushScopeId"])("data-v-34539765"),e=e(),Object(n["popScopeId"])(),e),G={ref:"tick",class:"tick"},W=J(()=>Object(n["createElementVNode"])("div",{"data-repeat":"true","aria-hidden":"true"},[Object(n["createElementVNode"])("span",{"data-view":"flip"})],-1)),q=[W];function K(e,t,o,r,c,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",G,q,512)}var Q=o("e2eb");o("4379");function X(e){return new Promise(t=>setTimeout(t,e))}function Y(e,t,o){const n=String(e).split("").map(e=>+e).reverse();if(t>=n.length){const e=t-n.length+1;n.push(...Array(e).fill(0))}return n[t]=o,n.reverse().join("")}var Z={name:"Flip",props:{value:Number,variance:{type:Number,default:100}},mounted(){this._tick=Q["a"].DOM.create(this.$refs.tick,{value:this.$props.value})},destroyed(){Q["a"].DOM.destroy(this.$refs.tick)},watch:{async value(e,t){const o=Math.ceil(Math.log10(e+1));this._tick.value=this._tick.value%Math.pow(10,o);let n=0;for(const r of String(e).split("").map(e=>Number(e)).reverse())await X(Math.random()*this.variance),this._tick.value=Y(this._tick.value,n,r),n++}}},ee=(o("5639"),o("6b0d")),te=o.n(ee),oe=te()(Z,[["render",K],["__scopeId","data-v-34539765"]]);function ne(e,t,o,r,c,a){return Object(n["openBlock"])(),Object(n["createBlock"])(n["TransitionGroup"],{tag:"div",name:"roller",class:"roller"},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(String(o.value),(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])("\n"!=e?"div":"br"),{class:"roller__wrapper",key:a.getIndex(e,t)},{default:Object(n["withCtx"])(()=>["\n"!=e?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",{key:0,class:"roller__char rollerBlock",style:Object(n["normalizeStyle"])({top:(c.isRollStart?-100*a.findCharIndex(e):1)+"%",height:100*o.charList.length+"%",transition:o.transition+"s"})},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(-1!=a.findCharIndex(e,!0)?o.charList:[e],t=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:Object(n["normalizeClass"])(["roller__char__item",{copyable:e==t}]),key:t,style:Object(n["normalizeStyle"])({opacity:" "==t?0:1})},Object(n["toDisplayString"])(" "==t?"-":t),7))),128))],4)):Object(n["createCommentVNode"])("",!0)]),_:2},1024))),128))]),_:1})}var re={name:"Roller",props:{value:Number,charList:{type:Array,default(){return["0","1","2","3","4","5","6","7","8","9"]}},transition:{type:Number,default:.8}},data(){return{isRollStart:!1,isAnimationEnd:!1}},computed:{},mounted(){setTimeout(()=>{this.isRollStart=!0,setTimeout(()=>{this.isAnimationEnd=!0,this.$emit("animationend",!0)},1e3*this.transition+200)},200)},methods:{getIndex(e,t){return this.isIncludeCharList(e)?t.toString():String(e).trim()?String(e)+String(t):"NULL"+t},isIncludeCharList(e){return-1!=this.charList.indexOf(e)},findCharIndex(e,t){let o=this.charList.indexOf(e);return-1!=o||t?o:0}},destroyed(){}},ce=(o("ed55"),te()(re,[["render",ne],["__scopeId","data-v-7df911d4"]]));const ae=j(localStorage,"cash-creep");var le={name:"App",components:{NConfigProvider:v["b"],NDivider:y["a"],NInputGroup:g["a"],NInputGroupLabel:w["a"],NDynamicInput:x["a"],NInput:k["a"],NInputNumber:N["a"],NTimePicker:V["a"],NSelect:_["a"],NIcon:E["a"],IconPlay:D["a"],IconPause:U["a"],IconReset:M["a"],IconCurrencyDollar:z["a"],IconPerson:R["a"],IconAdd:H["a"],IconDraggable:A["a"],IconTrashCan:F["a"],IconDiagram:$["a"],NButton:I["a"],NCheckbox:S["a"],NSpace:B["a"],NModal:L["a"],NCard:T["c"],draggable:C.a,Flip:oe,Roller:ce},data(){return{darkTheme:P["a"],costsList:[],costCounter:{runtime:0,value:0},costCounterIterval:null,costCounterTickDelay:1e3,showCostEditor:!1,costEditorElement:null,costElementHover:null,counterStyle:"flip",costTimeUnits:["hourly","daily","monthly","yearly"].map(e=>({value:e,label:e}))}},computed:{costCounterValueInt(){return Math.round(this.costCounter.value)},costsPerSecond(){return this.costsList.filter(e=>e.count&&e.value&&e.unit).map(e=>this.hourlyCostValue(e)/60/60*e.count).reduce((e,t)=>e+t,0)},_costCounterRuntime_timePicker:{get(){return this.costCounter.runtime-36e5},set(e){this.costCounter.runtime=e+36e5}}},watch:{costsList:{deep:!0,handler(e){ae.costsList=e}},costCounter:{deep:!0,handler(e){ae.costCounter=e}}},methods:{startCostCounter(){this.stopCostCounter(),this.costCounterIterval=setInterval(this.costCounterTick,this.costCounterTickDelay)},stopCostCounter(){this.costCounterIterval&&(clearInterval(this.costCounterIterval),this.costCounterIterval=null)},resetCostCounter(){this.costCounter={runtime:0,value:0}},costCounterTick(){this.costCounter.runtime+=this.costCounterTickDelay,this.costCounter.value+=this.costsPerSecond*(this.costCounterTickDelay/1e3)},addCost(e){return this.costsList.push(Object.assign({id:window.performance.now()*Math.pow(10,10),count:0,value:0,unit:"hourly",workingHours:8},e))},hourlyCostValue(e){const t=365/12/7,o=365/7;switch(e.unit){case"hourly":return e.value;case"daily":return e.value/e.workingHours;case"monthly":return e.value/(e.workingHours*t);case"yearly":return e.value/(e.workingHours*o);default:throw Error("Unexpected unit: "+e.unit)}},cycleCounterStyle(){switch(this.counterStyle){case"flip":this.counterStyle="roll";break;case"roll":this.counterStyle="flip";break;default:this.counterStyle="flip";break}}},created(){this.costCounter=ae.costCounter||this.costCounter,this.costsList=ae.costsList||this.costsList,0===this.costsList.length&&this.addCost({count:42,value:99,unit:"hourly",name:"Whimsical Unicorn"})},beforeDestroy(){this.stopCostCounter()}},ie=(o("60b4"),te()(le,[["render",m]]));Object(n["createApp"])(ie).mount("#app")},"60b4":function(e,t,o){"use strict";o("9b3f")},"7b5a":function(e,t,o){},"9b3f":function(e,t,o){},a123:function(e,t,o){},d049:function(e,t,o){e.exports=o.p+"img/meeting-bubbles.c8866770.png"},ed55:function(e,t,o){"use strict";o("7b5a")}});
//# sourceMappingURL=app.b3efffad.js.map