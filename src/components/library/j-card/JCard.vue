<template>
  <div :class="classes" @click="onClick">
    <h1 class="j-card__title">{{ props.title }}</h1>
    <h2 class="j-card__meta">
      {{ props.meta }}
      <span v-if="props.meta && props.tag">•</span>
      {{ props.tag }}
    </h2>
    <h3 class="j-card__subtitle">{{ props.subtitle }}</h3>
    <h4 class="j-card__caption">{{ props.caption }}</h4>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  meta: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  caption: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);

const classes = computed(() => ({
  "j-card": true,
}));

const onClick = () => {
  emit("click");
};
</script>

<style scoped>
.j-card {
  @apply flex h-36 w-64 cursor-pointer flex-col justify-start truncate rounded bg-white p-4 shadow outline outline-2 outline-transparent hover:outline-blue-600;
}

.j-card__meta {
  @apply order-first text-base text-gray-500;
}

.j-card__title {
  @apply text-lg font-semibold;
}

.j-card__subtitle {
  @apply text-sm text-gray-500;
}

.j-card__caption {
  @apply mt-auto text-xs font-medium text-blue-600;
}
</style>
