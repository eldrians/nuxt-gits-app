<template>
  <div class="absolute w-full h-screen">
    <LandingPageSectionA id="section1" class="overflow-x-hidden" />
    <div class="w-full h-screen flex" id="sectionMe">
      <div class="w-1/2 h-full">
        <LandingPageAbout />
      </div>
      <div class="w-1/2 h-full bg-pink-500"></div>
    </div>
    <LandingPageProject id="sectionProject"/>
    <LandingPageContact />
  </div>
</template>
