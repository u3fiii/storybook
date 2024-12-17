import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as l,r as w}from"./index-RYns6xqu.js";import{a as S}from"./arrow-up-1-bold-DB1FVJYB.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=l.createContext&&l.createContext(j),T=["attr","size","title"];function C(n,t){if(n==null)return{};var e=k(n,t),o,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)o=s[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(e[o]=n[o])}return e}function k(n,t){if(n==null)return{};var e={};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){if(t.indexOf(o)>=0)continue;e[o]=n[o]}return e}function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},p.apply(this,arguments)}function v(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,o)}return e}function m(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?v(Object(e),!0).forEach(function(o){z(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}function z(n,t,e){return t=N(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function N(n){var t=P(n,"string");return typeof t=="symbol"?t:t+""}function P(n,t){if(typeof n!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function D(n){return n&&n.map((t,e)=>l.createElement(t.tag,m({key:e},t.attr),D(t.child)))}function h(n){return t=>l.createElement(A,p({attr:m({},n.attr)},t),D(n.child))}function A(n){var t=e=>{var{attr:o,size:i,title:s}=n,u=C(n,T),a=i||e.size||"1em",c;return e.className&&(c=e.className),n.className&&(c=(c?c+" ":"")+n.className),l.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:c,style:m(m({color:n.color||e.color},e.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),n.children)};return g!==void 0?l.createElement(g.Consumer,null,e=>t(e)):t(j)}function E(n){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function f(n){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(n)}function I(n){return h({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(n)}function L(n){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}const _="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.25%2022C17.75%2022%2022.25%2017.5%2022.25%2012C22.25%206.5%2017.75%202%2012.25%202C6.75%202%202.25%206.5%202.25%2012C2.25%2017.5%206.75%2022%2012.25%2022Z'%20stroke='%23D5D8D7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.25%2012H16.25'%20stroke='%23D5D8D7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.25%2016V8'%20stroke='%23D5D8D7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",O=()=>{const[n,t]=w.useState(!1),[e,o]=w.useState(null),i=[{icon:r.jsx(I,{size:18}),label:"اخبار"},{icon:r.jsx(L,{size:18}),label:"تحلیل"},{icon:r.jsx(f,{size:18}),label:"آموزش"},{icon:r.jsx(f,{size:18}),label:"مقاله"},{icon:r.jsx(f,{size:18}),label:"تنظیمات"}],s=()=>{t(!n)},u=a=>{o(a),t(!1)};return r.jsx("div",{className:"dropdown-wrapper",children:r.jsxs("div",{className:"dropdown",children:[r.jsxs("button",{className:"dropdown-toggle",onClick:s,children:[r.jsxs("div",{className:"right-part",children:[r.jsx("span",{className:"dropdown-icon",children:e?e.icon:r.jsx("img",{src:_,alt:"add-circle"})}),e?e.label:"یک گزینه را انتخاب کنید"]}),r.jsx("span",{className:`dropdown-arrow ${n?"open":""}`,children:r.jsx("img",{src:S})})]}),n&&r.jsx("div",{className:"dropdown-menu",children:i.map((a,c)=>r.jsxs("div",{className:"dropdown-item",onClick:()=>u(a),children:[r.jsxs("div",{className:"dropdown-item-right",children:[r.jsx("span",{className:"dropdown-icon",children:a.icon}),r.jsx("span",{className:"dropdown-label",children:a.label})]}),(e==null?void 0:e.label)===a.label&&r.jsx("span",{className:"check-icon",children:r.jsx(E,{size:16})})]},c))})]})})};O.__docgenInfo={description:"",methods:[],displayName:"DropDown"};const V={title:"DropDown",component:O},d={args:{},parameters:{docs:{description:{story:`
### DropDown Component with Animation Focus

