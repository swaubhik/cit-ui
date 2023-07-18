<template>
  <main class="">
    <Header />
    <div class="max-w-full mx-auto min-h-screen">
      <div
        class="hero min-h-[20vh] mb-3 shadow-xl"
        style="background-image: url(https://cit.ac.in/images/buildings.jpg)"
      >
        <div class="hero-overlay bg-opacity-70"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl flex items-center justify-center flex-col">
            <h1 class="text-7xl font-bold text-white mb-5">{{ pageTile }}</h1>
            <p class="mb-5 text-5xl font-bold w-max">
              Central Institue of Technology Kokrajhar
            </p>
            <!-- <button class="btn btn-primary">Get Started</button> -->
          </div>
        </div>
      </div>
      <slot />
    </div>
    <Footer />
  </main>
</template>
<script setup lang="ts">
const route = useRoute();
const pageTile = computed(() => {
  return route.matched[0].name;
});
</script>
