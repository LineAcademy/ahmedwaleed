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
                                src="10_an9jxl.webp"
                                alt="h"
                            />
                            <!-- <img src="/assets/images/كورس بناء موقع جونيور.png" alt=""> -->
                        </div>
                    </div>
                    <!-- End Dashboard Top  -->

                    <div class="rbt-team-area rbt-section-gapBottom">
        <div class="container">
            <div class="row mb--60">
                <div class="col-lg-12">
                                    <div class="section-title text-center">
                                        <h2 class="title">الفديوهات</h2>
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
		return queryContent("line-stories").find();
	});


    useSchemaOrg([
  defineWebSite({
    name: 'موقع احمد وليد لمساعدة الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  defineWebPage({
    name: 'حكايات مؤثرة في البرمجة - موقع احمد وليد مبرمج يساعد الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  definePerson({
    name: 'احمد وليد مدرب برمجة مواقع',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        title: 'حكايات مؤثرة في البرمجة',
        meta: [
            { name: 'description', content: 'حكايات مؤثرة في البرمجة موقع احمد وليد مبرمج مواقع , مالك شركة لاين اي تي , يحب مساعدة الوافدين الجدد في مجال صناعة البرمجيات علي تعلم جافاسكريبت , رياكت , فيو , نيكست , اختبار الويب , جو , بي اتش بي' },
            { name: 'keywords', content: 'حكايات مؤثرة في البرمجة, طلاب احمد وليد مبرمج مواقع, برمجة الويب, فرونت اند, باك اند, جافاسكريبت, رياكت, فيو, نيكست, تايبسكريبت, معلم برمجة مواقع, افضل مبرمج مواقع في مصر' },
            { name: 'apple-mobile-web-app-title', content:'احمد وليد مدرب برمجة المواقع | حكايات مؤثرة في عالم البرمجة' },
            { name: 'application-name', content:'احمد وليد مدرب برمجة المواقع | حكايات مؤثرة في عالم البرمجة' },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:'احمد وليد مدرب برمجة المواقع | حكايات مؤثرة في عالم البرمجة' },
            { name: 'og:title', content:'احمد وليد مدرب برمجة المواقع | حكايات مؤثرة في عالم البرمجة' },
            { name: 'og:description', content:'احمد وليد مدرب برمجة المواقع | حكايات مؤثرة في عالم البرمجة' },
            { name: 'twitter:description', content: 'احمد وليد افضل مبرمج مواقع في مصر' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'subject', content: 'حكايات مؤثرة في عالم البرمجة من أحمد وليد مدرب برمجة مواقع في مصر' },
            { name: 'note', content: 'حكايات مؤثرة في عالم البرمجة من أحمد وليد مدرب برمجة مواقع في مصر' },
            { name: 'msapplication-tooltip', content: 'حكايات مؤثرة في عالم البرمجة من أحمد وليد مدرب برمجة مواقع في مصر' },
        ],
        htmlAttrs: { lang: 'ar-EG' },
})  
</script>
