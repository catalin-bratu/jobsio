<template>
  <button type="button" :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "medium",
    validator: function (value) {
      return ["small", "medium", "large"].indexOf(value) !== -1;
    },
  },
});

const emit = defineEmits(["click"]);

const classes = computed(() => ({
  "j-button": true,
  "j-button--primary": props.primary,
  "j-button--secondary": !props.primary,
  [`j-button--${props.size}`]: true,
}));

const onClick = () => {
  emit("click");
};
</script>

<style scoped>
.j-button {
  @apply inline-block cursor-pointer rounded-md border-none font-bold outline outline-1 outline-offset-2 outline-transparent;
}
.j-button--primary {
  @apply bg-blue-600 text-white hover:bg-blue-700 hover:outline-blue-600 focus:outline-blue-600 active:bg-blue-800;
}
.j-button--secondary {
  @apply bg-white text-black outline-gray-300 hover:bg-gray-50 focus:outline-2 active:bg-gray-100;
}
.j-button--small {
  @apply py-2 px-4 text-xs;
}
.j-button--medium {
  @apply py-2.5 px-5 text-sm;
}
.j-button--large {
  @apply py-3 px-6 text-base;
}
</style>
