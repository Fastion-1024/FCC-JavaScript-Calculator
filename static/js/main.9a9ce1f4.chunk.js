(this["webpackJsonpfcc-javascript-calculator"]=this["webpackJsonpfcc-javascript-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(10),i=a.n(c),o=a(0),O=a(8),_=a(6),s=a(2),u=a.n(s),T={ADD_DIGIT_TO_INPUT1:"ADD_DIGIT_TO_INPUT1",ADD_DIGIT_TO_INPUT2:"ADD_DIGIT_TO_INPUT2",UPDATE_OPERATOR:"UPDATE_OPERATOR",ADD_DECIMAL_TO_INPUT1:"ADD_DECIMAL_TO_INPUT1",ADD_DECIMAL_TO_INPUT2:"ADD_DECIMAL_TO_INPUT2",UPDATE_NEGATIVE_FLAG:"UPDATE_NEGATIVE_FLAG",UPDATE_INPUT1_TO_NEGATIVE:"UPDATE_INPUT1_TO_NEGATIVE",UPDATE_INPUT1_TO_POSITIVE:"UPDATE_INPUT1_TO_POSITIVE",TOGGLE_INPUT1_SIGN:"TOGGLE_INPUT1_SIGN",UPDATE_INPUT2_TO_NEGATIVE:"UPDATE_INPUT2_TO_NEGATIVE",UPDATE_INPUT2_TO_POSITIVE:"UPDATE_INPUT2_TO_POSITIVE",TOGGLE_INPUT2_SIGN:"TOGGLE_INPUT2_SIGN",CALCULATE_ANSWER:"CALCULATE_ANSWER",APPLY_OPERATION_TO_ANSWER:"APPLY_OPERATION_TO_ANSWER",CALCULATE_LAST_OPERATION_ON_ANSWER:"CALCULATE_LAST_OPERATION_ON_ANSWER",CLEAR_INPUT1:"CLEAR_INPUT1",CLEAR_INPUT2:"CLEAR_INPUT2",REMOVE_CHAR_FROM_INPUT1:"REMOVE_CHAR_FROM_INPUT1",REMOVE_CHAR_FROM_INPUT2:"REMOVE_CHAR_FROM_INPUT2",CLEAR_CALCULATOR:"CLEAR_CALCULATOR",ADD_ITEM_TO_HISTORY:"ADD_ITEM_TO_HISTORY",REMOVE_ITEM_FROM_HISTORY:"REMOVE_ITEM_FROM_HISTORY",RESTORE_ITEM_FROM_HISTORY:"RESTORE_ITEM_FROM_HISTORY",CLEAR_HISTORY:"CLEAR_HISTORY",ADD_TO_MEMORY_ITEM:"ADD_TO_MEMORY_ITEM",SUBTRACT_FROM_MEMORY_ITEM:"SUBTRACT_FROM_MEMORY_ITEM",REMOVE_ITEM_FROM_MEMORY:"REMOVE_ITEM_FROM_MEMORY",CLEAR_MEMORY:"CLEAR_MEMORY",STORE_VALUE_TO_MEMORY:"STORE_VALUE_TO_MEMORY",RECALL_VALUE_FROM_MEMORY:"RECALL_VALUE_FROM_MEMORY",UPDATE_SIDE_CONTAINER_VISIBILITY:"UPDATE_SIDE_CONTAINER_VISIBILITY"},p=function(e,t){switch(console.log(t.type,"-",t.payload),t.type){case T.ADD_DIGIT_TO_INPUT1:return e.input1.split("").includes(".")?Object(o.a)(Object(o.a)({},e),{},{input1:e.input1+t.payload}):Object(o.a)(Object(o.a)({},e),{},{input1:"0"===e.input1.charAt(0)?t.payload:e.input1+t.payload});case T.ADD_DIGIT_TO_INPUT2:return e.input2.split("").includes(".")?Object(o.a)(Object(o.a)({},e),{},{input2:e.input2+t.payload}):Object(o.a)(Object(o.a)({},e),{},{input2:"0"===e.input2.charAt(0)?t.payload:e.input2+t.payload});case T.UPDATE_OPERATOR:return Object(o.a)(Object(o.a)({},e),{},{operator:t.payload});case T.ADD_DECIMAL_TO_INPUT1:return e.input1.split("").includes(".")?Object(o.a)({},e):Object(o.a)(Object(o.a)({},e),{},{input1:e.input1?e.input1+".":"0."});case T.ADD_DECIMAL_TO_INPUT2:return e.input2.split("").includes(".")?Object(o.a)({},e):Object(o.a)(Object(o.a)({},e),{},{input2:e.input2?e.input2+".":"0."});case T.UPDATE_NEGATIVE_FLAG:return Object(o.a)(Object(o.a)({},e),{},{isNegative:t.payload});case T.UPDATE_INPUT1_TO_NEGATIVE:return u.a.isNegative(e.input1)?{state:e}:Object(o.a)(Object(o.a)({},e),{},{input1:u.a.string(u.a.unaryMinus(e.input1))});case T.UPDATE_INPUT1_TO_POSITIVE:return u.a.isNegative(e.input1)?Object(o.a)(Object(o.a)({},e),{},{input1:u.a.string(u.a.unaryMinus(e.input1))}):{state:e};case T.TOGGLE_INPUT1_SIGN:return Object(o.a)(Object(o.a)({},e),{},{input1:u.a.string(u.a.unaryMinus(e.input1))});case T.UPDATE_INPUT2_TO_NEGATIVE:return u.a.isNegative(e.input2)?{state:e}:Object(o.a)(Object(o.a)({},e),{},{input2:u.a.string(u.a.unaryMinus(e.input2))});case T.UPDATE_INPUT2_TO_POSITIVE:return u.a.isNegative(e.input2)?Object(o.a)(Object(o.a)({},e),{},{input2:u.a.string(u.a.unaryMinus(e.input2))}):{state:e};case T.TOGGLE_INPUT2_SIGN:return Object(o.a)(Object(o.a)({},e),{},{input2:u.a.string(u.a.unaryMinus(e.input2))});case T.CALCULATE_ANSWER:if(e.input1&&!e.operator&&!e.input2)return Object(o.a)(Object(o.a)({},e),{},{answer:e.input1});if(e.input1&&e.operator&&!e.input2){var a=u.a.string(u.a.evaluate(e.input1+e.operator+e.input1));return Object(o.a)(Object(o.a)({},e),{},{input2:e.input1,answer:a})}if(e.input1&&e.operator&&e.input2){var n=u.a.string(u.a.evaluate(e.input1+e.operator+e.input2));return Object(o.a)(Object(o.a)({},e),{},{answer:n})}return Object(o.a)({},e);case T.APPLY_OPERATION_TO_ANSWER:return Object(o.a)(Object(o.a)({},e),{},{input1:e.answer,operator:t.payload,input2:"",answer:"",isNegative:!1});case T.CALCULATE_LAST_OPERATION_ON_ANSWER:var r=u.a.string(u.a.evaluate(e.answer+e.operator+e.input2));return Object(o.a)(Object(o.a)({},e),{},{input1:e.answer,answer:r});case T.CLEAR_INPUT1:return Object(o.a)(Object(o.a)({},e),{},{input1:"0"});case T.CLEAR_INPUT2:return Object(o.a)(Object(o.a)({},e),{},{input2:"0"});case T.CLEAR_CALCULATOR:return Object(o.a)(Object(o.a)({},e),{},{input1:"",operator:"",input2:"",answer:"",isNegative:!1});case T.REMOVE_CHAR_FROM_INPUT1:var c=e.input1.slice(0,e.input1.length-1);return Object(o.a)(Object(o.a)({},e),{},{input1:c||"0"});case T.REMOVE_CHAR_FROM_INPUT2:var i=e.input2.slice(0,e.input2.length-1);return Object(o.a)(Object(o.a)({},e),{},{input2:i||"0"});case T.ADD_ITEM_TO_HISTORY:var O={input1:e.input1,operator:e.operator,input2:e.input2,answer:e.answer};return Object(o.a)(Object(o.a)({},e),{},{history:e.history.length<5?[O].concat(Object(_.a)(e.history)):[O].concat(Object(_.a)(e.history.slice(0,e.history.length-1)))});case T.REMOVE_ITEM_FROM_HISTORY:return Object(o.a)(Object(o.a)({},e),{},{history:e.history.filter((function(e,a){return a!==t.payload}))});case T.RESTORE_ITEM_FROM_HISTORY:return Object(o.a)(Object(o.a)({},e),{},{input1:t.payload.input1,operator:t.payload.operator,input2:t.payload.input2,answer:t.payload.answer});case T.CLEAR_HISTORY:return Object(o.a)(Object(o.a)({},e),{},{history:[]});case T.STORE_VALUE_TO_MEMORY:return Object(o.a)(Object(o.a)({},e),{},{memory:e.memory.length<5?[t.payload].concat(Object(_.a)(e.memory)):[t.payload].concat(Object(_.a)(e.memory.slice(0,e.memory.length-1)))});case T.ADD_TO_MEMORY_ITEM:var s=e.memory.slice();return s[t.payload.index]=u.a.string(u.a.evaluate("".concat(e.memory.length?e.memory[t.payload.index]:"0"," + ").concat(t.payload.value))),Object(o.a)(Object(o.a)({},e),{},{memory:s});case T.SUBTRACT_FROM_MEMORY_ITEM:var p=e.memory.slice();return p[t.payload.index]=u.a.string(u.a.evaluate("".concat(e.memory.length?e.memory[t.payload.index]:"0"," - ").concat(t.payload.value))),Object(o.a)(Object(o.a)({},e),{},{memory:p});case T.REMOVE_ITEM_FROM_MEMORY:return Object(o.a)(Object(o.a)({},e),{},{memory:e.memory.filter((function(e,a){return a!==t.payload}))});case T.CLEAR_MEMORY:return Object(o.a)(Object(o.a)({},e),{},{memory:[]});case T.UPDATE_SIDE_CONTAINER_VISIBILITY:return Object(o.a)(Object(o.a)({},e),{},{isSideContainerHidden:t.payload});default:throw new Error("No matching action found!")}},E={DIGIT:"DIGIT",BINARY_OPERATOR:"BINARY_OPERATOR",EQUALS:"EQUALS",DECIMAL:"DECIMAL",FUNCTION:"FUNCTION",MEMORY:"MEMORY"},l=[{id:"memoryClear",value:"MC",type:E.MEMORY},{id:"memoryRecall",value:"MR",type:E.MEMORY},{id:"memoryPlus",value:"M+",type:E.MEMORY},{id:"memorySubtract",value:"M-",type:E.MEMORY},{id:"memoryStore",value:"MS",type:E.MEMORY}],I=[{id:"clear",value:"C",type:E.FUNCTION,eventKey:"Escape"},{id:"clearEntry",value:"CE",type:E.FUNCTION,eventKey:"Delete"},{id:"backspace",value:"<=",type:E.FUNCTION,eventKey:"Backspace"},{id:"divide",value:"/",type:E.BINARY_OPERATOR,eventKey:"/"},{id:"seven",value:"7",type:E.DIGIT,eventKey:"7"},{id:"eight",value:"8",type:E.DIGIT,eventKey:"8"},{id:"nine",value:"9",type:E.DIGIT,eventKey:"9"},{id:"multiply",value:"*",type:E.BINARY_OPERATOR,eventKey:"*"},{id:"four",value:"4",type:E.DIGIT,eventKey:"4"},{id:"five",value:"5",type:E.DIGIT,eventKey:"5"},{id:"six",value:"6",type:E.DIGIT,eventKey:"6"},{id:"subtract",value:"-",type:E.BINARY_OPERATOR,eventKey:"-"},{id:"one",value:"1",type:E.DIGIT,eventKey:"1"},{id:"two",value:"2",type:E.DIGIT,eventKey:"2"},{id:"three",value:"3",type:E.DIGIT,eventKey:"3"},{id:"add",value:"+",type:E.BINARY_OPERATOR,eventKey:"+"},{id:"plusMinus",value:"+/-",type:E.FUNCTION},{id:"zero",value:"0",type:E.DIGIT,eventKey:"0"},{id:"decimal",value:".",type:E.DECIMAL,eventKey:"."},{id:"equals",value:"=",type:E.EQUALS,eventKey:"Enter"}],y=a(1),A=r.a.createContext(),R={input1:"",operator:"",input2:"",answer:"",isNegative:!1,history:[],memory:[],isSideContainerHidden:!0},d=function(){return Object(n.useContext)(A)},b=function(e){var t=e.children,a=Object(n.useReducer)(p,R),r=Object(O.a)(a,2),c=r[0],i=r[1],_=function(e){switch(e.type){case E.DIGIT:s(e.value);break;case E.BINARY_OPERATOR:u(e.value);break;case E.DECIMAL:l();break;case E.EQUALS:d();break;case E.FUNCTION:b(e.id);break;case E.MEMORY:j(e.id)}},s=function(e){c.answer?(i({type:T.CLEAR_CALCULATOR}),i({type:T.ADD_DIGIT_TO_INPUT1,payload:e})):c.operator?(i({type:T.ADD_DIGIT_TO_INPUT2,payload:e}),c.isNegative&&(i({type:T.UPDATE_NEGATIVE_FLAG,payload:!1}),i({type:T.UPDATE_INPUT2_TO_NEGATIVE,payload:!1}))):i({type:T.ADD_DIGIT_TO_INPUT1,payload:e})},u=function(e){c.input1?c.operator&&!c.input2?"-"===e?i({type:T.UPDATE_NEGATIVE_FLAG,payload:!0}):(i({type:T.UPDATE_OPERATOR,payload:e}),c.isNegative&&i({type:T.UPDATE_NEGATIVE_FLAG,payload:!1})):c.input1&&c.operator&&c.input2?(i({type:T.CALCULATE_ANSWER}),i({type:T.ADD_ITEM_TO_HISTORY}),i({type:T.APPLY_OPERATION_TO_ANSWER,payload:e})):i({type:T.UPDATE_OPERATOR,payload:e}):(i({type:T.ADD_DIGIT_TO_INPUT1,payload:"0"}),i({type:T.UPDATE_OPERATOR,payload:e}))},l=function(){c.answer?(i({type:T.CLEAR_CALCULATOR}),i({type:T.ADD_DECIMAL_TO_INPUT1})):c.operator?i({type:T.ADD_DECIMAL_TO_INPUT2}):i({type:T.ADD_DECIMAL_TO_INPUT1})},d=function(){c.isNegative&&i({type:T.UPDATE_NEGATIVE_FLAG,payload:!1}),c.answer?(i({type:T.CALCULATE_LAST_OPERATION_ON_ANSWER}),i({type:T.ADD_ITEM_TO_HISTORY})):(i({type:T.CALCULATE_ANSWER}),i({type:T.ADD_ITEM_TO_HISTORY}))},b=function(e){switch(e){case"clear":i({type:T.CLEAR_CALCULATOR});break;case"clearEntry":c.answer&&i({type:T.CLEAR_CALCULATOR}),c.operator?i({type:T.CLEAR_INPUT2}):i({type:T.CLEAR_INPUT1});break;case"backspace":c.answer?(i({type:T.CLEAR_CALCULATOR}),i({type:T.ADD_DIGIT_TO_INPUT1,payload:c.answer})):c.operator?i({type:T.REMOVE_CHAR_FROM_INPUT2}):i({type:T.REMOVE_CHAR_FROM_INPUT1});break;case"plusMinus":if(c.answer)return;!c.operator&&c.input1?i({type:T.TOGGLE_INPUT1_SIGN}):c.operator&&c.input2&&i({type:T.TOGGLE_INPUT2_SIGN})}},j=function(e){var t=c.answer?c.answer:c.operator&&c.input2?c.input2:!c.operator&&c.input1?c.input1:"0";switch(e){case"memoryClear":M();break;case"memoryStore":i({type:T.STORE_VALUE_TO_MEMORY,payload:t});break;case"memoryRecall":N(0);break;case"memoryPlus":i({type:T.ADD_TO_MEMORY_ITEM,payload:{index:0,value:t}});break;case"memorySubtract":i({type:T.SUBTRACT_FROM_MEMORY_ITEM,payload:{index:0,value:t}})}},N=function(e){c.answer||!c.operator?(i({type:T.CLEAR_CALCULATOR}),i({type:T.ADD_DIGIT_TO_INPUT1,payload:c.memory[e]})):c.operator&&(i({type:T.CLEAR_INPUT2}),i({type:T.ADD_DIGIT_TO_INPUT2,payload:c.memory[e]}))},M=function(){c.memory.length>0&&i({type:T.CLEAR_MEMORY})};Object(n.useEffect)((function(){return document.addEventListener("keydown",m),function(){document.removeEventListener("keydown",m)}}),[c]);var m=function(e){var t=I.find((function(t){return t.eventKey===e.key}));t&&(e.preventDefault(),_(t))};return Object(y.jsx)(A.Provider,{value:Object(o.a)(Object(o.a)({},c),{},{handleClick:_,clearHistory:function(){c.history.length>0&&i({type:T.CLEAR_HISTORY})},removeItemFromHistory:function(e){i({type:T.REMOVE_ITEM_FROM_HISTORY,payload:e})},restoreItemFromHistory:function(e){i({type:T.RESTORE_ITEM_FROM_HISTORY,payload:e})},clearMemory:M,removeItemFromMemory:function(e,t){e.stopPropagation(),i({type:T.REMOVE_ITEM_FROM_MEMORY,payload:t})},memoryPlusCurrentItem:function(e,t){e.stopPropagation();var a=c.answer?c.answer:c.operator&&c.input2?c.input2:!c.operator&&c.input1?c.input1:"0";i({type:T.ADD_TO_MEMORY_ITEM,payload:{index:t,value:a}})},memorySubtractCurrentItem:function(e,t){e.stopPropagation();var a=c.answer?c.answer:c.operator&&c.input2?c.input2:!c.operator&&c.input1?c.input1:"0";i({type:T.SUBTRACT_FROM_MEMORY_ITEM,payload:{index:t,value:a}})},recallMemoryItem:N,toggleSideContainerVisibility:function(){i({type:T.UPDATE_SIDE_CONTAINER_VISIBILITY,payload:!c.isSideContainerHidden})}}),children:t})},j=a(4),N=(a(16),function(){var e=d(),t=e.input1,a=e.operator,n=e.input2,r=e.answer,c=e.isNegative,i=e.toggleSideContainerVisibility;return Object(y.jsxs)("div",{className:"display",children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("button",{className:"toggle-btn corner-borders top-left bottom-right",onClick:i,children:[Object(y.jsx)("span",{className:"visually-hidden",children:"Toggle History / Memory"}),Object(y.jsx)(j.a,{})]}),Object(y.jsx)("h3",{id:"formula",children:r?"".concat(t," ").concat(a," ").concat(n," ="):t&&a?"".concat(t," ").concat(a):void 0})]}),Object(y.jsx)("h2",{id:"display",children:"".concat(c?"-":"").concat(r||(t?a&&n?n:t:"0"))})]})}),M=(a(17),function(){var e=d().handleClick;return Object(y.jsxs)("div",{className:"keypad",children:[Object(y.jsx)("div",{className:"btn-container-memory",children:l.map((function(t){return Object(y.jsx)("button",{id:t.id,className:"btn-memory corner-borders top-left bottom-right",onClick:function(){return e(t)},children:t.value},t.id)}))}),Object(y.jsx)("div",{className:"btn-container-default",children:I.map((function(t){return Object(y.jsx)("button",{id:t.id,className:"btn-keypad",onClick:function(){return e(t)},children:t.value},t.id)}))})]})}),m=(a(18),function(){var e=d(),t=e.history,a=e.clearHistory,n=(e.removeItemFromHistory,e.restoreItemFromHistory);return Object(y.jsxs)("section",{className:"history-container",children:[Object(y.jsx)("div",{className:"history-item-container",children:t.map((function(e,t){var a=e.input1,r=e.operator,c=e.input2,i=e.answer;return Object(y.jsxs)("div",{className:"history-item",onClick:function(){return n(e)},children:[Object(y.jsx)("p",{children:"".concat(a," ").concat(r," ").concat(c," =")}),Object(y.jsx)("p",{children:i})]},t)}))}),Object(y.jsx)("div",{className:"history-footer",children:Object(y.jsxs)("button",{className:"delete-btn corner-borders top-left bottom-right",onClick:a,children:[Object(y.jsx)("span",{className:"visually-hidden",children:"Delete History"}),Object(y.jsx)(j.b,{})]})})]})}),D=(a(19),function(){var e=d(),t=e.memory,a=e.clearMemory,n=e.removeItemFromMemory,r=e.memoryPlusCurrentItem,c=e.memorySubtractCurrentItem,i=e.recallMemoryItem;return Object(y.jsxs)("section",{className:"memory-container",children:[Object(y.jsx)("div",{className:"memory-item-container",children:t.map((function(e,t){return Object(y.jsxs)("div",{className:"memory-item",onClick:function(){return i(t)},children:[Object(y.jsx)("p",{children:e}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"memory-btn",onClick:function(e){return n(e,t)},children:"MC"}),Object(y.jsx)("button",{className:"memory-btn",onClick:function(e){return r(e,t)},children:"M+"}),Object(y.jsx)("button",{className:"memory-btn",onClick:function(e){return c(e,t)},children:"M-"})]})]},t)}))}),Object(y.jsx)("div",{className:"memory-footer",children:Object(y.jsxs)("button",{className:"delete-btn",onClick:a,children:[Object(y.jsx)("span",{className:"visually-hidden",children:"Delete Memory"}),Object(y.jsx)(j.b,{})]})})]})}),v=(a(20),function(e){var t=e.children,a=e.headers,r=Object(n.useState)(null),c=Object(O.a)(r,2),i=c[0],o=c[1],_=Object(n.useRef)([]),s=function(e){_.current.forEach((function(t,a){e!==a&&t.classList.remove("active"),e===a&&t.classList.add("active")}))};return Object(n.useEffect)((function(){a.length>0&&t.length>0&&(o(t[0]),s(0))}),[]),Object(y.jsxs)("section",{className:"tab-container",children:[Object(y.jsx)("div",{className:"tab-headers",children:a.map((function(e,a){return Object(y.jsx)("button",{ref:function(e){return _.current[a]=e},onClick:function(){return o(t[e=a]),void s(e);var e},children:e},a)}))}),Object(y.jsx)("div",{className:"tab-children",children:i})]})}),P=(a(21),function(){var e=d().isSideContainerHidden;return Object(y.jsxs)("section",{className:"calculator-container",children:[Object(y.jsxs)("div",{className:"calculator",children:[Object(y.jsx)(N,{}),Object(y.jsx)(M,{})]}),e||Object(y.jsxs)(v,{headers:["History","Memory"],children:[Object(y.jsx)(m,{}),Object(y.jsx)(D,{})]})]})});a(22);var C=function(){return Object(y.jsx)("main",{children:Object(y.jsx)(P,{})})};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(b,{children:Object(y.jsx)(C,{})})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9a9ce1f4.chunk.js.map