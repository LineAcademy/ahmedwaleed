<template>
    <div>
        <!-- Start Card Style -->
    <div class="rbt-dashboard-area rbt-section-gapBottom" style="background-color: #F3F5F4;">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row g-5">
                        <div dir="rtl" class="col-lg-3 order-lg-first order-last">
                            <!-- Start Dashboard Sidebar  -->
                            <div class="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                                <div class="inner">
                                    <div class="content-item-content">

                                        <div class="rbt-default-sidebar-wrapper">
                                            <div class="section-title mb--20">
                                                <h6 class="rbt-title-style-2">من قاعة الأَثَر</h6>
                                            </div>
                                            <nav class="mainmenu-nav">
                                                <ul class="dashboard-mainmenu rbt-default-sidebar-list">
                                                    <li>
							<nuxtLink to="/hall-of-fame/salma-mohamed-frontend-developer">
							    <nuxt-img loading="lazy" class="image-person" provider="cloudinary" src="sq_1_tbc0ty" alt="سلمي محمد فرونت اند - فخور جدا بيها لأنها مجتهدة" />
							    <span> حكاية سلمي - FrontEnd Developer </span>
						    	</nuxtLink>
						    </li>
                                                    <li>
							<nuxtLink to="/hall-of-fame/hosam-salah-frontend-developer">
							    <nuxt-img loading="lazy" class="image-person" provider="cloudinary" src="sq_2_valaau" alt="حسام صلاح فرونت اند - فخور جدا بيه لأنه مجتهد" />
							    <span> حسام صلاح - FrontEnd Developer </span>
						    	</nuxtLink>
						    </li>
							<li>
							<nuxtLink to="/hall-of-fame/farha-fouad-frontend-developer">
							    <nuxt-img loading="lazy" class="image-person" provider="cloudinary" src="sq_3_t3rlvu" alt="فرحة فؤاد فرونت اند - فخور جدا بيها لأنها مجتهدة" />
							    <span> فرحة فؤاد - FrontEnd Developer </span>
						    	</nuxtLink>
						    </li>
							<li>
							<nuxtLink to="/hall-of-fame/maha-frontend-developer">
							    <nuxt-img loading="lazy" class="image-person" provider="cloudinary" src="sq_4_mndfcz" alt="مها جابر فرونت اند - فخور جدا بيها لأنها مجتهدة" />
							    <span> مها جابر - FrontEnd Developer </span>
						    	</nuxtLink>
						    </li>
							<li>
							<nuxtLink to="/hall-of-fame/menna-mohamed-frontend-developer">
							    <nuxt-img loading="lazy" class="image-person" provider="cloudinary" src="sq_7_kjfeee" alt="منة محمد فرونت اند - فخور جدا بيها لأنها مجتهدة" />
							    <span> منة محمد - FrontEnd Developer </span>
						    	</nuxtLink>
						    </li>
							<li>
							<nuxtLink to="/hall-of-fame/ahmed-takeshy-frontend-developer">
							    <nuxt-img loading="lazy" class="image-person" provider="cloudinary" src="sq_5_ymbccp" alt="احمد تاكيشي فرونت اند - فخور جدا بيه لأنه مجتهد" />
							    <span> احمد تاكيشي - FrontEnd Developer </span>
						    	</nuxtLink>
						    </li>
							<li>
							<nuxtLink to="/hall-of-fame/mahmoud-sead-frontend-developer">
							    <nuxt-img loading="lazy" class="image-person" provider="cloudinary" src="sq_6_heze3l" alt=" محمود سعيد فرونت اند - فخور جدا بيه لأنه مجتهد " />
							    <span> محمود سعيد - FrontEnd Developer </span>
						    	</nuxtLink>
						    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- End Dashboard Sidebar  -->
                        </div>

                        <div dir="rtl" class="col-lg-9 pt-4">
                            <!-- Start Enrole Course  -->
                            <div class="rbt-dashboard-content">
                                <div class="content">
                                    <div>
                                        <h4 class="rbt-title-style-3">وَأَنْ لَيْسَ لِلإِنسَانِ إِلَّا مَا سَعَى ۝ وَأَنَّ سَعْيَهُ سَوْفَ يُرَى</h4>
                                    </div>

                                    <div class="rbt-dashboard-table table-responsive mobile-table-750">
                                        <div class="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
            <div class="blog-content-wrapper rbt-article-content-wrapper">
                <div class="content">
					<div class="post-thumbnail mb-4 position-relative wp-block-image alignwide">
                        <figure>
                            <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								:src="hall.subImage"
								:alt="hall.title" 
							/>
                        </figure>
                    </div>
					<article
				class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
			>
				<ClientOnly>
					<ContentRenderer
						class="prose lg:prose-base prose-sm prose-slate blog-link pr-7 max-w-none"
						:value="hall"
					>
						<template #empty>
							<p>No content found.</p>
						</template>
					</ContentRenderer>
				</ClientOnly>
			</article>
				</div>
			</div>
		</div>
                                    </div>

                                </div>
                            </div>
                            <!-- End Enrole Course  -->
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
	const slug = useRoute().params.slug;
	const { data: hall } = await useAsyncData(slug, () => {
		return queryContent(`hall-of-fame/${slug}`).findOne();
	});

