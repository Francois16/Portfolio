<script setup>
import { ref } from "vue";
import router from "../router";
import manImg from "../assets/images/about.png";
import sortingImg from "../assets/images/projects/sorting.png";

const formData = ref({
  name: "",
  surname: "",
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
  formData.value.surname = "";
  formData.value.message = "";
}
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="min-h-screen bg-sky-200 relative">
      <div class="custom-shape-divider-bottom-1665035750">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="md:(container)">
        <div class="container bottom-32 md:(bottom-48) absolute">
          <h1 class="font-semibold text-5xl leading-tight">
            <span class="block"
              >Hi, I'm <span class="text-orange-500">Francois.</span>
            </span>
            I'm a Fullstack Developer.
          </h1>
          <p class="max-w-xs mt-5 text-xl leading-relaxed">
            I love exploring and creating 🚀 I'm a lifelong learner 🎓 and might
            have a thing for freshly roasted coffee ☕
          </p>
        </div>
      </div>
    </section>

    <div class="container">
      <!-- Skills -->
      <section class="py-10 md:(py-20)" id="about">
        <h1 class="title md:(hidden)">My Skills</h1>
        <div
          class="grid grid-cols-1 gap-3 md:(grid-cols-2 items-center justify-end)"
        >
          <img class="mx-auto" :src="manImg" alt="seated man on a laptop" />

          <div>
            <h1 class="title hidden md:(inline-block)">My Skills</h1>
            <div
              class="flex flex-wrap mt-10 mb-5 gap-1 items-center justify-center sm:(justify-start)"
            >
              <span class="technology">Python</span>
              <span class="technology">Django</span>
              <span class="technology">Javascript</span>
              <span class="technology">VueJS</span>
              <span class="technology">HTML</span>
              <span class="technology">CSS</span>
            </div>

            <h3 class="font-bold my-8 text-2xl">I love building stuff 🛠</h3>

            <p class="mt-4 mb-8 flex flex-wrap gap-5 md:(flex-row)">
              <a
                class="bg-slate-800 rounded shadow py-2 px-5 text-white duration-200 font-semibold hover:(bg-slate-800/90)"
                target="_blank"
                href="https://github.com/Francois16"
                >Github</a
              >
              <a
                class="bg-slate-800 rounded shadow py-2 px-5 text-white duration-200 font-semibold hover:(bg-slate-800/90)"
                target="_blank"
                href="https://www.linkedin.com/in/francoispaulsen/"
                >LinkedIn</a
              >
              <a
                class="bg-slate-800 rounded shadow py-2 px-5 text-white duration-200 font-semibold hover:(bg-slate-800/90)"
                target="_blank"
                href="#"
                >Resume</a
              >
            </p>

            <p class="text-xl leading-relaxed mb-10 max-w-md">
              When I started exploring the world of programming, I instantly
              fell in love with it. I have been tinkering with all sorts of
              technologies but found myself gravitating towards Python and
              Javascript.
            </p>
          </div>
        </div>
      </section>

      <!-- Featured projects (maximum of 4)-->
      <section id="projects" class="my-10">
        <h1 class="title basis-auto">Projects</h1>
        <div class="grid grid-cols-1 sm:(grid-cols-2) xl:(grid-cols-4) gap-4">
          <div class="bg-white rounded-2xl shadow-lg p-3">
            <div>
              <h1 class="font-bold my-5 text-3xl">Sorting Visualizer 👀</h1>
              <img
                class="p-1 bg-slate-800 rounded mb-5 w-full p-1"
                :src="sortingImg"
                alt="project image"
              />
              <div class="flex flex-wrap gap-2">
                <a
                  target="_blank"
                  href="https://steady-piroshki-2b8a8c.netlify.app/"
                  class="capitalize border-current rounded border-2 text-center py-1 basis-full duration-200 hover:(bg-blue-800 border-blue-800 text-white)"
                >
                  Try it yourself
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Francois16/sorting-visualizer"
                  class="capitalize border-current rounded border-2 text-center py-1 basis-full duration-200 hover:(bg-slate-800 border-slate-800 text-white)"
                >
                  Check out Github
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=iU6eZS_MQC4"
                  class="capitatilize border-current rounded border-2 text-center py-1 basis-full duration-200 hover:(bg-[#c4302b] border-[#c4402b] text-white)"
                >
                  Watch Demo Video <span>(2min 34s)</span>
                </a>
              </div>
            </div>
            <div>
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
    </div>
    <!-- Contact info/form -->
    <section class="pb-10 relative bg-sky-200">
      <div class="custom-shape-divider-top-1665036720">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="pt-48 container">
        <div
          id="contact"
          class="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-4"
        >
          <h1 class="title">Contact Me</h1>
          <form
            @submit.prevent="sendMessage"
            name="contact"
            method="POST"
            data-netlify="true"
            class="flex flex-col gap-3"
          >
            <div class="flex flex-col gap-1">
              <label for="name">Name</label>
              <input
                class="input"
                name="name"
                id="name"
                v-model="formData.name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div class="flex flex-col gap-1">
              <label for="surname">Surname</label>
              <input
                class="input"
                name="surname"
                id="surname"
                v-model="formData.surname"
                type="text"
                placeholder="Surname"
                required
              />
            </div>
            <div class="flex flex-col gap-1">
              <label for="message">Message</label>
              <textarea
                class="input"
                name="message"
                id="message"
                v-model="formData.message"
                type="text"
                placeholder="Message"
                rows="10"
                required
              />
            </div>
            <button
              type="submit"
              class="bg-orange-500 py-4 text-xl text-white rounded-lg font-bold duration-200 outline outline-orange-500 hover:(bg-orange-500/80 outline-offset-4)"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
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
  @apply font-semibold bg-sky-200 py-1 px-5 rounded-full;
  /* bg-slate-800 giving error on linting */
  /* background-color: rgba(30, 41, 59, 1); */
}

.title {
  @apply font-semibold mb-10 text-4xl relative inline-block z-10;
}

.title::after {
  @apply bg-orange-500 duration-200;
  content: "";
  position: absolute;
  width: 100%;
  height: 20px;
  left: 15px;
  bottom: 0;
  z-index: -1;
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

.custom-shape-divider-bottom-1665035750 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1665035750 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1665035750 .shape-fill {
  fill: #f9fafb;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-bottom-1665035750 svg {
    width: calc(144% + 1.3px);
    height: 150px;
  }
}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-bottom-1665035750 svg {
    width: calc(219% + 1.3px);
    height: 150px;
  }
}

.custom-shape-divider-top-1665036720 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1665036720 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1665036720 .shape-fill {
  fill: #f9fafb;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-shape-divider-top-1665036720 svg {
    width: calc(144% + 1.3px);
    height: 150px;
  }
}

/** For mobile devices **/
@media (max-width: 767px) {
  .custom-shape-divider-top-1665036720 svg {
    width: calc(219% + 1.3px);
    height: 150px;
  }
}
</style>
