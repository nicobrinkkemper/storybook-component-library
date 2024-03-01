import type { Meta, StoryObj } from "@storybook/react";
import { withChakra } from "./withChakra";
import { TestComponent } from "./TestComponent";

/**
 * Primary UI component for user interaction
 */
const meta: Meta<typeof TestComponent> = {
  title: "Test Component",
  component: TestComponent,
  decorators: [withChakra],
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;
/**
 * Header is a Heading with a `sticky` variant
 */
export const Base: Story = {};