if(hall.value === null){
		useRouter().push({ path: "/hall-of-fame" });
	}

	const toc = computed(() => {
		if (!hall.value) return [];
		const items = hall.value.excerpt?.children;
		if (!items) return [];
		const toc = [];
		const tags = ["h2", "h3", "h4", "h5", "h6"];
		items.forEach((item) => {
			if (tags.includes(item.tag)) {
				toc.push({
					id: item.props.id,
					title: item.props.id.toString().replace(/-/g, " "),
					depth: Number(item.tag.replace(/h/g, "")),
				});
			}
		});
		return toc;
	});

    
    useSchemaOrg([
  defineWebSite({
    name: 'موقع احمد وليد لمساعدة الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  defineWebPage({
    name: `${hall.value.title} - موقع احمد وليد مبرمج يساعد الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد`,
  }),
  definePerson({
    name: 'احمد وليد مدرب برمجة مواقع',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        title: `${hall.value.name} ${hall.value.title}`,
        meta: [
            { name: 'description', content: `${hall.value.description}` },
            { name: 'keywords', content: 'اراء الاشخاص في مدرب برمجة, طلاب احمد وليد مبرمج مواقع, برمجة الويب, فرونت اند, باك اند, جافاسكريبت, رياكت, فيو, نيكست, تايبسكريبت, معلم برمجة مواقع, افضل مبرمج مواقع في مصر' },
            { name: 'apple-mobile-web-app-title', content:`احمد وليد مدرب برمجة المواقع | ${hall.value.title}`},
            { name: 'application-name', content:`احمد وليد مدرب برمجة المواقع | ${hall.value.title}` },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:`احمد وليد مدرب برمجة المواقع | ${hall.value.title}` },
            { name: 'og:title', content:`احمد وليد مدرب برمجة المواقع | ${hall.value.title}` },
            { name: 'og:description', content:`احمد وليد مدرب برمجة المواقع | ${hall.value.title}` },
	    { name: 'twitter:image', property:'twitter:image', content:`https://res.cloudinary.com/drcfigqqr/image/upload/w_250/v1687822265/${hall.value.image}.png` },
	    { name: 'og:image', property:'og:image', content:`https://res.cloudinary.com/drcfigqqr/image/upload/w_250/v1687822265/${hall.value.image}.png` },
            { name: 'twitter:description', content: 'احمد وليد افضل مبرمج مواقع في مصر' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: `https://ahmed.lineitsolutions.com${hall.value._path}` },
            { name: 'subject', content: ` ${hall.value.title} - أحمد وليد مدرب برمجة مواقع في مصر`},
            { name: 'note', content: ` ${hall.value.title} - أحمد وليد مدرب برمجة مواقع في مصر` },
            { name: 'msapplication-tooltip', content: ` ${hall.value.title} - أحمد وليد مدرب برمجة مواقع في مصر` },
        ],
        htmlAttrs: { lang: 'ar-EG' },
})
</script>

<style scoped>
	.image-person {
    width: 50px;
    margin-left: 5px;
}
	.section-title {
        background: #0963de;
    display: inline-block;
    border-radius: 5px;
    padding: 10px;
}
	.blog-link {
		@apply prose-a:text-primary before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
	}

	.blog-link :is(:where(h1,h2,h3,h4,h5,h6,th):not(:where([class~=not-prose] *))):before {
		color: rgb(109 40 217/1);
    	content: "#";
    	margin-right: 0.25rem;
	}

	.prose :where(a):not(:where([class~=not-prose] *)) {
    color: rgb(109 40 217/1);
    font-weight: 500;
    text-decoration: underline;
}

.blog-link :is(:where(h1):not(:where([class~=not-prose] *))):before {
    content: "";
}

@media (min-width: 1024px){
	.lg\:prose-base :where(pre):not(:where([class~=not-prose] *)) {
    border-radius: 0.375rem;
    font-size: .875em;
    line-height: 1.7142857;
    margin-bottom: 1.7142857em;
    margin-top: 1.7142857em;
    padding: 0.8571429em 1.1428571em;
}
}

.prose-sm :where(pre):not(:where([class~=not-prose] *)) {
    border-radius: 0.25rem;
    font-size: .8571429em;
    line-height: 1.6666667;
    margin-bottom: 1.6666667em;
    margin-top: 1.6666667em;
    padding: 0.6666667em 1em;
}
.prose :where(pre):not(:where([class~=not-prose] *)) {
    background-color: #1e293b;
    border-radius: 0.375rem;
    color: #e2e8f0;
    font-size: .875em;
    font-weight: 400;
    line-height: 1.7142857;
    margin-bottom: 1.7142857em;
    margin-top: 1.7142857em;
    overflow-x: auto;
    padding: 0.8571429em 1.1428571em;
}
</style>
