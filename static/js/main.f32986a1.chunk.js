(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports={button:"Button_button__1kiFv"}},15:function(e,t,a){e.exports=a(27)},2:function(e,t,a){e.exports={counter:"counter_counter__2Suoj",textField:"counter_textField__GVqd0",knopki:"counter_knopki__4vNKA",black:"counter_black__3ZC7n",red:"counter_red__1K4Qs"}},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),u=a.n(n),r=a(6),c=a.n(r),l=(a(20),a(14)),o=a(7),s=a.n(o),i=a(5),m=a.n(i),v=a(3),E=a(1),d={maxValue:1,startValue:0,value:0,activeMax:!0,activeStart:!0},V=function(){return{type:"RESET-VALUE"}},p=function(e){return{type:"ADD-VALUE",value:e}},b=function(e){return{type:"SET-START-VALUE",startValue:e}},f=function(e){return{type:"SET-MAX-VALUE",value:e}},S=function(e){return{type:"SET-ACTIVE-MAX-VALUE",value:e}},x=function(e){return{type:"SET-ACTIVE-START-VALUE",value:e}},_=function(e){return{type:"SET-VALUES",value:e}};function A(){var e=Object(E.b)();return function(t){return e(t)}}var T=function(e){var t=A();0===e.startValue&&e.maxValue>0||e.maxValue>0&&e.maxValue>e.startValue&&e.startValue>=0?e.setText("enter value and press 'set'"):e.setText("Incorrect value!");return u.a.createElement("div",null,u.a.createElement("div",{className:m.a.setPage},u.a.createElement("div",{className:m.a.inputs},u.a.createElement("div",null,u.a.createElement("span",null,"Start value:"),u.a.createElement("input",{type:"number",onFocus:function(){return e.setActiveStart(!0)},value:e.startValue,onChange:function(e){return function(e){var a=Number(e.currentTarget.value);t(_(a)),t(x(!0)),t(b(a))}(e)}})),u.a.createElement("div",null,u.a.createElement("span",null,"Maximum value:"),u.a.createElement("input",{type:"number",onFocus:function(){return e.setActiveMax(!0)},value:e.maxValue,onChange:function(e){return function(e){var a=Number(e.currentTarget.value);t(f(a)),t(S(!0))}(e)}}))),u.a.createElement("div",{className:m.a.button},u.a.createElement("button",{className:m.a.set,onClick:function(){return localStorage.setItem("max",e.maxValue.toString()),localStorage.setItem("min",e.startValue.toString()),e.setValueComponent(e.startValue),e.setActiveStart(!1),void e.setActiveMax(!1)}},"Set"))))},g=a(2),h=a.n(g),k=function(e){return e.counter},M=a(13),N=a.n(M),j=function(e){var t=Object(E.c)(k).value;return u.a.createElement("div",null,u.a.createElement("button",{onClick:e.buttonFunction,disabled:e.disabledButton(t),className:N.a.button},e.title))},O=function(e){return u.a.createElement("div",{className:h.a.counter},u.a.createElement("div",{className:h.a.textField},e.startValue<0||e.maxValue<0||e.activeMax||e.activeStart?u.a.createElement("div",{className:e.value===e.maxValue?h.a.red:h.a.black},e.text):u.a.createElement("div",{className:e.value===e.maxValue?h.a.red:h.a.black},e.value)),u.a.createElement("div",{className:h.a.knopki},u.a.createElement(j,{buttonFunction:e.addValue,disabledButton:e.disabledIncButton,title:"Inc"}),u.a.createElement(j,{buttonFunction:e.resetValue,disabledButton:e.disabledResButton,title:"Reset"})))},I=localStorage.getItem("min"),U=localStorage.getItem("max");var y=function(){var e=A();Object(n.useEffect)((function(){I&&U&&(e(b(+I)),e(f(+U)))}),[]);var t=Object(E.c)(k),a=t.value,r=t.activeStart,c=t.activeMax,o=t.startValue,i=t.maxValue,m=Object(n.useState)("enter value and press 'set'"),v=Object(l.a)(m,2),d=v[0],g=v[1];return u.a.createElement("div",{className:s.a.schetchik},u.a.createElement("div",{className:s.a.set},u.a.createElement(T,{setValueComponent:function(){e(_(a))},setStartValueComponent:function(t){e(b(t))},setMaxValueComponent:function(t){e(f(t))},maxValue:i,startValue:o,setActiveMax:function(t){e(S(t))},setActiveStart:function(t){e(x(t))},setText:g})),u.a.createElement("div",{className:s.a.counter},u.a.createElement(O,{value:a,maxValue:i,addValue:function(){a>=o&&a<=i&&e(p(a))},resetValue:function(){e(V())},startValue:o,activeMax:c,activeStart:r,text:d,disabledIncButton:function(e){return!(e>=0&&e<i&&e>=o&&!c&&!r)},disabledResButton:function(e){return e<=0}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(4),C=Object(L.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET-VALUE":return Object(v.a)({},e,{value:0});case"ADD-VALUE":return Object(v.a)({},e,{value:t.value+1});case"SET-START-VALUE":return Object(v.a)({},e,{startValue:t.startValue});case"SET-MAX-VALUE":return Object(v.a)({},e,{maxValue:t.value});case"SET-ACTIVE-MAX-VALUE":return Object(v.a)({},e,{activeMax:t.value});case"SET-ACTIVE-START-VALUE":return Object(v.a)({},e,{activeStart:t.value});case"SET-VALUES":var a=Object(v.a)({},e);return localStorage.setItem("max",a.maxValue.toString()),localStorage.setItem("min",a.startValue.toString()),a.value=t.value,a.activeStart=!1,a.activeMax=!1,a;default:return e}}}),w=Object(L.c)(C);window.store=w,c.a.render(u.a.createElement(E.a,{store:w},u.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={setPage:"set_setPage__2DeKq",set:"set_set__wqM8e",button:"set_button__2MaWO",inputs:"set_inputs__ES_fE"}},7:function(e,t,a){e.exports={schetchik:"App_schetchik__1nmSp",counter:"App_counter__2eGEU",set:"App_set__2xFN0"}}},[[15,1,2]]]);
//# sourceMappingURL=main.f32986a1.chunk.js.map