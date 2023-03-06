
import { SectionAPicture } from '~~/.nuxt/components';

<template>
  <div class="w-full h-screen relative">
    <div class="w-full h-screen absolute flex flex-row">
      <div class=" bg-black w-2/6 relative flex justify-end items-center">
        <SectionAPicture />
      </div>
      <div class="bg-white w-4/6 flex justify-end items-center font-Lora">
        <h1 class="text-right mr-20 text-6xl tracking-widest">Axel Eldrian.</h1>
      </div>
    </div>
    <!-- <img src="~/assets/image/example-bg.jpg"
        class="object-cover absolute w-full h-full grayscale"> -->
    <!-- <Header class="absolute"/> -->
    <slot />
  </div>
</template>