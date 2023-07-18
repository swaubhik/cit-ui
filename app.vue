<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default {
  setup() {
    useHead({
      bodyAttrs: {
        class: "antialiased font-sans bg-white",
      },
    });
  },
};
</script>
