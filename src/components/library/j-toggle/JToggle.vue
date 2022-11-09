<template>
  <div :class="classes">
    <label
      id="left-label"
      :for="name"
      class="j-toggle__label"
      aria-hidden="true"
    >
      {{ leftLabel }}
    </label>
    <div class="j-toggle__button">
      <input
        :id="name"
        v-model="model"
        type="checkbox"
        :name="name"
        class="j-toggle__checkbox"
        aria-labelledby="wrapper left-label right-label"
      />
      <label
        id="wrapper"
        :for="name"
        aria-hidden="true"
        class="j-toggle__wrapper"
      />
    </div>
    <label id="right-label" :for="name" class="j-toggle__label">
      {{ rightLabel }}
    </label>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  leftLabel: {
    type: String,
    required: true,
  },
  rightLabel: {
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

const emit = defineEmits(["change"]);

const classes = computed(() => ({
  "j-toggle": true,
  "j-toggle--primary": props.primary,
  "j-toggle--secondary": !props.primary,
  [`j-toggle--${props.size}`]: true,
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
.j-toggle {
  @apply inline-flex items-center gap-2;
}
.j-toggle__button {
  @apply relative inline-block;
}
.j-toggle__checkbox {
  @apply absolute block cursor-pointer appearance-none rounded-full checked:right-0;
}
.j-toggle__wrapper {
  @apply block cursor-pointer overflow-hidden rounded-full;
}

/* primary */
.j-toggle--primary .j-toggle__checkbox {
  @apply bg-white checked:border-blue-500 hover:border-blue-600;
}
.j-toggle--primary .j-toggle__checkbox:checked + .j-toggle__wrapper {
  @apply bg-blue-500;
}
.j-toggle--primary .j-toggle__wrapper {
  @apply bg-gray-200;
}

/* secondary */
.j-toggle--secondary .j-toggle__checkbox {
  @apply border-gray-200 bg-blue-500 hover:border-gray-300;
}
.j-toggle--secondary .j-toggle__wrapper {
  @apply bg-gray-200;
}

/* small */
.j-toggle--small .j-toggle__label {
  @apply text-xs;
}
.j-toggle--small .j-toggle__button {
  @apply w-8;
}
.j-toggle--small .j-toggle__checkbox {
  @apply h-4 w-4 border-4;
}
.j-toggle--small .j-toggle__wrapper {
  @apply h-4;
}

/* medium */
.j-toggle--medium .j-toggle__label {
  @apply text-sm;
}
.j-toggle--medium .j-toggle__button {
  @apply w-10;
}
.j-toggle--medium .j-toggle__checkbox {
  @apply h-5 w-5 border-4;
}
.j-toggle--medium .j-toggle__wrapper {
  @apply h-5;
}

/* large */
.j-toggle--large .j-toggle__label {
  @apply text-base;
}
.j-toggle--large .j-toggle__button {
  @apply w-12;
}
.j-toggle--large .j-toggle__checkbox {
  @apply h-6 w-6 border-4;
}
.j-toggle--large .j-toggle__wrapper {
  @apply h-6;
}
</style>
