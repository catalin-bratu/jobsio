import JButton from "./JButton.vue";

export default {
  title: "Library/Button",
  component: JButton,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { JButton },
  setup() {
    return { args };
  },
  template: '<JButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  primary: false,
};
