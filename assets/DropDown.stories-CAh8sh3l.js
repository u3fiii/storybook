import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as l,r as h}from"./index-RYns6xqu.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=l.createContext&&l.createContext(j),C=["attr","size","title"];function E(e,t){if(e==null)return{};var n=N(e,t),o,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)o=c[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function N(e,t){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(o){S(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function S(e,t,n){return t=L(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=z(e,"string");return typeof t=="symbol"?t:t+""}function z(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O(e){return e&&e.map((t,n)=>l.createElement(t.tag,d({key:n},t.attr),O(t.child)))}function u(e){return t=>l.createElement(_,m({attr:d({},e.attr)},t),O(e.child))}function _(e){var t=n=>{var{attr:o,size:a,title:c}=e,f=E(e,C),i=a||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),l.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,f,{className:s,style:d(d({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return g!==void 0?l.createElement(g.Consumer,null,n=>t(n)):t(j)}function v(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function w(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(e)}function B(e){return u({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function I(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const P=()=>{const[e,t]=h.useState(!1),[n,o]=h.useState(null),a=[{icon:r.jsx(B,{}),label:"Home"},{icon:r.jsx(I,{}),label:"Profile"},{icon:r.jsx(w,{}),label:"Settings"},{icon:r.jsx(w,{}),label:"Settings"},{icon:r.jsx(w,{}),label:"Settings"}],c=()=>{t(!e)},f=i=>{o(i),t(!1)};return r.jsx("div",{className:"dropdown-wrapper",children:r.jsxs("div",{className:"dropdown",children:[r.jsxs("button",{className:"dropdown-toggle",onClick:c,children:[r.jsxs("div",{className:"right-part",children:[r.jsx("span",{className:"dropdown-icon",children:n?n.icon:r.jsx(v,{})}),n?n.label:"یک گزینه را انتخاب کنید"]}),r.jsx("span",{className:`dropdown-arrow ${e?"open":""}`,children:r.jsx(v,{})})]}),e&&r.jsx("div",{className:"dropdown-menu",children:a.map((i,s)=>r.jsxs("div",{className:"dropdown-item",onClick:()=>f(i),children:[r.jsx("span",{className:"dropdown-icon",children:i.icon}),r.jsx("span",{className:"dropdown-label",children:i.label})]},s))})]})})};P.__docgenInfo={description:"",methods:[],displayName:"DropDown"};const T={title:"DropDown",component:P},p={args:{},parameters:{docs:{description:{story:`
### DropDown Component

The \`DropDown\` component is a picker that displays a dropdown menu with a few items when clicked. Each item has an icon and a label.

### Usage

To use the \`DropDown\` component, simply import it and include it in your JSX:

\`\`\`tsx
import DropDown from "../components/DropDown";

const MyComponent = () => (
  <div>
    <DropDown />
  </div>
);
\`\`\`

### Example

Below is an example of the \`DropDown\` component in action. Click on the dropdown to see the items:

\`\`\`tsx
import React from "react";
import DropDown from "../components/DropDown";

export const DropDownExample = () => <DropDown />;
\`\`\`
        `}},layout:"centered"},tags:["autodocs"]};var x,b,y;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`
### DropDown Component

The \\\`DropDown\\\` component is a picker that displays a dropdown menu with a few items when clicked. Each item has an icon and a label.

### Usage

To use the \\\`DropDown\\\` component, simply import it and include it in your JSX:

\\\`\\\`\\\`tsx
import DropDown from "../components/DropDown";

const MyComponent = () => (
  <div>
    <DropDown />
  </div>
);
\\\`\\\`\\\`

### Example

Below is an example of the \\\`DropDown\\\` component in action. Click on the dropdown to see the items:

\\\`\\\`\\\`tsx
import React from "react";
import DropDown from "../components/DropDown";

export const DropDownExample = () => <DropDown />;
\\\`\\\`\\\`
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const k=["Base"];export{p as Base,k as __namedExportsOrder,T as default};
