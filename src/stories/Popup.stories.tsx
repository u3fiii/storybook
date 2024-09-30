import type { Meta, StoryObj } from "@storybook/react";
import Popup from "./Popup";

const meta: Meta<typeof Popup> = {
  title: "Popup",
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: `

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
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    artwork: "without-artwork",
  },
  argTypes: {
    buttons: {
      options: ["one-button", "two-button"],
      control: {
        type: "inline-radio",
      },
    },
    artwork: {
      options: ["with-artwork", "without-artwork"],
      control: {
        type: "inline-radio",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "The popup with default settings, showing two buttons and no artwork. The animation will play on render.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};
