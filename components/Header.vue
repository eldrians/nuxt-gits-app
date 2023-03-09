<template>
  <div class="w-fit h-screen text-white ml-4 font-Lora flex items-center">
    <div
      class="h-fit w-fit border rounded-full border-white bg-black flex flex-col text-xl py-8 items-center justify-center space-y-6 px-2"
    >
      <div>
        <NuxtLink to="/" class=""
          ><IconHome class="text-white hover:text-red-600"
        /></NuxtLink>
      </div>
      <div>
        <NuxtLink to="/" class="text-white hover:text-red-600"
          ><IconExperience
        /></NuxtLink>
      </div>
      <div>
        <NuxtLink to="/events" class="text-white hover:text-red-600"
          ><IconContact
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

