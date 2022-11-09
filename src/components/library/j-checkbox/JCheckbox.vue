<template>
  <div :class="classes">
    <input :id="name" v-model="model" type="checkbox" :name="name" />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "medium",
    validator: function (value) {
      return ["small", "medium", "large"].indexOf(value) !== -1;
    },
  },
});

const emit = defineEmits(["change"]);

const classes = computed(() => ({
  "j-checkbox": true,
  [`j-checkbox--${props.size}`]: true,
}));

const model = computed({
  get() {
    return this.value;
  },
  set(value) {
    emit("change", value);
  },
});
</script>

<style scoped>
.j-checkbox {
  @apply inline-flex items-center;
}
.j-checkbox input {
  @apply mr-2 font-semibold outline outline-transparent focus:outline-1 focus:outline-offset-2 focus:outline-blue-500;
}
.j-checkbox--small {
  @apply text-sm;
}
.j-checkbox--small input {
  @apply h-3.5 w-3.5;
}
.j-checkbox--medium {
  @apply text-base;
}
.j-checkbox--medium input {
  @apply h-4 w-4;
}
.j-checkbox--large {
  @apply text-lg;
}
.j-checkbox--large input {
  @apply h-5 w-5;
}
</style>
