<script setup>
import { ref } from "vue";

import logo from "../assets/images/logo.png";

const navIsOpen = ref(false);

window.addEventListener("resize", () => {
  closeNav();
});

function toggleMenu() {
  navIsOpen.value = !navIsOpen.value;
}

function closeNav() {
  navIsOpen.value = false;
}
</script>
<template>
  <header>
    <nav class="container flex justify-between items-center h-24 py-5 relative">
      <router-link class="h-full" to="/">
        <img class="h-full" :src="logo" alt="Logo" />
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden sm:(flex) gap-1 items-center font-semibold text-base">
        <a
          target="_blank"
          href="#"
          class="py-2 px-4 duration-200 hover:(text-purple)"
          >Resume</a
        >
        <a
          href="#work"
          class="text-purple border-2 border-purple py-2 px-4 rounded-full hover:(text-white bg-purple) duration-200"
          >My Work</a
        >
      </div>

      <!-- Mobile Menu -->
      <div
        class="absolute top-full duration-500 bg-white z-10 w-full flex flex-col items-center pb-5"
        :class="navIsOpen ? 'left-0' : '-left-full'"
      >
        <a
          target="_blank"
          href="#"
          class="py-2 px-4 duration-200 hover:(text-purple)"
          >Resume</a
        >
        <a
          href="#work"
          class="text-purple border-2 border-purple py-2 px-4 rounded-full hover:(text-white bg-purple) duration-200"
          >My Work</a
        >
      </div>

      <!-- Burger -->
      <div @click="toggleMenu" class="burger">
        <div
          class="bar"
          :class="
            navIsOpen ? 'w-5 transform rotate-45 translate-y-[2.5px]' : 'w-5'
          "
        ></div>
        <div class="w-3 bar" :class="navIsOpen ? 'hidden' : 'block'"></div>
        <div
          class="bar"
          :class="
            navIsOpen ? 'w-5 transform -rotate-45 -translate-y-[2.5px]' : 'w-4'
          "
        ></div>
      </div>
    </nav>
  </header>
</template>

<style>
.burger {
  @apply flex flex-col items-end p-2 gap-1 cursor-pointer sm:(hidden);
}

.burger:hover .bar {
  @apply bg-purple rounded duration-200;
}

.bar {
  @apply h-[1px] block bg-navy duration-200;
}
</style>
