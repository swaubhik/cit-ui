<template>
  <main class="">
    <Header />
    <div class="max-w-full mx-auto min-h-screen">
      <slot />
    </div>
    <Footer />
  </main>
</template>
<script setup lang="ts">
const route = useRoute();

const department = await queryContent("departments")
  .where({ slug: route.params.slug })
  .findOne();
</script>
