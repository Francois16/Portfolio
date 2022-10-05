<script setup>
import { ref } from "vue";

const isOpen = ref(false);

function navigate(section) {
  const bodyRect = document.body.getBoundingClientRect();
  const sectionRect = document.querySelector(section).getBoundingClientRect();
  const navRect = document.querySelector("#navbar").getBoundingClientRect();

  // Calculate offset of the scroll + another 20px up.
  let offset = sectionRect.top - bodyRect.top - navRect.height - 20;

  window.scrollTo(0, offset);
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <header id="navbar" class="fixed bg-white border-b w-full z-10">
    <nav
      class="container flex h-16 md:(h-20) duration-200 z-10 items-center justify-end"
    >
      <div
        class="flex flex-row gap-5 hidden items-center justify-end md:(flex)"
      >
        <button
          @click="navigate('#about')"
          class="rounded font-bold py-2 px-3 duration-200 capitalize hover:(bg-orange-500 text-white )"
        >
          About
        </button>
        <button
          @click="navigate('#projects')"
          class="rounded font-bold py-2 px-3 duration-200 capitalize hover:(bg-orange-500 text-white )"
        >
          projects
        </button>
        <button
          @click="navigate('#contact')"
          class="rounded font-bold py-2 px-3 duration-200 capitalize hover:(bg-orange-500 text-white )"
        >
          contact
        </button>
      </div>

      <!-- Burger Icon -->
      <div
        @click="isOpen = true"
        class="cursor-pointer flex flex-col py-2 px-1 gap-[3px] items-end md:(hidden)"
      >
        <div class="bg-slate-800 h-0.5 w-5"></div>
        <div class="bg-slate-800 h-0.5 w-3"></div>
        <div class="bg-slate-800 h-0.5 w-5"></div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="bg-white border-b h-screen w-full top-0 z-10 duration-200 fixed"
        :class="isOpen ? 'left-0' : '-left-full'"
      >
        <div
          @click="isOpen = false"
          class="cursor-pointer py-4 top-8 right-5 text-4xl absolute"
        >
          <div
            class="rounded-full bg-slate-800 h-1 transform w-8 rotate-45 translate-y-0.5"
          ></div>
          <div
            class="rounded-full bg-slate-800 h-1 transform w-8 -rotate-45 -translate-y-0.5"
          ></div>
        </div>

        <div class="flex flex-col h-full gap-1 justify-center items-cnter">
          <button
            @click="
              navigate('#about');
              closeMenu();
            "
            class="font-bold py-4 duration-200 hover:(bg-orange-500 text-white)"
          >
            About
          </button>
          <button
            @click="
              navigate('#projects');
              closeMenu();
            "
            class="font-bold py-4 duration-200 hover:(bg-orange-500 text-white)"
          >
            Projects
          </button>
          <button
            @click="
              navigate('#contact');
              closeMenu();
            "
            class="font-bold py-4 duration-200 hover:(bg-orange-500 text-white)"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>
