<template>
  <header>
    <h1>Questifyer.com</h1>
    <p w-39rem>Below are several projects I've been working on. Most are still in progress, although my time to work on them is limited. 
      Most of these projects have public source code available on <a href="https://github.com/users/MJZwart" target="_blank" text-teal-6>GitHub</a>.</p>
  </header>
  <div flex flex-col gap-3>
    <div flex flex-row gap-3>
      <a href="https://questifyer.com"><Panel title="Questifyer" lead="Gamified task lists" hover:drop-shadow="[0_0_4rem_midnightblue]" /></a>
      <a href="https://questifyer.com"><Panel title="To-do" lead="Easy tracking of to-do lists" hover:drop-shadow="[0_0_4rem_teal]" /></a>
    </div>
    <div flex flex-row gap-3>
      <a href="https://questifyer.com"><Panel title="Torn hitlist" lead="API based hitlist for easier chaining in the PBBG Torn" hover:drop-shadow="[0_0_4rem_#646cffaa]" /></a>
      <Panel title="In progress" lead="More to come, once it's ready to upload" hover:drop-shadow="[0_0_4rem_crimson]" />
    </div>
  </div>
  <footer absolute p-4 bottom-0 left-0 right-0><a href="https://github.com/users/MJZwart" target="_blank" text-teal-6>Source on Github.</a> By Mitchell.</footer>
</template>

<script setup lang="ts">
import Panel from './components/Panel.vue';
</script>
