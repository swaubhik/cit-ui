<template>
  <article class="px-10">
    <div class="flex">
      <div class="flex flex-col prose">
        <ContentDoc />
      </div>
      <NuxtImg
        class="bg-black"
        :src="department.background.url"
        :alt="department.background.alt"
        width="100%"
      />
    </div>
  </article>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "department",
});
const route = useRoute();

const department = await queryContent("departments")
  .where({ slug: route.params.slug })
  .findOne();
</script>
