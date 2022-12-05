import JInput from "./JInput.vue";

export default {
  title: "Library/Input",
  component: JInput,
};

const Template = (args) => ({
  components: { JInput },
  setup() {
    return { args };
  },
  template: '<JInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: "input",
  placeholder: "Input",
  icon: "🔎",
};
