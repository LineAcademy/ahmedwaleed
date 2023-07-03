<script setup>

defineProps(['error'])
useHead({
  title: 'Error',
  meta: [
      { name: 'description', content: 'error.' },
  ],
})
</script>


<template>
  <div>
    <GlobalHeader />
        <div class="banner__area p-relative z-index-3 banner__space blue-bg pt--50 pb--60" style="background-color: #F3F5F4;">
            <div class="banner__text">
            </div>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-12">
            <div class="banner__section text-center mb--30">
            <h2 class="text-primary"><span>.</span>  {{ error.statusCode }} </h2>
            <h2><span>.</span>الصفحة غير موجودة | Page Not Found</h2>
            <NuxtLink class="main-btn" to="/"><span>Home Page | الرئيسية</span></NuxtLink>
            </div>
            </div>
            </div>
            </div>
            </div>
            <GlobalFooter />
  </div>
</template>
