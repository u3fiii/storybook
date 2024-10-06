import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";const p=()=>{const[a,m]=i.useState(0),[l,b]=i.useState({}),r=i.useRef([]);i.useEffect(()=>{const e=r.current[a];e&&b({width:20,left:e.offsetLeft+e.offsetWidth/2-10})},[a]);const h=e=>{m(e)};return t.jsx("div",{className:"tab-wrapper",children:t.jsxs("div",{className:"tab-container",children:[t.jsx("div",{className:"tabs",children:["آموزش","تحلیل","اخبار"].map((e,n)=>t.jsx("div",{className:`tab-item ${a===n?"active":""}`,onClick:()=>h(n),ref:u=>r.current[n]=u,children:e},n))}),t.jsx("div",{className:"underline",style:l})]})})};p.__docgenInfo={description:"",methods:[],displayName:"Tab"};const g={title:"Tab",component:p},o={args:{},argTypes:{},parameters:{docs:{description:{story:`
### Tab Component Animation

The \`Tab\` component features a smooth underline animation that highlights the active tab. Here are the key details of the animation:

- **Trigger**: The animation is triggered when a tab is clicked.
- **Underline Movement**: The underline moves from the current active tab to the newly selected tab.
- **Animation Properties**:
  - **Transition**: The underline's \`left\` and \`width\` properties are animated using CSS transitions.
  - **Duration**: The transition duration is set to 0.3 seconds for the \`width\` and 0.4 seconds for the \`left\` property.
  - **Easing Function**: The animation uses a cubic-bezier easing function for a smooth effect. The specific cubic-bezier values used are \`cubic-bezier(0, 0.62, 0.36, 1.11)\` for the \`left\` property and \`cubic-bezier(0, 0.62, 0.31, 1.22)\` for the \`width\` property.

### CSS Code

Here is the relevant CSS code for the animation:

\`\`\`scss
.tab-container {
  position: relative;

  .tabs {
    display: flex;
    position: relative;
    border-bottom: 1px solid #ccc;

    .tab-item {
      padding: 10px 20px;
      cursor: pointer;
      flex: 1;
      text-align: center;
    }
  }

  .underline {
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 20px;
    background-color: #000;
    transition: left 0.4s cubic-bezier(0, 0.62, 0.36, 1.11), width 0.3s cubic-bezier(0, 0.62, 0.31, 1.22);
  }
}
\`\`\`

### Usage

To use the \`Tab\` component, simply import it and include it in your JSX:

\`\`\`tsx
import Tab from "../components/Tab";

const MyComponent = () => (
  <div>
    <Tab />
  </div>
);
\`\`\`

### Example

Below is an example of the \`Tab\` component in action. Click on the tabs to see the underline animation:

\`\`\`tsx
import React from "react";
import Tab from "../components/Tab";

export const TabExample = () => <Tab />;
\`\`\`
        `}},layout:"centered"},tags:["autodocs"]};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      description: {
        story: \`
### Tab Component Animation

The \\\`Tab\\\` component features a smooth underline animation that highlights the active tab. Here are the key details of the animation:

- **Trigger**: The animation is triggered when a tab is clicked.
- **Underline Movement**: The underline moves from the current active tab to the newly selected tab.
- **Animation Properties**:
  - **Transition**: The underline's \\\`left\\\` and \\\`width\\\` properties are animated using CSS transitions.
  - **Duration**: The transition duration is set to 0.3 seconds for the \\\`width\\\` and 0.4 seconds for the \\\`left\\\` property.
  - **Easing Function**: The animation uses a cubic-bezier easing function for a smooth effect. The specific cubic-bezier values used are \\\`cubic-bezier(0, 0.62, 0.36, 1.11)\\\` for the \\\`left\\\` property and \\\`cubic-bezier(0, 0.62, 0.31, 1.22)\\\` for the \\\`width\\\` property.

### CSS Code

Here is the relevant CSS code for the animation:

\\\`\\\`\\\`scss
.tab-container {
  position: relative;

  .tabs {
    display: flex;
    position: relative;
    border-bottom: 1px solid #ccc;

    .tab-item {
      padding: 10px 20px;
      cursor: pointer;
      flex: 1;
      text-align: center;
    }
  }

  .underline {
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 20px;
    background-color: #000;
    transition: left 0.4s cubic-bezier(0, 0.62, 0.36, 1.11), width 0.3s cubic-bezier(0, 0.62, 0.31, 1.22);
  }
}
\\\`\\\`\\\`

### Usage

To use the \\\`Tab\\\` component, simply import it and include it in your JSX:

\\\`\\\`\\\`tsx
import Tab from "../components/Tab";

const MyComponent = () => (
  <div>
    <Tab />
  </div>
);
\\\`\\\`\\\`

### Example

Below is an example of the \\\`Tab\\\` component in action. Click on the tabs to see the underline animation:

\\\`\\\`\\\`tsx
import React from "react";
import Tab from "../components/Tab";

export const TabExample = () => <Tab />;
\\\`\\\`\\\`
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["Base"];export{o as Base,x as __namedExportsOrder,g as default};
