<script setup>
import FormSubmitMessage from "../components/FormSubmitMessage.vue";

const props = defineProps({
  type: String,
});
</script>

<template>
  <FormSubmitMessage :type="props.type" />
</template>

<style></style>
