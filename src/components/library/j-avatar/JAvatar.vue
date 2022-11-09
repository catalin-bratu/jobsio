<template>
  <div :class="classes" :style="{ 'background-color': backgroundColor }">
    <span class="j-avatar__initial">
      {{ initial }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { getRandomCapitalLetter, getRandomColor } from "/src/utils/index.js";

const props = defineProps({
  initial: {
    type: String,
    default: getRandomCapitalLetter(),
  },
  backgroundColor: {
    type: String,
    default: getRandomColor(),
  },
  size: {
    type: String,
    default: "medium",
    validator: function (value) {
      return ["small", "medium", "large"].indexOf(value) !== -1;
    },
  },
});

const classes = computed(() => ({
  "j-avatar": true,
  [`j-avatar--${props.size}`]: true,
}));
</script>

<style scoped>
.j-avatar {
  @apply flex items-center justify-center rounded-md font-semibold;
}
.j-avatar__initial {
  @apply text-white;
}
.j-avatar--small {
  @apply h-8 w-8 text-xs;
}
.j-avatar--medium {
  @apply h-10 w-10 text-sm;
}
.j-avatar--large {
  @apply h-12 w-12 text-base;
}
</style>
