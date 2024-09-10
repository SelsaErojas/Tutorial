import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { ToggleOption, ToggleOptionProps } from "..";
import { MultipleChoices } from "../../MultipleChoices";
import { SingleChoice } from "../../SingleChoice";

const meta: Meta<typeof ToggleOption> = {
    title: "components/inputs/ToggleOption",
    component: ToggleOption,
    parameters,
    argTypes: props,
};

type Story = StoryObj<typeof ToggleOption>;

export const Default: Story = (args: ToggleOptionProps) => (
    <ToggleOption {...args} />
);
Default.args = {
    checked: false,
    children: (
        <MultipleChoices
            id="10"
            labelSelect="Select"
            labelSelected="Selected"
            onHandleSelectCheckChange={() => true}
            options={[
                { id: "1", label: "Option 1", checked: false },
                { id: "2", label: "Option 2", checked: false },
                { id: "3", label: "Option 3", checked: false },
            ]}
            placeholderSelect="Seleccione opciones"
        />
    ),
    handleToggleChange: () => {},
    id: "toggle",
    labelToggle: "Opciones",
    name: "name",
    valueToggle: "value",
};


export const Other: Story = (args: ToggleOptionProps) => (
  <ToggleOption {...args} />
);

Other.args = {
  checked: false,
  children: (
      <SingleChoice
          id="10"
          name="name"
          labelSelect="Select"
          handleSelectChange={() => true}
          options={[
              { id: "1", label: "Option 1" },
              { id: "2", label: "Option 2" },
              { id: "3", label: "Option 3" },
          ]}/>
  ),
  handleToggleChange: () => {},
  id: "toggle",
  labelToggle: "Opciones",
  name: "name",
  valueToggle: "value",
};

export default meta;
