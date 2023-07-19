<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
const { data: departments } = await useAsyncData("departments", () => {
  return queryContent("departments").find();
});
</script>

<template>
  <NuxtLink
    v-for="(department, index) in departments"
    :key="index"
    :to="`/departments/${department.slug}`"
    >{{ department.title }}</NuxtLink
  >
</template>
