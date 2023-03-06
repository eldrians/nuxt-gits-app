<template>
  <div
    class="relative border-1 border-black p-[250px] -right-[250px] flex justify-center items-center"
  >
    <!-- <div class="logos">
      <div class="logo top-[250px]">
      </div>
      <div class="logo"></div>
    </div> -->
    <div class="flex justify-center items-center">
      <img src="~/assets/image/main-foto.png" alt="" class="h-full absolute" />
    </div>
    <!-- <div class="w-full h-full flex justify-center items-center">
      <div
        class="px-[150px] py-[10px] bg-yellow-600 absolute bottom-0 left-[110px]"
      ></div>
    </div> -->
  </div>
</template>

<script setup>
// document.querySelector("body").addEventListener("mousemove", eyeMoving);

// function eyeMoving() {
//   let eye = document.querySelectorAll(".logo");
//   eye.forEach((eye) => {
//     let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
//     let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

//     let radian = Math.atan2(event.pageX - x, event.pageY - y);
//     let rotate = radian * (180 / Math.PI) * -1 + 270;
//     eye.style.transform = "rotate(" + rotate + "deg)";
//     console.log(radian);
//   });
// }
</script>