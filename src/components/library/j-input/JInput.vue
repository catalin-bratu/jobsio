<template>
  <div :class="classes">
    <div class="j-input__icon-wrapper">
      <span class="j-input__icon">{{ icon }}</span>
    </div>
    <input
      :id="name"
      v-model="model"
      :name="name"
      :placeholder="placeholder"
      type="text"
      class="j-input__field"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["change"]);

const classes = computed(() => ({
  "j-input": true,
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
.j-input {
  @apply relative;
}
.j-input__icon-wrapper {
  @apply pointer-events-none absolute inset-0 flex items-center pl-3;
}

.j-input__icon {
  @apply h-6 w-6 text-center;
}

.j-input__field {
  @apply block w-full rounded border border-gray-200 p-2 pl-10 text-base outline-none hover:border-blue-600 focus:border-blue-600;
}
</style>
