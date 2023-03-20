<template>
  <div>
    <!-- header -->
    <div
      class="w-full h-20 flex flex-col md:flex-row  items-start font-Lora justify-evenly px-8 md:px-20 mt-20"
    >
      <NuxtLink
        to="/"
        class="w-full md:w-1/4 h-full flex flex-row justify-start items-center"
      >
        <IconBack class="text-[30px]"></IconBack>
        <p class="uppercase pl-1 font-semibold tracking-wide">back</p>
      </NuxtLink>
      <div class="w-full md:w-2/4 flex justify-start md:justify-center mt-6 md:mt-0 items-center h-full">
        <h1 class="text-6xl">Article</h1>
      </div>
      <div class="w-full md:w-1/4 h-full"></div>
    </div>

    <!-- body -->
    <div class="mx-8 md:mx-20 my-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          :to="`/articles/${article.id}`"
          class="rounded-xl bg-slate-200"
          v-for="(article, index) in articles.posts"
          :key="index"
        >
          <div
            :style="{
              backgroundImage: `url(https://source.unsplash.com/random/?${article.tags[1]})`,
            }"
            class="bg-top shadow-lg bg-cover h-72 w-full rounded-md flex flex-col justify-end group"
          >
            <div
              class="overflow-hidden backdrop-blur-md rounded-b-md bg-white/20 font-Lora h-[100px] group-hover:h-[200px] group transition-all transform duration-500 ease-in-out"
            >
              <h2 class="p-4 text-2xl font-semibold leading-none">
                {{ article.title }}
              </h2>
              <p
                class="px-4 h-[85px] hidden group-hover:block overflow-hidden text-sm"
              >
                {{ article.body }}
              </p>
              <div
                class="h-[20px] px-4 mt-2 hidden group-hover:block font-semibold text-slate-900 hover:text-black text-sm"
              >
                see more...
              </div>
            </div>
          </div>

        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "article",
});

const { data: articles } = await useFetch("https://dummyjson.com/posts");
// console.log(articles.value.posts[0])
const randomImage = ref("https://source.unsplash.com/random");
</script>