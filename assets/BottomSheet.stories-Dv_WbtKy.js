import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";const c=()=>{const[e,r]=i.useState(!1),n=()=>{r(!e)};return t.jsxs("div",{children:[t.jsx("button",{className:"open-bottom-sheet-button",onClick:n,children:"Open Bottom Sheet"}),t.jsx("div",{className:`bottom-sheet ${e?"open":""}`,children:t.jsxs("div",{className:"bottom-sheet-content",children:[t.jsx("button",{className:"close-bottom-sheet-button",onClick:n,children:"Close"}),t.jsx("p",{children:"This is the content of the bottom sheet."})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"BottomSheet"};const d={title:"BottomSheet",component:c},o={args:{},parameters:{docs:{description:{story:`
### BottomSheet Component

The \`BottomSheet\` component is a modal that slides up from the bottom of the screen when triggered by a button click. It can be used to display additional content or actions.

### Usage

To use the \`BottomSheet\` component, simply import it and include it in your JSX:

\`\`\`tsx
import BottomSheet from "../components/BottomSheet";

const MyComponent = () => (
  <div>
    <BottomSheet />
  </div>
);
\`\`\`

### Example

Below is an example of the \`BottomSheet\` component in action. Click on the button to see the bottom sheet:

\`\`\`tsx
import React from "react";
import BottomSheet from "../components/BottomSheet";

export const BottomSheetExample = () => <BottomSheet />;
\`\`\`
        `}},layout:"centered"},tags:["autodocs"]};var s,m,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`
### BottomSheet Component

The \\\`BottomSheet\\\` component is a modal that slides up from the bottom of the screen when triggered by a button click. It can be used to display additional content or actions.

### Usage

To use the \\\`BottomSheet\\\` component, simply import it and include it in your JSX:

\\\`\\\`\\\`tsx
import BottomSheet from "../components/BottomSheet";

const MyComponent = () => (
  <div>
    <BottomSheet />
  </div>
);
\\\`\\\`\\\`

### Example

Below is an example of the \\\`BottomSheet\\\` component in action. Click on the button to see the bottom sheet:

\\\`\\\`\\\`tsx
import React from "react";
import BottomSheet from "../components/BottomSheet";

export const BottomSheetExample = () => <BottomSheet />;
\\\`\\\`\\\`
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const l=["Default"];export{o as Default,l as __namedExportsOrder,d as default};
