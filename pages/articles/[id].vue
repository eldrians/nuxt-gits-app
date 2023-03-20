<template>
  <div>
    <div class="w-full h-fit md:h-screen flex flex-row relative">
      <img
        src="https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
        alt=""
        class="object-cover h-full w-full absolute"
      />
      <div class="w-full h-full bg-white/30 backdrop-blur-xl relative">
        <div class="flex justify-center items-center font-Lora mx-4 text-center md:mx-20 mt-20">
          <h1 class="text-3xl md:text-5xl font-semibold tracking-wide">
            {{ article.title }}
          </h1>
        </div>
        <NuxtLink
          to="/articles"
          class="w-full flex flex-row mt-4 justify-start items-center mx-20"
        >
          <IconBack class="text-[30px]"></IconBack>
          <p class="uppercase pl-1 font-semibold tracking-wide">back</p>
        </NuxtLink>
        <div
          class="w-full mt-4 mb-4 h-[300px] md:h-[400px] flex justify-center items-center"
        >
          <div class="w-[300px] md:w-[600px] h-[200px] md:h-[300px] rounded-md shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
              alt=""
              class="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
        <div class="mx-6 md:mx-32 text-xl mb-20">
          {{ article.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const back = () => {
  router.back();
};
// const test = ref(null)
// onMounted(() => {
//     console.log(test.value.innerHTML)
// })
const route = useRoute();
// When accessing /posts/1, route.params.id will be 1
// console.log(route.params.id)
const articleId = ref(route.params.id);
const { data: article } = await useFetch(
  `https://dummyjson.com/posts/${articleId.value}`
);
</script>