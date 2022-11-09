import JAvatar from "./JAvatar.vue";

export default {
  title: "Library/Avatar",
  component: JAvatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { JAvatar },
  setup() {
    return { args };
  },
  template: '<JAvatar v-bind="args" />',
});

export const Default = Template.bind({});
