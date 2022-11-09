import JCheckbox from "./JCheckbox.vue";

export default {
  title: "Library/Checkbox",
  component: JCheckbox,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { JCheckbox },
  setup() {
    return { args };
  },
  template: '<JCheckbox v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
  name: "checkbox",
};
