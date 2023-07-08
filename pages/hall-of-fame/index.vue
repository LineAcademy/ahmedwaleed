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
                                src="5_zucjq6.webp"
                                alt="h"
                            />
                            <!-- <img src="/assets/images/كورس بناء موقع جونيور.png" alt=""> -->
                        </div>
                    </div>
                    <!-- End Dashboard Top  -->

                    <div class="rbt-team-area bg-color-white rbt-section-gapBottom">
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
		return queryContent("hall-of-fame").find();
	});

    useSchemaOrg([
  defineWebSite({
    name: 'موقع احمد وليد لمساعدة الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  defineWebPage({
    name: 'اراء الاشخاص في مساعدة احمد في البرمجة - موقع احمد وليد مبرمج يساعد الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  definePerson({
    name: 'احمد وليد مدرب برمجة مواقع',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        title: 'اراء طلاب مجموعات البرمجة',
        meta: [
            { name: 'description', content: 'اراء الاشخاص ل احمد وليد مبرمج مواقع , مالك شركة لاين اي تي , يحب مساعدة الوافدين الجدد في مجال صناعة البرمجيات علي تعلم جافاسكريبت , رياكت , فيو , نيكست , اختبار الويب , جو , بي اتش بي' },
            { name: 'keywords', content: 'اراء الاشخاص في مدرب برمجة, طلاب احمد وليد مبرمج مواقع, برمجة الويب, فرونت اند, باك اند, جافاسكريبت, رياكت, فيو, نيكست, تايبسكريبت, معلم برمجة مواقع, افضل مبرمج مواقع في مصر' },
            { name: 'apple-mobile-web-app-title', content:'احمد وليد مدرب برمجة المواقع | أراء طلاب مجموعات البرمجة' },
            { name: 'application-name', content:'احمد وليد مدرب برمجة المواقع | أراء طلاب مجموعات البرمجة' },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:'احمد وليد مدرب برمجة المواقع | أراء طلاب مجموعات البرمجة' },
            { name: 'og:title', content:'احمد وليد مدرب برمجة المواقع | أراء طلاب مجموعات البرمجة' },
            { name: 'og:description', content:'احمد وليد مدرب برمجة المواقع | أراء طلاب مجموعات البرمجة' },
            { name: 'twitter:description', content: 'احمد وليد افضل مبرمج مواقع في مصر' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'subject', content: 'اراء طلاب مجموعات البرمجة - أحمد وليد مدرب برمجة مواقع في مصر' },
            { name: 'note', content: 'اراء طلاب مجموعات البرمجة - أحمد وليد مدرب برمجة مواقع في مصر' },
            { name: 'msapplication-tooltip', content: 'اراء طلاب مجموعات البرمجة - أحمد وليد مدرب برمجة مواقع في مصر' },
        ],
        htmlAttrs: { lang: 'ar-EG' },
})
</script>
