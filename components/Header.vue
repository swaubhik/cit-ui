<script lang="ts" setup>
const navigation = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Institute",
    link: "/institute",
  },
  {
    name: "Management",
    link: "/management",
  },
  {
    name: "Academics",
    link: "/academics",
  },
  {
    name: "Reseach & Development",
    link: "/research",
  },
  {
    name: "Departments",
    link: "/departments",
  },
  {
    name: "Admission",
    link: "/admission",
  },
  {
    name: "Library",
    link: "/library",
  },
];
</script>

<template>
  <header class="shadow">
    <div class="bg-error py-2"></div>
    <div class="container mx-auto py-4">
      <div class="flex justify-center items-center gap-8">
        <div class="w-14 h-auto">
          <nuxt-img format="webp" src="/logo.png" />
        </div>
        <div class="text-left">
          <NuxtLink to="/" class="text-error">
            केन्द्रीय प्रोध्योगिकी संस्थान कोकराझार
          </NuxtLink>
          <h3 class="font-bold text-xl">
            CENTRAL INSTITUTE OF TECHNOLOGY KOKRAJHAR
          </h3>
          <p class="font-light">
            Deemed to be University under MoE, Govt. of India
          </p>
        </div>
      </div>
    </div>
  </header>
  <div class="sticky top-0 z-50 bg-info">
    <div class="container mx-auto">
      <div class="flex justify-center border-t px-5">
        <div class="flex justify-center">
          <nav class="navbar text-base-100 text-lg font-semibold gap-8">
            <nuxt-link
              exactActiveClass="font-bold"
              v-for="(nav, index) in navigation"
              :key="index"
              :to="nav.link"
              >{{ nav.name }}</nuxt-link
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
