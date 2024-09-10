import { ArgTypes } from "@storybook/react";
import { SingleChoiceProps } from "..";

export const parameters = {
  docs: {
    description: {
      component:
        "Select allows users to make a single selection or multiple selections from a list of option.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

export const props: Partial<ArgTypes<SingleChoiceProps>> = {
  handleSelectChange: {
    description:
      "is a function that will be called when the **Select Component** value changes.",
  },
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  labelSelect: {
    description:
      "is the text that will be displayed as the label for the **Select Component**.",
  },
  name: {
    description:
      "is used to identify the **Textfield Component** in the form data submitted to the server.",
  },
  options: {
    description:
      "(array): shall be designed to accept an array of objects with a predetermined structure.",
  },
  required: {
    description:
      "is a boolean attribute that indicates whether the **Textfield Component** must have a value before the form can be submitted.",
  },
  valueSelected: {
    description:
      "is the value that will be selected by default in the **Select Component**.",
  },
};
