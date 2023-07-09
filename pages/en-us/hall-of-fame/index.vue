<template>
    <div>
            <!-- Start Card Style -->
    <div class="rbt-dashboard-area rbt-section-overlayping-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Start Dashboard Top  -->
                    <div class="rbt-dashboard-content-wrapper">
                        <div class="tutor-bg-photo mt--19">
                            <nuxt-img
                                loading="lazy" 
                                fit="cover" 
                                provider="cloudinary" 
                                src="6_fev0d9"
                                alt="hall of fame by ahmed waleed learn coding easy - best web developer in egypt"
                            />
                        </div>
                    </div>
                    <!-- End Dashboard Top  -->

                    <div class="rbt-team-area rbt-section-gapBottom">
        <div class="container">
            <div class="row mb--60">
                <div class="col-lg-12">
                                    <div class="section-title text-center">
                                        <h2 class="title">Videos</h2>
                                    </div>
                                </div>
            </div>
            <div dir="rtl" class="row row--15 mt_dec--30">
              <template
							v-for="(p, i) in hall"
							:key="`product-${i}-${p.id}`"
						>
						<div class="col-lg-4 col-md-6 col-12 mt--30">
							<NuxtLink
								:to="`${p._path}`"
								:class="{ 'lg:col-start-3': i === 0 && !activeCategory }"
								class="rounded-md bg-white hover:shadow-lg transition-all hover:cursor-pointer"
							>
              <div class="rbt-team team-style-default rbt-hover-02">
                        <div class="inner">
                            <div class="thumbnail">
                                <nuxt-img
                                loading="lazy" 
                                fit="cover"
								style="width: 100%;"
                                provider="cloudinary" 
								:src="p.image"
								:alt="p.title" 
								/>
                            </div>
                            <div class="content">
                                <h2 class="title">{{ p.name }}</h2>
                                <h6 class="subtitle theme-gradient">{{ p.title }}</h6>
                                <p class="description">  {{ p.description }}  </p>
                        <a class="rbt-btn btn-gradient mt-4 hover-icon-reverse" :href="`${p._path}`"><span class="icon-reverse-wrapper"><span>اقرء المزيد</span></span></a>
                            </div>
                        </div>
                    </div>
							</NuxtLink>
						</div>
						</template>
            </div>
        </div>
    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Card Style -->
    </div>
</template>

<script setup>


const { data: hall } = await useAsyncData("hall-of-fame", () => {
		return queryContent("en-us/hall-of-fame").find();
	});

    useSchemaOrg([
  defineWebSite({
    name: 'Ahmed Waleed love helps others learn JavaScript, React, Vue and more',
  }),
  defineWebPage({
    name: 'Hall Of Fame by Ahmed Waleed web developer advocate love helps others learn JavaScript, React, Vue and more',
  }),
  definePerson({
    name: 'Ahmed Waleed Senior Web Develoepr Trainer',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        titleTemplate: 'Ahmed Waleed love helps others learn Coding · Hall Of Fame',
        meta: [
            { name: 'description', content: 'Hall Of Fame by Ahmed Waleed, web developer, owner of Line IT company, loves to help newcomers in the tech industry learn JavaScript, React, Vue, Next, Nuxt, Web Testing, Go, PHP' },
            { name: 'keywords', content: 'Hall Of Fame Ahmed Waleed Web developer,Ahmed Waleed Javascript Courses, Web developing Projects, Front End Projects, Back End Projects, Javascript Projects, React Projects, Vue Projects, Next Projects, Nuxt Projects, Typescript Projects, Web developing Teacher, Best Web Programmer in Egypt' },
            { name: 'apple-mobile-web-app-title', content:'Ahmed Waleed love helps others learn coding | Hall Of Fame' },
            { name: 'application-name', content:'Ahmed Waleed love helps others learn coding | Hall Of Fame' },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:'Ahmed Waleed love helps others learn coding | Hall Of Fame' },
            { name: 'og:title', content:'Ahmed Waleed love helps others learn coding | Hall Of Fame' },
            { name: 'og:description', content:'Ahmed Waleed love helps others learn coding | Hall Of Fame' },
            { name: 'twitter:description', content: 'Ahmed Waleed one of the best web developers in Egypt' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'subject', content: 'Hall Of Fame page of Ahmed Waleed, a web developer trainer in Egypt' },
            { name: 'note', content: 'Hall Of Fame page of Ahmed Waleed, a web developer trainer in Egypt' },
            { name: 'msapplication-tooltip', content: 'Hall Of Fame page of Ahmed Waleed, a web developer trainer in Egypt' },
        ],
        link: [{ rel: 'stylesheet', href: '/assets/css/en.css' }],
        htmlAttrs: { lang: 'en-US' },
})
</script>
