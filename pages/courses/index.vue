<template>
	<div>
		<main>
			<div class="rbt-page-banner-wrapper">
        <!-- Start Banner BG Image  -->
        <div class="rbt-banner-image"></div>
        <!-- End Banner BG Image  -->
        <div class="rbt-banner-content">
            <!-- Start Banner Content Top  -->
            <div class="rbt-banner-content-top">
                <div class="container">
                    <div dir="rtl" class="row">
                        <div class="col-lg-12">
                            <!-- Start Breadcrumb Area  -->
                            <ul class="page-list">
                                <li class="rbt-breadcrumb-item"><a href="index.html">الرئيسية</a></li>
                                <li>
                                    <div class="icon-right"><i class="feather-chevron-left"></i></div>
                                </li>
                                <li class="rbt-breadcrumb-item active">كل الكورسات</li>
                            </ul>
                            <!-- End Breadcrumb Area  -->

                            <p class="description"> احاول وأجتهد في تبسيط المعلومة في دورات مجانية </p>
							<h1 class="lg:text-lg font-medium mb-5">
						جميع الفئات
						<button
							v-if="activeCategory"
							@click="setCategory(null)"
							class="px-3 rounded-sm capitalize bg-gray-200 ml-5"
						>
							كل الكورسات
						</button>
					</h1>
					<div class="d-flex items-center space-x-5 mb-5">
						<template v-for="(c, i) in categories" :key="`categroy-${i}`">
							<button
								@click="setCategory(c)"
								:class="{
									'bg-primary-100 text-primary': c == activeCategory,
									' bg-gray-200': c !== activeCategory,
								}"
								class="px-3 py-2 rounded-sm text-[13px] capitalize shrink-0 mr-2"
								style="margin-right: 5px;    border-radius: 15px;background: #192335;color: white;"
							>
								{{ c }}
							</button>
						</template>
					</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Banner Content Top  -->
        </div>
    </div>
	<div class="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div class="container">
					<div dir="rtl" class="row g-5">
						<template
							v-for="(p, i) in filterProducts"
							:key="`product-${i}-${p.id}`"
						>
						<div class="col-lg-4 col-md-6 col-sm-12 col-12">
							<NuxtLink
								:to="`${p._path}`"
								:class="{ 'lg:col-start-3': i === 0 && !activeCategory }"
								class="rounded-md bg-white hover:shadow-lg transition-all hover:cursor-pointer"
							>
							<div class="rbt-card variation-02 rbt-hover card-minimal">
								<div class="rbt-card-img">
                                <nuxt-img
                                loading="lazy" 
                                fit="cover"
								style="width: 100%;"
                                provider="cloudinary" 
								:src="p.image"
								:alt="p.title" 
								/> 
                        </div>
                <div class="rbt-card-body">
                  <h4 class="rbt-card-title"><a :href="`${p._path}`">{{ p.title }}</a></h4>
                  <div class="rbt-card-bottom mt-4">
                    <a class="transparent-button" :href="`${p._path}`"><i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" fill-rule="evenodd"><path d="M10.614 0l5.629 5.629-5.63 5.629"/><path stroke-linecap="square" d="M.663 5.572h14.594"/></g></svg></i> 
						أقرء
                      المزيد</a>
                  </div>
                </div>
              </div>
							</NuxtLink>
						</div>
						</template>
					</div>
        </div>
    </div>
			<section class="lg:px-[15%] px-[5%] pt-20">
				<h1
					class="lg:text-5xl text-2xl leading-normal font-semibold text-center"
				>
				ابق على اطلاع مع
				</h1>
				<h1
					class="lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text"
				>
				أحدث اتجاهات هندسة البرمجيات
				</h1>

				
			</section>
		</main>
	</div>
</template>

<script setup>
	// Shoutout to the Fake store API
	// https://fakestoreapi.com/docs

	const { data: products } = await useAsyncData("products", () => {
		return queryContent("courses").find();
	});

	console.log(products.value);


	// create an array of categories from the products
	const categories = products.value.reduce((acc, product) => {
		if (!acc.includes(product.category)) {
			acc.push(product.category);
		}
		return acc;
	}, []);

	//var used to store the active category
	const activeCategory = ref(null);

	// function used to set the active category
	const setCategory = (category) => {
		activeCategory.value = category;
		useRouter().push({
			query: {
				category: category,
			},
		});
	};
	// set category on mount if it exist in query
	onMounted(() => {
		if (useRoute().query.category) {
			activeCategory.value = useRoute().query.category;
		}
	});


	// function used to filter the products by category
	const filterProducts = computed(() => {
		if (!activeCategory.value) {
			return products.value;
		}
		return products.value.filter((product) => {
			return (
				product.category.toLowerCase() == activeCategory.value.toLowerCase()
			);
		});
	});

	

	useSchemaOrg([
  defineWebSite({
    name: 'موقع احمد وليد لمساعدة الأخرين في تعلم البرمجة , جافاسكريبت , رياكت , فيو والمزيد',
  }),
  defineWebPage({
    name: 'كورسات ودورات احمد وليد لتعليم برمجة الويب - موقع احمد وليد مبرمج يساعد الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  definePerson({
    name: 'احمد وليد مدرب برمجة مواقع',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        title: 'دورات تعلم البرمجة',
        meta: [
            { name: 'description', content: 'كورسات احمد وليد برمجة , كورسات برمجة في مصر , احمد يحب مساعدة الوافدين الجدد في مجال صناعة البرمجيات علي تعلم جافاسكريبت , رياكت , فيو , نيكست , اختبار الويب , جو , بي اتش بي' },
            { name: 'keywords', content: ' كورسات احمد وليد برمجة, كورسات احمد برمجة مواقع, كورسات برمجة الويب, كورسات فرونت اند, كورسات باك اند, كورسات جافاسكريبت, كورسات رياكت, فيو, نيكست, تايبسكريبت, معلم برمجة مواقع, افضل مبرمج مواقع في مصر' },
            { name: 'apple-mobile-web-app-title', content:'احمد وليد مدرب برمجة المواقع | كورسات البرمجة' },
            { name: 'application-name', content:'احمد وليد مدرب برمجة المواقع | كورسات البرمجة' },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:'احمد وليد مدرب برمجة المواقع | كورسات البرمجة' },
            { name: 'og:title', content:'احمد وليد مدرب برمجة المواقع | كورسات البرمجة' },
            { name: 'og:description', content:'احمد وليد مدرب برمجة المواقع | كورسات البرمجة' },
            { name: 'twitter:description', content: 'احمد وليد افضل مبرمج مواقع في مصر' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'subject', content: 'كورسات البرمجة - أحمد وليد مدرب برمجة مواقع في مصر' },
            { name: 'note', content: 'كورسات البرمجة - أحمد وليد مدرب برمجة مواقع في مصر' },
            { name: 'msapplication-tooltip', content: 'كورسات البرمجة - أحمد وليد مدرب برمجة مواقع في مصر' },
        ],
        htmlAttrs: { lang: 'ar-EG' },
})
</script>

<style></style>
