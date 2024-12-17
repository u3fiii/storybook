import{B as s}from"./Button-D8rXt29u.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const c={title:"Button",component:s},e={args:{primary:!0,label:"Button"},parameters:{docs:{description:{story:`
### Button Component Animation

The \`Button\` component features a smooth pressed animation that enhances the user interaction experience. Here are the key details of the animation:

- **Trigger**: The animation is triggered when the button is clicked.
- **Animation Properties**:
  - **Transition**: The button's \`transform\` property is animated using CSS keyframes.
  - **Duration**: The animation duration is set to 0.2 seconds.
  - **Easing Function**: The animation uses a cubic-bezier easing function for a smooth effect. The specific cubic-bezier values used are \`cubic-bezier(0, 0.52, 0.24, 1)\`.

### CSS Code

Here is the relevant CSS code for the animation:

\`\`\`css

.storybook-button--clicked {
  animation: buttonPressed 0.2s cubic-bezier(0, 0.52, 0.24, 1);
}

@keyframes buttonPressed {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
\`\`\`

- The \`.storybook-button--clicked\` class applies the \`buttonPressed\` animation.
- The \`@keyframes buttonPressed\` defines the animation steps:
  - At 0%, the button is at its original size (\`transform: scale(1)\`).
  - At 50%, the button scales down to 95% of its size (\`transform: scale(0.95)\`).
  - At 100%, the button returns to its original size (\`transform: scale(1)\`).

This combination of CSS keyframes and React provides a smooth and visually appealing pressed animation for the \`Button\` component.
        `}},layout:"centered"},tags:["autodocs"]};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  },
  parameters: {
    docs: {
      description: {
        story: \`
### Button Component Animation

The \\\`Button\\\` component features a smooth pressed animation that enhances the user interaction experience. Here are the key details of the animation:

- **Trigger**: The animation is triggered when the button is clicked.
- **Animation Properties**:
  - **Transition**: The button's \\\`transform\\\` property is animated using CSS keyframes.
  - **Duration**: The animation duration is set to 0.2 seconds.
  - **Easing Function**: The animation uses a cubic-bezier easing function for a smooth effect. The specific cubic-bezier values used are \\\`cubic-bezier(0, 0.52, 0.24, 1)\\\`.

### CSS Code

Here is the relevant CSS code for the animation:

\\\`\\\`\\\`css

.storybook-button--clicked {
  animation: buttonPressed 0.2s cubic-bezier(0, 0.52, 0.24, 1);
}

@keyframes buttonPressed {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
\\\`\\\`\\\`

- The \\\`.storybook-button--clicked\\\` class applies the \\\`buttonPressed\\\` animation.
- The \\\`@keyframes buttonPressed\\\` defines the animation steps:
  - At 0%, the button is at its original size (\\\`transform: scale(1)\\\`).
  - At 50%, the button scales down to 95% of its size (\\\`transform: scale(0.95)\\\`).
  - At 100%, the button returns to its original size (\\\`transform: scale(1)\\\`).

This combination of CSS keyframes and React provides a smooth and visually appealing pressed animation for the \\\`Button\\\` component.
        \`
      }
    },
    layout: "centered"
  },
  tags: ["autodocs"]
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,c as default};
