import { ArgTypes } from "@storybook/react";
import { InputRangeProps } from "..";

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

export const props: Partial<ArgTypes<InputRangeProps>> = {
  handleInputChangeFrom: {
    description:
      "is a function that is called when the **Textfield Component** is clicked.",
  },
  handleInputChangeTo: {
    description:
      "is a function that is called when the **Textfield Component** is clicked.",
  },
  id: {
    description: "is a string that is used to identify the **Toggle Component**.",
  },
  labelFrom: {
    description:
      "is a string that is used to display the label of the **Textfield Component**.",
  },
  labelTo: {
    description:
      "is a string that is used to display the label of the **Textfield Component**.",
  },
  valueFrom: {
    description:
      "is a string or number that is used to display the value of the **Textfield Component**.",
  },
  valueTo: {
    description:
      "is a string or number that is used to display the value of the **Textfield Component**.",
  },
  typeInput: {
    description:
      "is a string that is used to determine the type of the **Textfield Component**. (Value: 'money' or 'number')",
  },

};