The \`DropDown\` component includes animations for both the arrow icon and the dropdown menu. This story focuses on explaining how these animations work.

### Arrow Icon Animation

The arrow icon rotates when the dropdown is opened or closed. This is achieved using a CSS transition on the \`transform\` property.

#### CSS

\`\`\`scss
.dropdown-arrow {
  margin-left: auto;
  transition: transform 0.2s ease-out;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.open {
    transform: rotate(180deg);
    transition: transform 0.2s ease-out;
  }
}
\`\`\`

#### Explanation

- **Initial State**: The arrow icon is initially in its default position.
- **Transition**: The \`transition\` property is used to animate the \`transform\` property over 0.3 seconds with an \`ease\` timing function.
- **Open State**: When the dropdown is open, the \`open\` class is added, which sets the \`transform\` property to \`rotate(180deg)\`, rotating the arrow.

### Dropdown Menu Animation

The dropdown menu slides down and fades in when it is opened. This is achieved using a CSS animation defined with keyframes.

#### CSS

\`\`\`scss
.dropdown-menu {
  color: $stone15;
  background-color: $gray15;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 8px;
  border: 1px solid $gray11;
  z-index: 1000;
  width: 100%;
  margin-top: 5px;
  overflow: hidden;
  background-color: #121212;
  animation: dropDownAnimation 0.3s cubic-bezier(0, 0.73, 0.51, 1.03);
}

@keyframes dropDownAnimation {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

#### Explanation

- **Initial State**: The dropdown menu starts with \`opacity: 0\` and \`transform: translateY(-12px)\`, making it invisible and positioned slightly above its final position.
- **Animation**: The \`animation\` property applies the \`dropDownAnimation\` keyframes over 0.3 seconds with a custom cubic-bezier timing function for a smooth effect.
- **Keyframes**:
  - **From**: The menu is invisible and positioned 12 pixels above its final position.
  - **To**: The menu becomes fully visible (\`opacity: 1\`) and moves to its final position (\`transform: translateY(0)\`).
        `}},layout:"centered"},tags:["autodocs"]};var b,y,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`
### DropDown Component with Animation Focus

The \\\`DropDown\\\` component includes animations for both the arrow icon and the dropdown menu. This story focuses on explaining how these animations work.

### Arrow Icon Animation

The arrow icon rotates when the dropdown is opened or closed. This is achieved using a CSS transition on the \\\`transform\\\` property.

#### CSS

\\\`\\\`\\\`scss
.dropdown-arrow {
  margin-left: auto;
  transition: transform 0.2s ease-out;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.open {
    transform: rotate(180deg);
    transition: transform 0.2s ease-out;
  }
}
\\\`\\\`\\\`

#### Explanation

- **Initial State**: The arrow icon is initially in its default position.
- **Transition**: The \\\`transition\\\` property is used to animate the \\\`transform\\\` property over 0.3 seconds with an \\\`ease\\\` timing function.
- **Open State**: When the dropdown is open, the \\\`open\\\` class is added, which sets the \\\`transform\\\` property to \\\`rotate(180deg)\\\`, rotating the arrow.

### Dropdown Menu Animation

The dropdown menu slides down and fades in when it is opened. This is achieved using a CSS animation defined with keyframes.

#### CSS

\\\`\\\`\\\`scss
.dropdown-menu {
  color: $stone15;
  background-color: $gray15;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 8px;
  border: 1px solid $gray11;
  z-index: 1000;
  width: 100%;
  margin-top: 5px;
  overflow: hidden;
  background-color: #121212;
  animation: dropDownAnimation 0.3s cubic-bezier(0, 0.73, 0.51, 1.03);
}

@keyframes dropDownAnimation {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\\\`\\\`\\\`

#### Explanation

- **Initial State**: The dropdown menu starts with \\\`opacity: 0\\\` and \\\`transform: translateY(-12px)\\\`, making it invisible and positioned slightly above its final position.
- **Animation**: The \\\`animation\\\` property applies the \\\`dropDownAnimation\\\` keyframes over 0.3 seconds with a custom cubic-bezier timing function for a smooth effect.
- **Keyframes**:
  - **From**: The menu is invisible and positioned 12 pixels above its final position.
  - **To**: The menu becomes fully visible (\\\`opacity: 1\\\`) and moves to its final position (\\\`transform: translateY(0)\\\`).
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const Y=["Base"];export{d as Base,Y as __namedExportsOrder,V as default};
