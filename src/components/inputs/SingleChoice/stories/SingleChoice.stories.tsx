import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import {
  SingleChoice, SingleChoiceProps
} from "..";

const options = [
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" },
  { id: "3", label: "Option 3" },
  { id: "4", label: "Option 4" },
];

const meta: Meta<typeof SingleChoice> = {
  title: "components/inputs/SingleChoice",
  component: SingleChoice,
  parameters,
  argTypes: props,
};


type Story = StoryObj<typeof SingleChoice>;

export const Default: Story = (args: SingleChoiceProps) => <SingleChoice {...args} />;
Default.args = {
  id: "membresia",
  options,
  name: "membresia",
  labelSelect: "Seleccione la membresía",
  handleSelectChange: ()=>{},
};

export default meta;