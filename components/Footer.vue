<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
  <div class="mt-auto bg-base-200 text-base-content">
    <footer class="footer p-10 xl:max-w-7xl xl:mx-auto">
      <div>
        <nuxt-img src="/logo.png" width="40" />
        <p>
          Central Instiute of Technology Kokrajhar<br />
          All rights reserved &copy;
          {{ year }}
        </p>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
    <footer class="footer footer-center p-4 bg-error text-white">
      <div class="xl:max-w-7xl xl:mx-auto">
        <p>
          Maintained by Computer Science & Engineering Department, CIT
          Kokrajhar. In case of any discrepancy in the website, please report us
          at webmaster@cit.ac.in
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
