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
                                src="10_an9jxl"
                                alt="line stories by ahmed waleed learn coding easy - best web developer in egypt"
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
							v-for="(p, i) in pro"
							:key="`product-${i}-${p.id}`"
						>
						<div class="col-lg-4 col-md-6 col-sm-6 col-12">
							<div class="rbt-cat-box rbt-cat-box-1 variation-3 text-center">
                                      <div class="inner">
                                          <div style="width: 100%; max-width: 550px; box-shadow: 6px 6px 10px hsl(206.5, 0%, 75%);">
  <div style="position: relative; padding-bottom: 56.15%; height: 0; overflow: hidden;">
    <iframe 
      style="position: absolute; top: 0; left:0; width: 100%; height: 100%; border: 0;"
      loading="lazy"
      :srcdoc="`<style>
        * {
        padding: 0;
        margin: 0;
        overflow: hidden;
        }
        
        body, html {
          height: 100%;
        }
        img, svg {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
          transition: all 250ms ease-in-out;
        }
        
        body:hover svg {
          filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
          transform: scale(1.2);
        }
      </style>
      <a href='https://www.youtube.com/embed/${p.video}?autoplay=1'>
        <img src='https://img.youtube.com/vi/${p.video}/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>
        <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
      </a>
      `"
      :src="`https://www.youtube.com/embed/${p.video}`" 
      :title="`${p.title}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
</div>  
                                          <p>{{ p.title }}</p>
                                      </div>
                                  </div>
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


const { data: pro } = await useAsyncData("line-stories", () => {
		return queryContent("en-us/line-stories").find();
	});


  useSchemaOrg([
  defineWebSite({
    name: 'Ahmed Waleed love helps others learn JavaScript, React, Vue and more',
  }),
  defineWebPage({
    name: 'Line Stories by Ahmed Waleed web developer advocate love helps others learn JavaScript, React, Vue and more',
  }),
  definePerson({
    name: 'Ahmed Waleed Senior Web Develoepr Trainer',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        titleTemplate: 'Ahmed Waleed love helps others learn Coding · Line Stories',
        meta: [
            { name: 'description', content: 'Line Stories by Ahmed Waleed, web developer, owner of Line IT company, loves to help newcomers in the tech industry learn JavaScript, React, Vue, Next, Nuxt, Web Testing, Go, PHP' },
            { name: 'keywords', content: 'Line Stories Ahmed Waleed Web developer,Ahmed Waleed Javascript Courses, Web developing Projects, Front End Projects, Back End Projects, Javascript Projects, React Projects, Vue Projects, Next Projects, Nuxt Projects, Typescript Projects, Web developing Teacher, Best Web Programmer in Egypt' },
            { name: 'apple-mobile-web-app-title', content:'Ahmed Waleed love helps others learn coding | Line Stories' },
            { name: 'application-name', content:'Ahmed Waleed love helps others learn coding | Line Stories' },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:'Ahmed Waleed love helps others learn coding | Line Stories' },
            { name: 'og:title', content:'Ahmed Waleed love helps others learn coding | Line Stories' },
            { name: 'og:description', content:'Ahmed Waleed love helps others learn coding | Line Stories' },
            { name: 'twitter:description', content: 'Ahmed Waleed one of the best web developers in Egypt' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'subject', content: 'Line Stories page of Ahmed Waleed, a web developer trainer in Egypt' },
            { name: 'note', content: 'Line Stories page of Ahmed Waleed, a web developer trainer in Egypt' },
            { name: 'msapplication-tooltip', content: 'Line Stories page of Ahmed Waleed, a web developer trainer in Egypt' },
        ],
        link: [{ rel: 'stylesheet', href: '/assets/css/en.css' }],
        htmlAttrs: { lang: 'en-US' },
})  
</script>
