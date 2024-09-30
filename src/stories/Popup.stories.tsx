import type { Meta, StoryObj } from "@storybook/react";

import Popup from "./Popup";

const meta: Meta<typeof Popup> = {
  title: "Popup",
  component: Popup,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
