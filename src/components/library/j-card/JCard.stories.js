import JCard from "./JCard.vue";

export default {
  title: "Library/Card",
  component: JCard,
};

const Template = (args) => ({
  components: { JCard },
  setup() {
    return { args };
  },
  template: '<JCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  meta: "Meta",
  tag: "Tag",
  title: "Title",
  subtitle: "Subtitle",
  caption: "Caption",
};
