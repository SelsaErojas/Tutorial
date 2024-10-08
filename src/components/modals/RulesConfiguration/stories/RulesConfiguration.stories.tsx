import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/button";
import { MultipleChoices } from "@components/inputs/MultipleChoices";

import { RulesConfiguration, RulesConfigurationProps } from "..";


const meta: Meta<typeof RulesConfiguration> = {
  title: "components/modals/RulesConfiguration",
  component: RulesConfiguration,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<RulesConfigurationProps> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <RulesConfiguration {...args} onCloseModal={() => setShowModal(false)} />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  title: "Rules Configuration",
  children: (  <MultipleChoices 
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
    />)
};


const TemplateWithPlannedAutomatic: StoryFn<RulesConfigurationProps> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <RulesConfiguration {...args} onCloseModal={() => setShowModal(false)} />
      )}
    </>
  );
};

export const WithPlannedAutomaticExecution: StoryFn<RulesConfigurationProps>  = TemplateWithPlannedAutomatic.bind({});
WithPlannedAutomaticExecution.args = {
  portalId: "portal",
  title: "Rules Configuration",
  children: (  <MultipleChoices 
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
    />)
};

export default meta;
