<template>
  <div class="absolute w-full h-screen">
    <LandingPageSectionA id="section1" class="overflow-x-hidden" />
    <div class="w-full h-fit md:h-screen flex flex-col md:flex-row" id="sectionMe">
      <div class="w-full md:w-1/2 h-screen md:h-full">
        <LandingPageAbout />
      </div>
      <div class="w-full md:w-1/2 h-screen md:h-full bg-pink-500 flex justify-center items-center font-Lora text-3xl ">Comming Soon</div>
    </div>
    <LandingPageProject id="sectionProject"/>
    <LandingPageContact />
  </div>
</template>
