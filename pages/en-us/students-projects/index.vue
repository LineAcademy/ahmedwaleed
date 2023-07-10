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
                                src="7_l8igi7"
                                alt="projects and competitions by ahmed waleed learn coding easy - best web developer in egypt"
                            />
                        </div>
                    </div>
                    <!-- End Dashboard Top  -->

                                        <div class="rbt-team-area rbt-section-gapBottom">
        <div class="container">
            <div class="row mb--60">
                <div class="col-lg-12">
                                    <div class="section-title text-center">
                                        <h2 class="title"> MY Family Videos Web Projects </h2>
                                    </div>
                                </div>
            </div>

            <div class="row mt--50">
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
        <img src='https://img.youtube.com/vi/${p.video}/hqdefault.jpg' alt='${p.title}'>
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

            <div class="row mb-4 mt-4">
                <div class="col-lg-12">
                                    <div class="section-title text-center">
                                        <h2 class="title"> MY Family Live Web Projects </h2>
                                    </div>
                                </div>
            </div>

            <div dir="rtl" class="row">
                        <!-- Start Single Demo  -->
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title"> Ahmed Takeshi</h3>
                                        <h3 class="title">tourism and hotels company<span class="label-new">React,UI,Api</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://wanderly.vercel.app/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="wanderly_bjlgfy" 
                                alt=" مشروع احمد تاكيشي ويب سايت سياحة وفنادق - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-wanderly_iazkmp" 
                                alt=" مشروع احمد تاكيشي ويب سايت مشاهدة من الموبايل سياحة وفنادق - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->

                        <!-- Start Single Demo  -->
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title">Maha Gaber</h3>
                                        <h3 class="title"> One page Fintech Company <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://maha4gaber.github.io/fintech/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="finetech1_poslrv" 
                                alt=" مشروع مها جابر ويب سايت صفحة لشركة Fintech - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-finetech1_aarifx" 
                                alt=" مشروع مها جابر ويب سايت من الموبايل صفحة لشركة Fintech - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->

                        <!-- Start Single Demo  -->
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title"> Mohamed Salah </h3>
                                        <h3 class="title"> One page marketing company <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://mohamedshalaash.github.io/Bemax-edit/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="bemax1_nsfvsw" 
                                alt=" مشروع محمد صلاح ويب سايت لشركة ماركتينج - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-bemax1_tr1mdj" 
                                alt=" مشروع محمد صلاح ويب سايت موبايل ريسبونسيف لشركة ماركتينج - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->
                        <!-- Start Single Demo  -->
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title"> Mustafa Ahmad</h3>
                                        <h3 class="title"> YouTube videos <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://mostafaahmed3.github.io/Youtube-clone/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="yt_pcip05" 
                                alt=" مشروع مصطفي أحمد ويب سايت صفحة واحدة فديوهات يوتيوب - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-yt_timxrv" 
                                alt=" مشروع مصطفي أحمد ويب سايت موبايل ريسبونسيف صفحة واحدة فديوهات يوتيوب - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->

                                                <!-- Start Single Demo  -->
                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title">Abdalhalim</h3>
                                        <h3 class="title">  furniture store <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://abdelhaleem1.github.io/Rocker-Funiture-Store/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="rocker_vbv7mu" 
                                alt=" مشروع عبدالحليم صفحة ويب سايت واحدة متجر بيع أثاث - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-rocker_mbhxcn" 
                                alt=" مشروع عبدالحليم صفحة ويب سايت موبايل ريسبونسيف واحدة متجر بيع أثاث - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->

                                                <!-- Start Single Demo  -->
                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title">Mohammed</h3>
                                        <h3 class="title"> One Page company <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://mohamed20297.github.io/repo3/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="start_q2ou2u" 
                                alt=" مشروع محمد صفحة ويب سايت واحدة لشركة - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-start_hksyik" 
                                alt=" مشروع محمد صفحة ويب سايت موبايل ريسبونسيف واحدة لشركة - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->

                                                <!-- Start Single Demo  -->
                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title"> Mohammed Saeed </h3>
                                        <h3 class="title">  One page for Baymax <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://mahmoudsaeed-source.github.io/DesignBeMax/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="bemaxo_yh75tn" 
                                alt=" مشروع محمد سعيد صفحة ويب سايت واحدة لشركة بيماكس - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-bemaxo_sz83o3" 
                                alt=" مشروع محمد سعيد صفحة ويب سايت موبايل ريسبونسيف واحدة لشركة بيماكس - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->
                                                <!-- Start Single Demo  -->
                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title"> Maha Gaber </h3>
                                        <h3 class="title"> One page Responsive <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://maha4gaber.github.io/bondi/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="bondi_xxvysb" 
                                alt=" مشروع مها جابر صفحة ويب سايت واحدة لشركة مناسب للشاشات - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-bondi_t56pry" 
                                alt=" مشروع مها جابر صفحة ويب سايت واحدة لشركة مناسب للشاشات - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->
                                                <!-- Start Single Demo  -->
                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="single-demo">
                              <div class="content">
                                        <h3 class="title">Abdalhalim</h3>
                                        <h3 class="title"> marketing agency <span class="label-new">HTML,CSS,JS</span></h3>
                                    </div>
                                <a target="_blank" class="single-demo-link" href="https://abdelhaleem1.github.io/Agency-Start-Bootstrap-Theme/">
                                    <div class="thumbnail">
                                      <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="agency_hhqe5f" 
                                alt=" مشروع عبدالحليم صفحة ويب سايت واحدة لوكالة تسويق - مع احمد وليد جروب برمجة المواقع " />
                                        <div class="mobile-view">
                                            <div class="inner">
                                              <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="mobile-agency_drtykv" 
                                alt=" مشروع عبدالحليم صفحة ويب سايت موبايل ريسبونسيف واحدة لوكالة تسويق - مع احمد وليد جروب برمجة المواقع " />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- End Single Demo  -->
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

