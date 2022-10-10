<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Navbar from "../components/Navbar.vue";

// Images
import avatar from "../assets/images/fp-avatar.svg";
import devices from "../assets/images/hero-devices.svg";
import sortingImg from "../assets/images/projects/datastructures.png";

const router = useRouter();

const formData = ref({
  name: "",
  email: "",
  message: "",
});

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function sendMessage() {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact",
      ...formData.value,
    }),
  })
    .then(() => {
      router.push("/success");
      clearForm();
    })
    .catch((err) => console.log("ERROR", err));
}

// Clear the form on successful message sent
function clearForm() {
  formData.value.name = "";
  formData.value.email = "";
  formData.value.message = "";
}
</script>

<template>
  <Navbar />
  <main>
    <!-- Hero -->
    <section class="container flex flex-col items-center pt-32">
      <h2
        class="text-4xl text-center font-semibold font-display mb-10 lg:(text-6xl)"
      >
        Full Stack Developer
      </h2>

      <p class="text-center max-w-lg text-xl leading-relaxed">
        <!-- I Design and develop technology that improves the lives of its users,
        while providing an exceptionally high level of service to clients. -->
        I love exploring and creating 🚀 I'm a lifelong learner 🎓 and might
        have a thing for freshly roasted coffee ☕
      </p>
      <p
        class="my-8 flex flex-wrap gap-5 md:(flex-row) items-center justify-center"
      >
        <a
          class="bg-purple border border-transparent rounded shadow py-2 px-5 text-white duration-200 font-semibold flex items-center justify-center gap-3 hover:(bg-white text-purple border-purple)"
          target="_blank"
          href="https://github.com/Francois16"
        >
          <i class="fa-brands fa-github fa-lg"></i>
          Github
        </a>
        <a
          class="bg-purple border border-transparent rounded shadow py-2 px-5 text-white duration-200 font-semibold flex items-center justify-center gap-3 hover:(bg-white text-purple border-purple)"
          target="_blank"
          href="https://www.linkedin.com/in/francoispaulsen/"
        >
          <i class="fa-brands fa-linkedin fa-lg"></i>
          Linkedin</a
        >
        <a
          class="bg-purple border border-transparent rounded shadow py-2 px-5 text-white duration-200 font-semibold flex items-center justify-center gap-3 hover:(bg-white text-purple border-purple)"
          target="_blank"
          href="#"
        >
          <i class="fa-solid fa-file-lines fa-lg"></i>
          Resume</a
        >
      </p>

      <img :src="avatar" alt="avatar" class="my-16 h-44 w-44" />

      <img :src="devices" alt="hero-devices" class="mt-10 w-full max-w-3xl" />
    </section>

    <!-- Skills -->
    <section class="bg-purple text-white text-center py-16">
      <div class="container max-w-5xl">
        <h3 class="text-2xl font-display pb-7 font-semibold lg:(text-3xl)">
          Hi, I'm Francois. Nice to meet you.
        </h3>
        <p class="leading-relaxed text-lg max-w-lg m-auto">
          When I started exploring the world of programming, I instantly fell in
          love with it. I have been tinkering with all sorts of technologies but
          found myself gravitating towards Python and Javascript.
        </p>
      </div>
    </section>

    <section class="skills">
      <div class="container grid grid-col-1 md:(grid-cols-2) gap-6 max-w-5xl">
        <div
          class="flex flex-col items-center bg-white border rounded-2xl shadow p-12"
        >
          <div
            class="bg-green w-20 h-20 rounded-full flex items-center justify-center"
          >
            <i class="fa-solid fa-terminal fa-lg"></i>
          </div>

          <h1 class="text-2xl font-display my-6 font-semibold">Frontend</h1>

          <p class="text-center leading-relaxed">
            Build client-side applications with modern features like SPA and
            maintain semantic coding style among other best practices for SEO
            optimisation. I use modern tech such as Vue.js and TailwindCSS,
          </p>

          <h4 class="mt-6 mb-2 text-purple text-lg font-medium">
            Languages I speak:
          </h4>

          <p class="text-center leading-relaxed">
            HTML5, CSS3, Javascript, VueJS, TailwindCSS
          </p>
        </div>
        <div
          class="flex flex-col items-center bg-white border rounded-2xl shadow p-12"
        >
          <div
            class="bg-green w-20 h-20 rounded-full flex items-center justify-center"
          >
            <i class="fa-solid fa-server fa-xl"></i>
          </div>

          <h1 class="text-2xl font-display my-6 font-semibold">Backend</h1>

          <p class="text-center leading-relaxed">
            Build scalable and maintainable server applications using modern
            technology such as Django and the Django REST framework.
          </p>

          <h4 class="mt-6 mb-2 text-purple text-lg font-medium">
            Languages I speak:
          </h4>

          <p class="text-center leading-relaxed">
            Python, Django, Django REST framework
          </p>
        </div>
      </div>
    </section>

    <section id="work">
      <h1
        class="text-center font-display text-4xl font-semibold mt-36 mb-6 capitalize"
      >
        My recent work
      </h1>

      <p class="text-center text-xl leading-relaxed">
        Here are a few past projects I've worked on.
      </p>

      <div
        class="container my-20 gap-6 grid grid-cols-1 md:(grid-cols-2) max-w-5xl"
      >
        <div class="overflow-hidden bg-white shadow rounded-2xl relative group">
          <img class="" :src="sortingImg" />

          <div
            class="p-12 pb-4 absolute h-full w-full bg-green/80 -bottom-full left-0 group-hover:(bottom-0) duration-500 bg-gradient-to-b from-transparent to-navy flex flex-col items-center justify-end"
          >
            <h2 class="font-display text-white text-4xl mb-3">Sorter</h2>
            <p class="mb-4 text-white text-center">
              Visualization of popular sorting algorithms.
              <br />
            </p>
            <p class="text-white mb-6">HTML5 - CSS3 - Javascript</p>
            <div class="flex flex-row gap-6 items-center justify-center">
              <a
                target="_blank"
                href="https://github.com/Francois16/sorting-visualizer"
                class="py-2 px-4 bg-white rounded font-semibold"
              >
                Github
              </a>
              <a
                target="_blank"
                href="https://steady-piroshki-2b8a8c.netlify.app/"
                class="py-2 px-4 bg-white rounded font-semibold"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact info/form -->
    <section class="contact relative">
      <div class="container">
        <h1
          class="text-center font-display text-4xl font-semibold mt-36 mb-6 capitalize"
        >
          Contact Me
        </h1>

        <p class="text-center text-xl leading-relaxed mb-16">
          Thanks for taking the time to reach out. How can I help you today?
        </p>
        <div
          id="contact"
          class="max-w-2xl mx-auto border bg-white shadow-2xl rounded-2xl p-4 sm:(p-8) md:(p-16)"
        >
          <form
            @submit.prevent="sendMessage"
            name="contact"
            method="POST"
            data-netlify="true"
            class="flex flex-col gap-3"
          >
            <div class="grid grid-cols-1 sm:(grid-cols-2) gap-4">
              <div class="flex flex-col gap-1">
                <label for="name">Name</label>
                <input
                  class="input focus:(outline border-purple outline-solid-purple )"
                  name="name"
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                />
              </div>
              <div class="flex flex-col gap-1">
                <label for="email">Email</label>
                <input
                  class="input focus:(outline border-purple outline-solid-purple )"
                  name="email"
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label for="message">Message</label>
              <textarea
                class="input focus:(outline border-purple outline-solid-purple)"
                name="message"
                id="message"
                v-model="formData.message"
                type="text"
                rows="10"
                required
              />
            </div>
            <button
              type="submit"
              class="bg-transparent border-2 border-purple text-purple py-2 px-20 rounded-full self-center text-lg font-bold duration-200 mt-4 hover:(bg-purple text-white)"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.skills::before {
  @apply bg-purple;
  content: "";
  position: absolute;
  height: 300px;
  width: 100%;
  z-index: -100;
}
.contact::after {
  @apply bg-purple;
  content: "";
  position: absolute;
  bottom: -20%;
  height: 70%;
  width: 100%;
  z-index: -100;
}

label {
  @apply font-semibold text-sm;
}

.input {
  @apply px-3 py-2 border rounded;
}
</style>
