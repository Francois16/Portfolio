<script setup>
import manImg from "../assets/images/about.png";
</script>

<template>
  <main>
    <div class="container">
      <!-- Hero -->
      <section class="min-h-screen pt-10">
        <h1>Hi, I'm Francois | Fullstack Developer</h1>
        <p>
          I love exploring and creating 🚀 I'm a lifelong learner 🎓 and might
          have a thing for freshly roasted coffee ☕
        </p>
      </section>

      <!-- Skills -->
      <section class="bg-blue-400">
        <h1>My Skills</h1>

        <img class="max-w-60" :src="manImg" alt="seated man on a laptop" />

        <div>
          <span>Python</span>
          <span>VueJS</span>
          <span>Javascript</span>
          <span>Django</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

        <h3>I love building stuff 🛠</h3>

        <p>
          I started exploring the world of programming in early/mid 2022 and
          instantly fell in love with it. I have been tinkering with all sorts
          of technologies but found myself gravitating towards Python and
          Javascript.
        </p>
      </section>

      <!-- Featured projects (maximum of 4)-->
      <section class="bg-violet-400">
        <h1>Projects</h1>

        <div>
          <div>
            <img src="" alt="project image" />
            <button>Live Site</button>
            <button>Github Repo</button>
          </div>
          <div>
            <h3>Frontend</h3>
            <h1>Sorting Visualizer</h1>
            <div>
              <span>Javascript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <p>
              Implemented popular sorting algorithms and visualized them in a
              bar graph.
            </p>
            <p>
              I learned about <span>algorithms</span> &
              <span>data structures</span> and
              <span>DOM manipulation</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Contact info/form -->
      <section class="bg-orange-400">
        <form>
          <label for="name">Name</label>
          <input type="text" placeholder="Name" required />
          <label for="surname">Surname</label>
          <input type="text" placeholder="Surname" required />
          <label for="message">Message</label>
          <input type="text" placeholder="Message" required />
          <button @submit.prevent="submit">Send!</button>
        </form>
      </section>
    </div>
  </main>
</template>