<style scoped>
.single-demo .content {
    margin-top: 25px;
}
</style>
<script setup>


const { data: pro } = await useAsyncData("students-projects", () => {
		return queryContent("en-us/students-projects").find();
	});

	console.log(pro.value);

	const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }


    useSchemaOrg([
  defineWebSite({
    name: 'Ahmed Waleed love helps others learn JavaScript, React, Vue and more',
  }),
  defineWebPage({
    name: 'Students Projects by Ahmed Waleed web developer advocate love helps others learn JavaScript, React, Vue and more',
  }),
  definePerson({
    name: 'Ahmed Waleed Senior Web Develoepr Trainer',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        titleTemplate: 'Ahmed Waleed love helps others learn Coding · Students Projects',
        meta: [
            { name: 'description', content: 'Students Projects by Ahmed Waleed, web developer, owner of Line IT company, loves to help newcomers in the tech industry learn JavaScript, React, Vue, Next, Nuxt, Web Testing, Go, PHP' },
            { name: 'keywords', content: 'Students Projects Ahmed Waleed Web developer,Ahmed Waleed Javascript Courses, Web developing Projects, Front End Projects, Back End Projects, Javascript Projects, React Projects, Vue Projects, Next Projects, Nuxt Projects, Typescript Projects, Web developing Teacher, Best Web Programmer in Egypt' },
            { name: 'apple-mobile-web-app-title', content:'Ahmed Waleed love helps others learn coding | Students Projects' },
            { name: 'application-name', content:'Ahmed Waleed love helps others learn coding | Students Projects' },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:'Ahmed Waleed love helps others learn coding | Students Projects' },
            { name: 'og:title', content:'Ahmed Waleed love helps others learn coding | Students Projects' },
            { name: 'og:description', content:'Ahmed Waleed love helps others learn coding | Students Projects' },
            { name: 'twitter:description', content: 'Ahmed Waleed one of the best web developers in Egypt' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'subject', content: 'Students Projects page of Ahmed Waleed, a web developer trainer in Egypt' },
            { name: 'note', content: 'Students Projects page of Ahmed Waleed, a web developer trainer in Egypt' },
            { name: 'msapplication-tooltip', content: 'Students Projects page of Ahmed Waleed, a web developer trainer in Egypt' },
        ],
        link: [{ rel: 'stylesheet', href: '/assets/css/en.css' }],
        htmlAttrs: { lang: 'en-US' },
})  
</script>
