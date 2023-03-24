<template>
  <div>
    <div 
    :class="showNav ? '-left-[225px]' : '-left-0'"
    class="relative w-[270px] h-screen tranform duration-500 ease-in-out">
      <div class="w-[270px] h-screen flex justify-center right-0 items-center absolute">
        <div
          class="h-full w-5/6 py-12 bg-black font-semibold uppercase text-center flex flex-col space-y-4 justify-center"
        >
          <NuxtLink
            to="#section1"
            class="py-1 hover:bg-slate-300 text-white hover:text-black"
            >Home</NuxtLink
          >
          <NuxtLink
            to="#sectionMe"
            class="py-1 hover:bg-slate-300 text-white hover:text-black"
            >about</NuxtLink
          >
          <NuxtLink
            to="#sectionExperience"
            class="py-1 hover:bg-slate-300 text-white hover:text-black"
            >experience</NuxtLink
          >
          <NuxtLink
            to="#sectionProject"
            class="py-1 hover:bg-slate-300 text-white hover:text-black"
            >project</NuxtLink
          >
          <NuxtLink
            to="#section2"
            class="py-1 hover:bg-slate-300 text-white hover:text-black"
            >contact me</NuxtLink
          >
          <NuxtLink
            to="/articles"
            class="py-1 hover:bg-slate-300 text-white hover:text-black"
            >Article</NuxtLink
          >
        </div>
        <div
          class="h-full w-1/6 backdrop-blur-xl bg-white/10 flex justify-center items-center"
        >
          <button
          @click="showNav = !showNav" >
            <div :class="showNav ? 'rotate-180' : 'rotate-0'"
            class="origin-center tranform duration-500 ease-in-out">
              <IconLeft
                class="text-black text-[50px]"
              ></IconLeft>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showNav = ref<boolean>(true);
</script>
