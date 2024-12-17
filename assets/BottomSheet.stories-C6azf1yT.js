import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{a as h}from"./artowork-palceholder-Ba6RphZE.js";const c="data:image/svg+xml,%3csvg%20width='32'%20height='4'%20viewBox='0%200%2032%204'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='32'%20height='4'%20rx='2'%20fill='%23676767'/%3e%3c/svg%3e",a=()=>{const[o,m]=d.useState(!1),n=()=>{m(!o)};return t.jsxs("div",{className:"bottomsheet-container",children:[t.jsx("button",{className:"open-bottom-sheet-button",onClick:n,children:"Open Bottom Sheet"}),t.jsx("div",{className:`bottom-sheet ${o?"open":""}`,children:t.jsxs("div",{className:"bottom-sheet-content",children:[t.jsx("div",{className:"drag-handle",onClick:n,children:t.jsx("img",{src:c})}),t.jsxs("div",{className:"bottomsheet-title",children:[t.jsx("p",{className:"title",children:"تایتل باتم‌شیت"}),t.jsx("p",{className:"subtitle",children:"بازار ارزهای دیجیتال سرشار از ارز دیجیتال‌های مستعد رشد است. اگر می‌خواهید جز سرمایه‌گذارانی باشید که این ارزها را زودتر از دیگران شناسایی کرده و از آن‌ها بهره‌مند می‌شوند، واچ لیست این هفته را از دست ندهید."})]}),t.jsx("div",{className:"divider"}),t.jsx("div",{className:"img-placeholder",children:t.jsx("img",{src:h})}),t.jsx("div",{className:"divider"}),t.jsxs("div",{className:"buttons-container",children:[t.jsx("div",{className:"button primary",children:t.jsx("p",{children:"تایید"})}),t.jsx("div",{className:"button secondary",children:t.jsx("p",{children:"انصراف"})})]})]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"BottomSheet"};const b={title:"BottomSheet",component:a},e={args:{},parameters:{docs:{description:{story:`
### BottomSheet Component Animation

The \`BottomSheet\` component uses smooth animations to slide up from the bottom of the screen when opened and slide down when closed. The animation is achieved using CSS transitions.

#### CSS Transitions

The following CSS code is used to animate the bottom sheet:

\`\`\`scss
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(70, 70, 70);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 20px;
  z-index: 1000;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0, 0.69, 0.28, 1.05);

  &.open {
    transform: translateY(0);
  }
}
\`\`\`

- The \`transform: translateY(100%)\` property initially positions the bottom sheet off-screen.
- The \`transition: transform 0.4s cubic-bezier(0, 0.69, 0.28, 1.05)\` property defines the animation for the \`transform\` property, making the bottom sheet slide smoothly.
- When the \`open\` class is added, the \`transform: translateY(0)\` property brings the bottom sheet into view.

This combination of CSS transitions provides a smooth and intuitive user experience for the \`BottomSheet\` component.
        `}},layout:"centered"},tags:["autodocs"]};var s,i,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`
### BottomSheet Component Animation

The \\\`BottomSheet\\\` component uses smooth animations to slide up from the bottom of the screen when opened and slide down when closed. The animation is achieved using CSS transitions.

#### CSS Transitions

The following CSS code is used to animate the bottom sheet:

\\\`\\\`\\\`scss
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(70, 70, 70);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 20px;
  z-index: 1000;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0, 0.69, 0.28, 1.05);

  &.open {
    transform: translateY(0);
  }
}
\\\`\\\`\\\`

- The \\\`transform: translateY(100%)\\\` property initially positions the bottom sheet off-screen.
- The \\\`transition: transform 0.4s cubic-bezier(0, 0.69, 0.28, 1.05)\\\` property defines the animation for the \\\`transform\\\` property, making the bottom sheet slide smoothly.
- When the \\\`open\\\` class is added, the \\\`transform: translateY(0)\\\` property brings the bottom sheet into view.

This combination of CSS transitions provides a smooth and intuitive user experience for the \\\`BottomSheet\\\` component.
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,b as default};
