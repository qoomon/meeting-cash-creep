(function(e){function t(t){for(var r,a,l=t[0],i=t[1],s=t[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,l=1;l<o.length;l++){var i=o[l];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={app:0},c=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/meeting-cash-creep/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},5639:function(e,t,o){"use strict";o("a123")},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("7a23"),n=o("d049"),c=o.n(n);const a=Object(r["createElementVNode"])("img",{src:c.a,style:{height:"30vw","max-height":"20vh"}},null,-1),l={style:{display:"flex","align-items":"center","margin-bottom":"8px"}},i={style:{color:"#ffffff61","font-size":"0.9em"}},s=Object(r["createElementVNode"])("span",{style:{position:"relative",left:"-0.4em",bottom:"0","font-size":"0.6em","font-weight":"bold","font-style":"italic"}},"h",-1),u={style:{display:"flex","margin-top":"16px"}},d=Object(r["createElementVNode"])("div",{style:{"margin-left":"52px"}},null,-1),b={style:{position:"relative",bottom:"-3px",color:"#ffffff61","font-size":"1.2em"}},p=Object(r["createElementVNode"])("span",{style:{position:"relative",left:"-0.4em",bottom:"0","font-size":"0.6em","font-weight":"400","font-style":"italic"}},"h",-1),m=Object(r["createTextVNode"])(" Weekly Working Days ");function h(e,t,o,n,c,h){const O=Object(r["resolveComponent"])("Flip"),j=Object(r["resolveComponent"])("Roller"),f=Object(r["resolveComponent"])("icon-currency-dollar"),v=Object(r["resolveComponent"])("n-icon"),y=Object(r["resolveComponent"])("icon-play"),C=Object(r["resolveComponent"])("icon-pause"),g=Object(r["resolveComponent"])("n-button"),w=Object(r["resolveComponent"])("icon-reset"),x=Object(r["resolveComponent"])("n-time-picker"),k=Object(r["resolveComponent"])("n-space"),N=Object(r["resolveComponent"])("icon-person"),V=Object(r["resolveComponent"])("n-input-number"),E=Object(r["resolveComponent"])("n-input"),_=Object(r["resolveComponent"])("n-input-group"),I=Object(r["resolveComponent"])("icon-trash-can"),S=Object(r["resolveComponent"])("icon-draggable"),B=Object(r["resolveComponent"])("icon-add"),D=Object(r["resolveComponent"])("draggable"),P=Object(r["resolveComponent"])("n-select"),T=Object(r["resolveComponent"])("n-input-group-label"),L=Object(r["resolveComponent"])("icon-time"),z=Object(r["resolveComponent"])("icon-calendar"),H=Object(r["resolveComponent"])("icon-calendar-heat-map"),M=Object(r["resolveComponent"])("n-card"),U=Object(r["resolveComponent"])("n-modal"),R=Object(r["resolveComponent"])("n-config-provider");return Object(r["openBlock"])(),Object(r["createBlock"])(R,{theme:c.darkTheme},{default:Object(r["withCtx"])(()=>[a,Object(r["createElementVNode"])("div",{onClick:t[0]||(t[0]=e=>h.cycleCounterStyle()),style:{position:"relative",height:"1.5em","font-size":"10vw"}},["flip"===c.counterStyle?(Object(r["openBlock"])(),Object(r["createBlock"])(O,{key:0,value:h.costCounterValueInt,style:{display:"inline-block",margin:"auto"}},null,8,["value"])):Object(r["createCommentVNode"])("",!0),"roll"===c.counterStyle?(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:1,value:h.costCounterValueInt,style:{display:"inline-block",margin:"auto"}},null,8,["value"])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(v,{color:"#2c7b5e",style:{position:"absolute",height:"100%","line-height":"1.9em"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f)]),_:1})]),Object(r["createVNode"])(k,{justify:"center",style:{margin:"4em auto auto",width:"40em","max-width":"96vw"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,{type:"primary",round:"","icon-placement":"right",ghost:!!c.costCounterInterval,onClick:t[1]||(t[1]=e=>c.costCounterInterval?h.stopCostCounter():h.startCostCounter())},{icon:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,null,{default:Object(r["withCtx"])(()=>[c.costCounterInterval?(Object(r["openBlock"])(),Object(r["createBlock"])(C,{key:1})):(Object(r["openBlock"])(),Object(r["createBlock"])(y,{key:0}))]),_:1})]),_:1},8,["ghost"]),Object(r["createVNode"])(g,{type:"default",round:"",onClick:t[2]||(t[2]=e=>h.resetCostCounter())},{icon:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(w)]),_:1})]),_:1}),Object(r["createVNode"])(x,{round:"",value:h._costCounterRuntime_timePicker,"onUpdate:value":t[3]||(t[3]=e=>h._costCounterRuntime_timePicker=e),"on-blur":()=>c.costCounter.value=h.costPerHourTotal/60/60*c.costCounter.runtime/1e3,actions:null,disabled:c.costCounter.runtime>0||!!c.costCounterInterval},null,8,["value","on-blur","disabled"])]),_:1}),Object(r["createVNode"])(D,{modelValue:c.costsList,"onUpdate:modelValue":t[5]||(t[5]=e=>c.costsList=e),"item-key":"id",handle:".draggable-handle",animation:"300","ghost-class":"draggable-ghost",style:{margin:"4em auto auto",width:"40em","max-width":"96vw"}},{item:Object(r["withCtx"])(({i:e,element:t})=>[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(_,{round:""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(V,{value:t.count,"onUpdate:value":e=>t.count=e,min:0,max:9999,placeholder:"0",style:{width:"8em","flex-shrink":"0","flex-grow":"0","margin-right":"3px","text-align":"center"}},{prefix:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{size:"large"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(N)]),_:1})]),_:2},1032,["value","onUpdate:value"]),Object(r["createVNode"])(E,{value:t.name,"onUpdate:value":e=>t.name=e,type:"text",placeholder:"Name"},null,8,["value","onUpdate:value"]),Object(r["createVNode"])(g,{type:"default","text-color":"#ffffffd1",round:"","icon-placement":"right",onClick:e=>{c.costEditorElement=t,c.showCostEditor=!0},style:{width:"6em","flex-shrink":"0","flex-grow":"0","margin-left":"2px !important","background-color":"#ffffff1a"}},{icon:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(v,{size:"large"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f)]),_:1}),s])]),default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(Math.round(h.costPerHour(t)))+" ",1)]),_:2},1032,["onClick"])]),_:2},1024),Object(r["createVNode"])(g,{text:"",style:{"margin-left":"8px"},onClick:t=>c.costsList.splice(e,1)},{icon:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{size:"medium",class:"dim"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(I)]),_:1})]),_:2},1032,["onClick"]),Object(r["createVNode"])(v,{size:"large",class:"draggable-handle dim",style:{"margin-left":"8px"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(S)]),_:1})])]),footer:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(g,{type:"default",round:"",dashed:"",ghost:"",style:{width:"100%"},onClick:t[4]||(t[4]=e=>h.addCost())},{icon:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{class:"dim"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(B)]),_:1})]),_:1}),d])]),_:1},8,["modelValue"]),Object(r["createVNode"])(U,{show:c.showCostEditor,"onUpdate:show":t[11]||(t[11]=e=>c.showCostEditor=e)},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(M,{size:"medium",style:{width:"auto"},title:c.costEditorElement.name||"No Name",bordered:!1},{"header-extra":Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(Math.round(h.costPerHour(c.costEditorElement)))+" ",1),Object(r["createElementVNode"])("div",b,[Object(r["createVNode"])(v,{size:"large"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f)]),_:1}),p])]),default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(k,{vertical:""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(_,{round:""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(P,{value:c.costEditorElement.interval,"onUpdate:value":t[6]||(t[6]=e=>c.costEditorElement.interval=e),"default-value":"hourly",options:c.costIntervals.map(e=>({value:e,label:e.capitalize()+" Costs"})),style:{width:"50%","margin-right":"3px"}},null,8,["value","options"]),Object(r["createVNode"])(V,{value:c.costEditorElement.value,"onUpdate:value":t[7]||(t[7]=e=>c.costEditorElement.value=e),placeholder:"Cost",min:0,max:999999999,style:{width:"50%","text-align":"center"}},{prefix:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{size:"large"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f)]),_:1})]),_:1},8,["value"])]),_:1}),["daily","monthly","yearly"].includes(c.costEditorElement.interval)?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:0,round:""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(T,{style:{width:"50%","margin-right":"3px"}},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])("daily"===c.costEditorElement.interval?"Daily":"Weekly")+" Working Hours ",1)]),_:1}),Object(r["createVNode"])(V,{value:c.costEditorElement.workingHours,"onUpdate:value":t[8]||(t[8]=e=>c.costEditorElement.workingHours=e),placeholder:"Hours",min:1,max:"daily"===c.costEditorElement.interval?24:168,style:{width:"50%","text-align":"center"}},{prefix:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{size:"large"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(L)]),_:1})]),_:1},8,["value","max"])]),_:1})):Object(r["createCommentVNode"])("",!0),["monthly","yearly"].includes(c.costEditorElement.interval)?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:1,round:""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(T,{style:{width:"50%","margin-right":"3px"}},{default:Object(r["withCtx"])(()=>[m]),_:1}),Object(r["createVNode"])(V,{value:c.costEditorElement.workingDays,"onUpdate:value":t[9]||(t[9]=e=>c.costEditorElement.workingDays=e),placeholder:"Days",min:1,max:7,style:{width:"50%","text-align":"center"}},{prefix:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{size:"large"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(z)]),_:1})]),_:1},8,["value"])]),_:1})):Object(r["createCommentVNode"])("",!0),["monthly","yearly"].includes(c.costEditorElement.interval)?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:2,round:""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(T,{style:{width:"50%","margin-right":"3px"}},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(c.costEditorElement.interval.capitalize())+" Off days ",1)]),_:1}),Object(r["createVNode"])(V,{value:c.costEditorElement.daysOff,"onUpdate:value":t[10]||(t[10]=e=>c.costEditorElement.daysOff=e),placeholder:"Days",min:0,max:Math.floor(c.costEditorElement.workingDays*h.weeksPerInterval(c.costEditorElement.interval)),style:{width:"50%","text-align":"center"}},{prefix:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{size:"large"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(H)]),_:1})]),_:1},8,["value","max"])]),_:1})):Object(r["createCommentVNode"])("",!0)]),_:1})]),_:1},8,["title"])]),_:1},8,["show"])]),_:1},8,["theme"])}function O(e,t){const o=e=>`${t}/${e}`;return new Proxy(e,{get(e,t){const r=e.getItem(o(t));return JSON.parse(r)},set(e,t,r){const n=JSON.stringify(r);return e.setItem(o(t),n),!0},deleteProperty(e,t){return e.removeItem(o(t)),!0}})}var j=O,f=o("b76a"),v=o.n(f),y=o("5927"),C=o("a9d8"),g=o("7965"),w=o("f945"),x=o("1aac"),k=o("b6e9"),N=o("21e1"),V=o("7613"),E=o("7baf"),_=o("c678"),I=o("3519"),S=o("edfc"),B=o("6dc9"),D=o("c872"),P=o("6e31"),T=o("4951"),L=o("8f5d"),z=o("4bd7"),H=o("640e"),M=o("c417"),U=o("2dd7"),R=o("9e9e"),A=o("ebb8"),$=o("a223"),F=o("83bf"),W=o("c98c"),J=o("9bd3"),G=o("a2bf"),q=o("eb62");const K=e=>(Object(r["pushScopeId"])("data-v-34539765"),e=e(),Object(r["popScopeId"])(),e),Q={ref:"tick",class:"tick"},X=K(()=>Object(r["createElementVNode"])("div",{"data-repeat":"true","aria-hidden":"true"},[Object(r["createElementVNode"])("span",{"data-view":"flip"})],-1)),Y=[X];function Z(e,t,o,n,c,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Q,Y,512)}var ee=o("e2eb");o("4379");function te(e){return new Promise(t=>setTimeout(t,e))}function oe(e,t,o){const r=String(e).split("").map(e=>+e).reverse();if(t>=r.length){const e=t-r.length+1;r.push(...Array(e).fill(0))}return r[t]=o,r.reverse().join("")}var re={name:"Flip",props:{value:Number,variance:{type:Number,default:100}},mounted(){this._tick=ee["a"].DOM.create(this.$refs.tick,{value:this.$props.value})},destroyed(){ee["a"].DOM.destroy(this.$refs.tick)},watch:{async value(e,t){const o=Math.ceil(Math.log10(e+1));this._tick.value=this._tick.value%Math.pow(10,o);let r=0;for(const n of String(e).split("").map(e=>Number(e)).reverse())await te(Math.random()*this.variance),this._tick.value=oe(this._tick.value,r,n),r++}}},ne=(o("5639"),o("6b0d")),ce=o.n(ne),ae=ce()(re,[["render",Z],["__scopeId","data-v-34539765"]]);function le(e,t,o,n,c,a){return Object(r["openBlock"])(),Object(r["createBlock"])(r["TransitionGroup"],{tag:"div",name:"roller",class:"roller"},{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(String(o.value),(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])("\n"!=e?"div":"br"),{class:"roller__wrapper",key:a.getIndex(e,t)},{default:Object(r["withCtx"])(()=>["\n"!=e?(Object(r["openBlock"])(),Object(r["createElementBlock"])("ul",{key:0,class:"roller__char rollerBlock",style:Object(r["normalizeStyle"])({top:(c.isRollStart?-100*a.findCharIndex(e):1)+"%",height:100*o.charList.length+"%",transition:o.transition+"s"})},[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(-1!=a.findCharIndex(e,!0)?o.charList:[e],t=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{class:Object(r["normalizeClass"])(["roller__char__item",{copyable:e==t}]),key:t,style:Object(r["normalizeStyle"])({opacity:" "==t?0:1})},Object(r["toDisplayString"])(" "==t?"-":t),7))),128))],4)):Object(r["createCommentVNode"])("",!0)]),_:2},1024))),128))]),_:1})}var ie={name:"Roller",props:{value:Number,charList:{type:Array,default(){return["0","1","2","3","4","5","6","7","8","9"]}},transition:{type:Number,default:.8}},data(){return{isRollStart:!1,isAnimationEnd:!1}},computed:{},mounted(){setTimeout(()=>{this.isRollStart=!0,setTimeout(()=>{this.isAnimationEnd=!0,this.$emit("animationend",!0)},1e3*this.transition+200)},200)},methods:{getIndex(e,t){return this.isIncludeCharList(e)?t.toString():String(e).trim()?String(e)+String(t):"NULL"+t},isIncludeCharList(e){return-1!=this.charList.indexOf(e)},findCharIndex(e,t){let o=this.charList.indexOf(e);return-1!=o||t?o:0}},destroyed(){}},se=(o("ed55"),ce()(ie,[["render",le],["__scopeId","data-v-7df911d4"]]));const ue=j(localStorage,"cash-creep");String.prototype.capitalize=function(){return this[0].toUpperCase()+this.slice(1)};var de={name:"App",components:{NConfigProvider:y["b"],NDivider:C["a"],NInputGroup:g["a"],NInputGroupLabel:w["a"],NDynamicInput:x["a"],NInput:k["a"],NInputNumber:N["a"],NTimePicker:V["a"],NSelect:E["a"],NIcon:_["a"],IconPlay:z["a"],IconPause:H["a"],IconReset:M["a"],IconCurrencyDollar:U["a"],IconPerson:R["a"],IconAdd:A["a"],IconDraggable:$["a"],IconTrashCan:F["a"],IconDiagram:W["a"],IconTime:J["a"],IconCalendar:G["a"],IconCalendarHeatMap:q["a"],NButton:I["a"],NCheckbox:S["a"],NTag:B["a"],NSpace:D["a"],NModal:P["a"],NCard:T["c"],draggable:v.a,Flip:ae,Roller:se},data(){return{darkTheme:L["a"],costsList:[],costCounter:{runtime:0,value:0},costCounterInterval:null,costCounterTickDelay:1e3,showCostEditor:!1,costEditorElement:null,costElementHover:null,counterStyle:"flip",costIntervals:["yearly","monthly","daily","hourly"]}},computed:{costPerHourTotal(){return this.costsList.filter(e=>e.count&&e.value&&e.interval).map(e=>this.costPerHour(e)*e.count).reduce((e,t)=>e+t,0)},costCounterValueInt(){return Math.round(this.costCounter.value)},_costCounterRuntime_timePicker:{get(){return this.costCounter.runtime-36e5},set(e){this.costCounter.runtime=e+36e5}}},watch:{costsList:{deep:!0,handler(e){ue.costsList=e}},costCounter:{deep:!0,handler(e){ue.costCounter=e}}},methods:{startCostCounter(){this.stopCostCounter(),this.costCounterInterval=setInterval(this.costCounterTick,this.costCounterTickDelay)},stopCostCounter(){this.costCounterInterval&&(clearInterval(this.costCounterInterval),this.costCounterInterval=null)},resetCostCounter(){this.costCounter={runtime:0,value:0}},costCounterTick(){this.costCounter.runtime+=this.costCounterTickDelay,this.costCounter.value+=this.costPerHourTotal/60/60*(this.costCounterTickDelay/1e3)},addCost(e){return this.costsList.push(Object.assign({id:window.performance.now()*Math.pow(10,10),count:0,value:0,interval:"hourly",workingHours:0,workingDays:0,daysOff:0},e))},costPerHour(e){switch(e.interval){case"hourly":return e.value;case"daily":return e.workingHours>0?e.value/e.workingHours:0;case"yearly":case"monthly":{const t=e.daysOff/e.workingDays;let o=this.weeksPerInterval(e.interval)-t;return o>0&&e.workingHours>0?e.value/o/e.workingHours:0}}throw Error("Unexpected interval: "+e.interval)},weeksPerInterval(e){switch(e){case"yearly":return 365/7;case"monthly":return 365/12/7;case"daily":return 1/7;case"hourly":return 1/7/24;default:throw Error("Unexpected interval: "+e)}},cycleCounterStyle(){switch(this.counterStyle){case"flip":this.counterStyle="roll";break;case"roll":this.counterStyle="flip";break;default:this.counterStyle="flip";break}}},created(){this.costCounter=ue.costCounter||this.costCounter,this.costsList=ue.costsList||this.costsList,0===this.costsList.length&&this.addCost({name:"Whimsical Unicorn",value:99e3,interval:"yearly",workingHours:40,workingDays:5,daysOff:24,count:42})},beforeDestroy(){this.stopCostCounter()}},be=(o("884a"),ce()(de,[["render",h]]));Object(r["createApp"])(be).mount("#app")},6664:function(e,t,o){},"7b5a":function(e,t,o){},"884a":function(e,t,o){"use strict";o("6664")},a123:function(e,t,o){},d049:function(e,t,o){e.exports=o.p+"img/meeting-bubbles.c8866770.png"},ed55:function(e,t,o){"use strict";o("7b5a")}});
//# sourceMappingURL=app.4a366c90.js.map