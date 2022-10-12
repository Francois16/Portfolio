<script setup>
import { computed } from "vue";

const props = defineProps({
  type: String,
});

const messageTitle = computed(() => {
  const errorMsg = "Oops something went wrong!";

  const successMsg = "Thank you for your message!";

  return props.type === "success" ? successMsg : errorMsg;
});

const messageSubtitle = computed(() => {
  const errorSubMsg = "Please try again.";
  const successSubMsg = "I will get back to you as soon as possible.";

  return props.type === "success" ? successSubMsg : errorSubMsg;
});
</script>

<template>
  <main class="relative min-h-screen bg-navy">
    <section class="container">
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 flex flex-col gap-4"
      >
        <h3
          class="text-3xl"
          :class="props.type === 'success' ? 'text-green' : 'text-red-400'"
        >
          {{ messageTitle }}
        </h3>
        <p class="text-xl">{{ messageSubtitle }}</p>
        <router-link to="/" class="text-purple underline underline-offset-4"
          >&#8592; Home</router-link
        >
      </div>
    </section>
  </main>
</template>

<style></style>
