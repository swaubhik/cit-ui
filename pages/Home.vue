<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { defineComponent } from "vue";
import { ref } from "vue";

defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
});
const options = {
  type: "loop",
  label: "CIT Events",
  rewind: true,
  rewindByDrag: true,
  width: "100%",
  heightRatio: 0.3,
  start: 5,
  padding: "10%",
  gap: "1rem",
  autoplay: true,
  easing: "cubic-bezier(.42,.65,.27,.99)",
  drag: "free",
  snap: true,
  pauseOnHover: true,
  cover: true,
  resetProgress: false,
  arrows: true,
  pagination: true,
  // isNavigation: true,
  // updateOnMove: true,

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
  const res = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
  const images = await res.json();
  return images.map(
    (image: { download_url: any; url: any }) => image.download_url
  );
}
const sliderImages = ref<string[]>([]);
onBeforeMount(async () => {
  sliderImages.value = await fetchImages();
});

const notices = [
  {
    title: "Notice 1",
    date: "2021-09-01",
    description: "This is notice 1",
  },
  {
    title: "Notice 2",
    date: "2021-09-02",
    description: "This is notice 2",
  },
  {
    title: "Notice 3",
    date: "2021-09-03",
    description: "This is notice 3",
  },
  {
    title: "Notice 4",
    date: "2021-09-04",
    description: "This is notice 4",
  },
  {
    title: "Notice 5",
    date: "2021-09-05",
    description: "This is notice 5",
  },
  {
    title: "Notice 6",
    date: "2021-09-06",
    description: "This is notice 6",
  },
  {
    title: "Notice 7",
    date: "2021-09-07",
    description: "This is notice 7",
  },
  {
    title: "Notice 8",
    date: "2021-09-08",
    description: "This is notice 8",
  },
  {
    title: "Notice 9",
    date: "2021-09-09",
    description: "This is notice 9",
  },
  {
    title: "Notice 10",
    date: "2021-09-10",
    description: "This is notice 10",
  },
];
const tenders = [
  {
    title: "Tender 1",
    date: "2021-09-01",
    description: "This is tender 1",
  },
  {
    title: "Tender 2",
    date: "2021-09-02",
    description: "This is tender 2",
  },
  {
    title: "Tender 3",
    date: "2021-09-03",
    description: "This is tender 3",
  },
  {
    title: "Tender 4",
    date: "2021-09-04",
    description: "This is tender 4",
  },
  {
    title: "Tender 5",
    date: "2021-09-05",
    description: "This is tender 5",
  },
  {
    title: "Tender 6",
    date: "2021-09-06",
    description: "This is tender 6",
  },
  {
    title: "Tender 7",
    date: "2021-09-07",
    description: "This is tender 7",
  },
  {
    title: "Tender 8",
    date: "2021-09-08",
    description: "This is tender 8",
  },
  {
    title: "Tender 9",
    date: "2021-09-09",
    description: "This is tender 9",
  },
  {
    title: "Tender 10",
    date: "2021-09-10",
    description: "This is tender 10",
  },
];
const tabSelected = ref(0);
</script>

<template>
  <section class="px-10">
    <Splide class="shadow" :options="options" aria-label="My Favorite Images">
      <SplideSlide v-for="(image, index) in sliderImages" :key="index">
        <nuxt-img :src="image" alt="slider image" />
        <p
          class="w-full h-full bg-black/50 text-white flex justify-center items-center"
        >
          {{ image }}
        </p>
      </SplideSlide>
    </Splide>
    <!-- about us -->
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-5">
            About Us
          </h3>
          <p class="text-gray-600 text-justify">
            Central Institute of Technology (CIT), Kokrajhar is situated in
            Kokrajhar District of Bodoland Territorial Council (BTC) in Assam.
            CIT has been established for the basic objective of fulfilling the
            aspirations of the Bodo People relating to their cultural identity,
            language, education and overall economic development of the region
            and to impart Bodo youths with requisite technological and
            vocational training to produce the required manpower to give the
            impetus to economic growth of this area and to integrate the Bodo
            People into the mainstream of Technical and Vocational Education. It
            is a Centrally Funded Institute under the Ministry of Human Resource
            Development, Government of India.
          </p>
        </div>
        <div class="w-full md:w-1/2 p-6">
          <img
            src="https://source.unsplash.com/random/500x300/?college"
            alt=""
            class="w-full h-full object-cover object-center rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
    <!-- tabs for notice tenders events  -->

    <!-- <Tabs class="h-80 overflow-auto">
      <Tab class="sticky top-0" title="Tab 1">
        <li
          class="list-none w-full md:w-1/2 p-6 flex flex-col justify-center"
          v-for="notice in notices"
          :key="notice.date"
        >
          <div class="card shadow-lg compact side bg-base-100">
            <div class="card-body">
              <h2 class="card-title">{{ notice.title }}</h2>
              <p>{{ notice.description }}</p>
            </div>
            <div class="card-footer">
              <div class="badge badge-ghost badge-md">
                {{ notice.date }}
              </div>
            </div>
          </div>
        </li>
      </Tab>
      <Tab title="Tab 2">Hello From Tab 2</Tab>
      <Tab title="Tab 3">Hello From Tab 3</Tab>
    </Tabs> -->

    <div
      class="flex justify-between max-w-4xl py-2 rounded-2xl overflow-hidden text-white font-semibold text-lg"
    >
      <button
        @click="tabSelected = 0"
        class="bg-info py-2 w-full"
        :class="{ 'bg-sky-500 text-white font-bold': tabSelected === 0 }"
      >
        Notices
      </button>
      <button
        @click="tabSelected = 1"
        class="bg-info py-2 w-full"
        :class="{ 'bg-sky-500 text-white font-bold': tabSelected === 1 }"
      >
        News & Events
      </button>
      <button
        @click="tabSelected = 2"
        :class="{ 'bg-sky-500 text-white font-bold': tabSelected === 2 }"
        class="bg-info py-2 w-full"
      >
        Tenders
      </button>
    </div>
    <ul
      v-if="tabSelected === 0"
      class="flex flex-col gap-1 max-w-4xl py-2 px-4 rounded-xl bg-red-50 h-80 overflow-auto"
    >
      <li v-for="notice in notices" :key="notice.date">
        <div class="card w-full bg-base-100 shadow-xl">
          <div class="py-2 px-4">
            <h2 class="card-title">
              {{ notice.title }}
              <!-- if noice is index0  -->
              <span
                v-if="notices.indexOf(notice) === 0"
                class="badge badge-outline badge-accent animate-pulse"
              >
                New
              </span>
            </h2>
            <p>{{ notice.description }}</p>
            <div class="card-actions justify-end">
              <dd class="">{{ notice.date }}</dd>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul
      v-if="tabSelected === 2"
      class="flex flex-col max-w-4xl gap-1 py-2 px-4 rounded-xl bg-red-50 h-80 overflow-auto"
    >
      <li v-for="tender in tenders" :key="tender.date">
        <div class="card w-full bg-base-100 shadow-xl">
          <div class="py-2 px-4">
            <h2 class="card-title">
              {{ tender.title }}
              <!-- if noice is index0  -->
              <span
                v-if="tenders.indexOf(tender) === 0"
                class="badge badge-outline badge-accent"
              >
                New
              </span>
            </h2>
            <p>{{ tender.description }}</p>
            <div class="card-actions justify-end">
              <dd class="">{{ tender.date }}</dd>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
