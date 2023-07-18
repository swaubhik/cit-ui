<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";

defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
});
const options = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  autoplay: true,
  pauseOnHover: false,
  resetProgress: false,
  arrows: true,
  pagination: true,
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
  },
};

async function fetchImages() {
  const res = await fetch(
    "https://picsum.photos/v2/list?page=2&limit=100"
  );
  const images = await res.json();
  console.log(images)
  return images.map((image: { url: any; }) => image.url);
}
const image = ref<string>("");
const sliderImages = ref<string[]>([]);
onMounted(async () => {
  sliderImages.value = await fetchImages();
});
</script>

<template>
  <div
    class="hero min-h-screen"
    style="
      background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);
    "
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <Splide class="shadow" :options="options" aria-label="My Favorite Images">
    <SplideSlide v-for="(image, index) in sliderImages" :key="index">
      <nuxt-img :src="image" alt="slider image" />
    </SplideSlide>
  </Splide>
</template>

<style scoped></style>
