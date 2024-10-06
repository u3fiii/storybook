import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const l="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.334%2032H42.6673'%20stroke='%2300D890'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M32%2042.6673V21.334'%20stroke='%2300D890'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M24.0007%2058.6673H40.0007C53.334%2058.6673%2058.6673%2053.334%2058.6673%2040.0007V24.0007C58.6673%2010.6673%2053.334%205.33398%2040.0007%205.33398H24.0007C10.6673%205.33398%205.33398%2010.6673%205.33398%2024.0007V40.0007C5.33398%2053.334%2010.6673%2058.6673%2024.0007%2058.6673Z'%20stroke='%2300D890'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",c="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7074_87803)'%3e%3cpath%20d='M7%2017L17%207'%20stroke='%23818383'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17%2017L7%207'%20stroke='%23818383'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7074_87803'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20width='352'%20height='150'%20viewBox='0%200%20352%20150'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='351'%20height='149'%20rx='3.5'%20fill='%239F3DFB'%20fill-opacity='0.09'/%3e%3crect%20x='0.5'%20y='0.5'%20width='351'%20height='149'%20rx='3.5'%20stroke='%239F3DFB'%20stroke-dasharray='4%204'/%3e%3cpath%20d='M170%2080.84H182V68.84H170V80.84Z'%20fill='%239F3DFB'/%3e%3c/svg%3e",a=({artwork:o="with-artwork",buttons:n="two-button"})=>t.jsx("div",{className:`popup ${o}  ${n} `,children:t.jsxs("div",{className:"popup-content",children:[t.jsx("div",{className:"close-btn",children:t.jsx("img",{src:c})}),t.jsx("div",{className:"top-icon",children:t.jsx("img",{src:l})}),t.jsxs("div",{className:"title-description",children:[t.jsx("div",{className:"title",children:"Title"}),t.jsx("div",{className:"description",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"})]}),t.jsx("div",{className:["artwork-container",`artwork-container--${o}`].join(" "),children:t.jsx("img",{src:d})}),t.jsxs("div",{className:`button-container ${n}`,children:[t.jsx("div",{className:"btn primary-btn",children:"Confirm"}),t.jsx("div",{className:"btn secondary-btn",children:"Cancel"})]})]})});a.__docgenInfo={description:"",methods:[],displayName:"Popup",props:{buttons:{required:!1,tsType:{name:"union",raw:'"one-button" | "two-button"',elements:[{name:"literal",value:'"one-button"'},{name:"literal",value:'"two-button"'}]},description:"",defaultValue:{value:'"two-button"',computed:!1}},artwork:{required:!1,tsType:{name:"union",raw:'"with-artwork" | "without-artwork"',elements:[{name:"literal",value:'"with-artwork"'},{name:"literal",value:'"without-artwork"'}]},description:"",defaultValue:{value:'"with-artwork"',computed:!1}}}};const u={title:"Popup",component:a,parameters:{docs:{description:{component:`

The **Popup** component animates smoothly when it appears on the screen, providing a visually appealing experience for the user.

---

## Animation Details

Here’s how the animation works:

- **Animation Name**: \`itemScale\`
- **Duration**: \`0.3s\`
- **Easing**: \`ease-out\` for a smooth finish
- **Keyframes**: 
  1. Starts at \`scale(0.8)\` with \`opacity: 0\` (small and transparent).
  2. Ends at \`scale(1)\` with \`opacity: 1\` (full size and fully visible).

\`\`\`css
@keyframes itemScale {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
\`\`\`

This animation is triggered when the popup appears, providing a smooth and natural transition that draws the user’s attention without being disruptive.

---

## Usage

Use this popup component for dialog boxes, modals, or other UI elements where a smooth entry animation enhances the user experience.
        `}}}},e={args:{artwork:"without-artwork"},argTypes:{buttons:{options:["one-button","two-button"],control:{type:"inline-radio"}},artwork:{options:["with-artwork","without-artwork"],control:{type:"inline-radio"}}},parameters:{docs:{description:{story:"The popup with default settings, showing two buttons and no artwork. The animation will play on render."}},layout:"centered"},tags:["autodocs"]};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    artwork: "without-artwork"
  },
  argTypes: {
    buttons: {
      options: ["one-button", "two-button"],
      control: {
        type: "inline-radio"
      }
    },
    artwork: {
      options: ["with-artwork", "without-artwork"],
      control: {
        type: "inline-radio"
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "The popup with default settings, showing two buttons and no artwork. The animation will play on render."
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const w=["Base"];export{e as Base,w as __namedExportsOrder,u as default};
