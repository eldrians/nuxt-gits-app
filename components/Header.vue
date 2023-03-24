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
            to="/articles"
            class="py-1 hover:bg-slate-300 text-white hover:text-black"
            >Article</NuxtLink
          >
        </div>
        <div
          class="h-full w-1/6 backdrop-blur-xl bg-white/30 flex justify-center items-center"
        >
          <button
          @click="showNav = !showNav">
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

<!-- <div
  :class="showNav ? 'items-end':'items-end'"  
  class="w-[150px] h-screen  text-white font-Lora flex flex-col bg-pink-400 justify-center transform transition-all duration-300"
  >
    <div class="w-full h-fit flex flex-col justify-center items-center bg-yellow-700 relative">
      <div
        class="h-fit w-fit border rounded-full border-white bg-black flex flex-col right-0 absolute text-xl py-8 items-center justify-center space-y-6 px-2"
      >
        <div>
          <NuxtLink to="#section1" class=""
            ><IconHome class="text-white hover:text-red-600"
          /></NuxtLink>
        </div>
        <div>
          <NuxtLink to="#sectionMe" class="text-white hover:text-red-600"
            ><IconPerson
          /></NuxtLink>
        </div>
        <div>
          <NuxtLink to="#sectionProject" class="text-white hover:text-red-600"
            ><IconExperience
          /></NuxtLink>
        </div>
        <div>
          <NuxtLink to="#section2" class="text-white hover:text-red-600"
            ><IconContact
          /></NuxtLink>
        </div>
        <div>
          <NuxtLink to="/articles" class="text-white hover:text-red-600"
            ><IconArticle
          /></NuxtLink>
        </div>
      </div>
      <button
        @click="showNav = true"
        class="w-full p-2 mt-4 bg-black/80 rounded-full shadow-xl hover:bg-black top-0 transition absolute duration-300 ease-in-out"
      >
        <IconBack class="text-[20px]"></IconBack>
      </button>
    </div>
  </div> -->

<script setup lang="ts">
const showNav = ref<boolean>(false);
</script>
