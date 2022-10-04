<script setup>
import manImg from "../assets/images/about.png";
import sortingImg from "../assets/images/projects/sorting.png";
import { ref } from "vue";

const formData = ref({
  name: "",
  surname: "",
  message: "",
});

function sendMessage() {
  console.log("sendMessage function not implemented yet");
  clearForm();
}

// Clear the form on successful message sent
function clearForm() {
  formData.value.name = "";
  formData.value.surname = "";
  formData.value.message = "";
}
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="min-h-screen relative">
      <div class="container bottom-32 absolute">
        <h1 class="font-semibold text-5xl leading-tight">
          <span class="block"
            >Hi, I'm <span class="text-orange-500">Francois</span>
          </span>
          I'm a Fullstack Developer
        </h1>
        <p class="max-w-xs mt-5 text-xl leading-relaxed">
          I love exploring and creating 🚀 I'm a lifelong learner 🎓 and might
          have a thing for freshly roasted coffee ☕
        </p>
      </div>
    </section>

    <div class="container">
      <!-- Skills -->
      <section>
        <h1 class="title">My Skills</h1>

        <div class="flex flex-col">
          <img
            class="max-w-sm mx-auto"
            :src="manImg"
            alt="seated man on a laptop"
          />

          <div
            class="flex flex-wrap mt-10 mb-5 gap-1 items-center justify-center"
          >
            <span class="technology">Python</span>
            <span class="technology">Django</span>
            <span class="technology">Javascript</span>
            <span class="technology">VueJS</span>
            <span class="technology">HTML</span>
            <span class="technology">CSS</span>
          </div>

          <h3 class="font-bold my-5 text-2xl">I love building stuff 🛠</h3>

          <p class="text-xl leading-relaxed mb-10">
            I started exploring the world of programming in early/mid 2022 and
            instantly fell in love with it. I have been tinkering with all sorts
            of technologies but found myself gravitating towards Python and
            Javascript.
          </p>
        </div>
      </section>

      <!-- Featured projects (maximum of 4)-->
      <section class="my-10">
        <h1 class="title basis-auto">Projects</h1>
        <div class="flex flex-col gap-4">
          <div class="bg-white rounded-2xl shadow-lg p-3">
            <div>
              <h1 class="font-bold my-5 text-3xl md:(hidden)">
                Sorting Visualizer 👀
              </h1>
              <img
                class="border bg-orange-300 mb-5 w-full p-1"
                :src="sortingImg"
                alt="project image"
              />
              <div class="flex flex-wrap gap-2">
                <button
                  class="border-current rounded border-2 text-center py-1 basis-full duration-200 hover:(bg-blue-800 border-blue-800 text-white)"
                >
                  Live Site (not linked yet)
                </button>
                <a
                  target="_blank"
                  href="https://github.com/Francois16/sorting-visualizer"
                  class="border-current rounded border-2 text-center py-1 basis-full duration-200 hover:(bg-slate-800 border-slate-800 text-white)"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=iU6eZS_MQC4"
                  class="border-current rounded border-2 text-center py-1 basis-full duration-200 hover:(bg-[#c4302b] border-[#c4402b] text-white)"
                >
                  Video <span>(2min 34s)</span>
                </a>
              </div>
            </div>
            <div>
              <h1 class="hidden md:(block)">Sorting Visualizer</h1>
              <div
                class="flex flex-wrap my-6 gap-1 justify-center items-center"
              >
                <span class="technology">Javascript</span>
                <span class="technology">HTML</span>
                <span class="technology">CSS</span>
              </div>
              <div class="text-xl text-center leading-relaxed">
                <p>Created a visualizer for popular sorting algorithms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact info/form -->
      <section class="mb-10">
        <h1 class="title mb-10">Contact Me</h1>

        <form
          @submit.prevent="sendMessage"
          class="flex flex-col bg-white p-4 gap-3 shadow-lg rounded-2xl"
        >
          <div class="flex flex-col gap-1">
            <label for="name">Name</label>
            <input
              v-model="formData.name"
              class="input"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="surname">Surname</label>
            <input
              v-model="formData.surname"
              class="input"
              type="text"
              placeholder="Surname"
              required
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="message">Message</label>
            <textarea
              v-model="formData.message"
              class="input"
              type="text"
              placeholder="Message"
              rows="10"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-orange-500 py-4 text-xl text-white rounded-lg font-bold duration-200 hover:(bg-orange-500/80)"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  </main>
</template>

<style>
label {
  @apply font-semibold text-sm;
}

.input {
  @apply px-3 py-2 border rounded;
}

.technology {
  @apply font-semibold text-white py-1 px-3;
  /* bg-slate-800 giving error on linting */
  background-color: rgba(30, 41, 59, 1);
}

.title {
  @apply font-semibold mb-10 text-4xl relative inline-block;
}

.title::after {
  @apply bg-orange-500 duration-200;
  content: "";
  position: absolute;
  width: 100%;
  height: 20px;
  left: 15px;
  bottom: 0;
  z-index: -10;
  opacity: 60%;
}

.title:hover::after {
  animation: left-to-right 0.25s linear;
}

@keyframes left-to-right {
  0% {
    width: 100%;
  }
  50% {
    width: 40%;
  }
  100% {
    width: 100%;
  }
}
/* Keyframe */
</style>
