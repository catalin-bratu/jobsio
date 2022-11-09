import JToggle from "./JToggle.vue";

export default {
  title: "Library/Toggle",
  component: JToggle,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { JToggle },
  setup() {
    return { args };
  },
  template: '<JToggle v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  name: "toggle",
  label: "Toggle",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "toggle",
  label: "Toggle",
  primary: false,
};
