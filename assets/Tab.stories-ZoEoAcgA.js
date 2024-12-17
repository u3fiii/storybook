import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";const u=()=>{const[o,f]=i.useState(0),[m,s]=i.useState({}),c=i.useRef([]),d=30,b=1;i.useEffect(()=>{const e=c.current[o];if(e){const t=()=>{s({width:d,left:e.offsetLeft+(e.offsetWidth-d)/2})};s(T=>({...T,width:b}));const r=setTimeout(t,100);return()=>clearTimeout(r)}},[o]);const g=e=>{f(e)};return n.jsx("div",{className:"tab-wrapper",children:n.jsxs("div",{className:"tab-container",children:[n.jsx("div",{className:"tabs",children:["آموزش","تحلیل","اخبار"].map((e,t)=>n.jsx("div",{className:`tab-item ${o===t?"active":""}`,onClick:()=>g(t),ref:r=>c.current[t]=r,children:e},t))}),n.jsx("div",{className:"underline",style:m})]})})};u.__docgenInfo={description:"",methods:[],displayName:"Tab"};const x={title:"Tab",component:u},a={args:{},argTypes:{},parameters:{docs:{description:{story:`
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

### JavaScript for Dynamic Width and Position

JavaScript is used to dynamically adjust the width and position of the underline during the transition:

- **Initial Setup**: The component maintains a state for the active tab and a reference to each tab element.
- **Effect Hook**: When the active tab changes, an effect hook calculates the new position and width of the underline.
- **Transition Width**: Initially, the underline width is set to a smaller value (e.g., 1px) to create a shrinking effect during the transition.
- **Final Width**: After a short delay (e.g., 100ms), the underline width is updated to a fixed original width (e.g., 30px) and centered under the active tab.

This combination of CSS transitions and JavaScript provides a smooth and visually appealing user experience for the \`Tab\` component.
        `}},layout:"centered"},tags:["autodocs"]};var h,l,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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

### JavaScript for Dynamic Width and Position

JavaScript is used to dynamically adjust the width and position of the underline during the transition:

- **Initial Setup**: The component maintains a state for the active tab and a reference to each tab element.
- **Effect Hook**: When the active tab changes, an effect hook calculates the new position and width of the underline.
- **Transition Width**: Initially, the underline width is set to a smaller value (e.g., 1px) to create a shrinking effect during the transition.
- **Final Width**: After a short delay (e.g., 100ms), the underline width is updated to a fixed original width (e.g., 30px) and centered under the active tab.

This combination of CSS transitions and JavaScript provides a smooth and visually appealing user experience for the \\\`Tab\\\` component.
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const S=["Base"];export{a as Base,S as __namedExportsOrder,x as default};
