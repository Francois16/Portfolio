<script setup></script>

<template>
  <main class="relative min-h-screen bg-navy">
    <section class="container">
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 flex flex-col gap-4"
      >
        <h3 class="text-3xl text-green-600">Thank you for your message!</h3>
        <p class="text-xl">I will get back to you as soon as possible.</p>
        <router-link to="/" class="text-purple underline underline-offset-4"
          >&#8592; Home</router-link
        >
      </div>
    </section>
  </main>
</template>

<style></style>
