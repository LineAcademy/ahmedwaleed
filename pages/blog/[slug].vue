<template>
	<div>
		<main class="rbt-dashboard-area rbt-section-gapBottom" style="background-color: #F3F5F4;">
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
                                                <h6 class="rbt-title-style-2"> React.JS & Next.JS </h6>
                                            </div>
                                            <nav class="mainmenu-nav">
                                                <ul class="dashboard-mainmenu rbt-default-sidebar-list">
                                                    <li><nuxtLink to="/blog/add-cypress-to-react-js"><span> إزاي اضيف Cypress في React </span></nuxtLink></li>
                                                    <li><nuxtLink to="/blog/react-software-architecture-pattern"><span>ال Software Architecture (ssr, state, patterns) ل REACT.JS</span></nuxtLink></li>
                                                    <li><nuxtLink to="/blog/react-lite-youtube-embeds"><span>افضل طريقة لاضافة YouTube iframe في React</span></nuxtLink></li>
                                                </ul>
                                            </nav>

						 <div class="section-title mt-4 mb--20">
                                                <h6 class="rbt-title-style-2">JamStack</h6>
                                            </div>
                                            <nav class="mainmenu-nav">
                                                <ul class="dashboard-mainmenu rbt-default-sidebar-list">
                                                    <li><nuxtLink to="/blog/static-sites-are-back-in-2023"><span> المواقع الثابتة تعود في 2023 </span></nuxtLink></li>
                                                    <li><nuxtLink to="/blog/why-i-love-jamstack-1"><span>  ليه انا بحب JamStack </span></nuxtLink></li>
                                                </ul>
                                            </nav>

                                            <div class="section-title mt-4 mb--20">
                                                <h6 class="rbt-title-style-2">  Nuxt.JS  </h6>
                                            </div>

                                            <nav class="mainmenu-nav">
                                                <ul class="dashboard-mainmenu rbt-default-sidebar-list">
                                                    <li><nuxtLink to="/blog/nuxt-image-performance"><span> تحسين الأداء باستخدام Nuxt-Image </span></nuxtLink></li>
                                                    <li><nuxtLink to="/blog/why-i-love-nuxtjs-1"><span> ليه انا بحب اطار عمل NuxtJS </span></nuxtLink></li>
                                                </ul>
                                            </nav>

						<div class="section-title mt-4 mb--20">
                                                <h6 class="rbt-title-style-2">  تابع أيضا  </h6>
                                            </div>

                                            <nav class="mainmenu-nav">
                                                <ul class="dashboard-mainmenu rbt-default-sidebar-list">
                                                    <li><a target="_blank" href="/line-stories"><span> اسبوع الحكايات المؤثرة في البرمجة </span></a></li>
                                                    <li><a target="_blank" href="/students-projects"><span> مشاريع ومسابقات في البرمجة </span></a></li>
                                                    <li><a target="_blank" href="/courses"><span> كورسات مجانية في البرمجة </span></a></li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- End Dashboard Sidebar  -->
                        </div>

                        <div dir="rtl" class="col-lg-9">
                            <!-- Start Enrole Course  -->
                            <div class="rbt-dashboard-content pt-4">
                                <div class="content">
                                    <div class="breadcrumb-image-container breadcrumb-style-max-width">
            <div class="breadcrumb-content-top text-center">
                <ul class="meta-list justify-content-center mb-4">
                    <li class="list-item">
                        <i class="feather-clock"></i>
                        <span>{{ formatDate(blog.createdAt) }}</span>
                    </li>
                </ul>
                <h1 class="title">  {{ blog.title }} </h1>
            </div>
        </div>
		<div class="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
            <div class="blog-content-wrapper rbt-article-content-wrapper">
                <div class="content">
					<div class="post-thumbnail mb-4 position-relative wp-block-image alignwide">
                        <figure>
                            <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								:src="blog.subImage"
								:alt="blog.title" 
							/>
                        </figure>
                    </div>
					<article
				class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
			>
					<ClientOnly>
					<ContentRenderer
						class="prose lg:prose-base prose-sm prose-slate blog-link pr-7 max-w-none"
						:value="blog"
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
                            <!-- End Enrole Course  -->
                        </div>
                    </div>

                </div>
            </div>
        </div>
		</main>
	</div>
</template>

<script setup>
	const slug = useRoute().params.slug;
	const { data: blog } = await useAsyncData(slug, () => {
		return queryContent(`blog/${slug}`).findOne();
	});
	
if(blog.value === null){
		useRouter().push({ path: "/blog" });
	}

	const toc = computed(() => {
		if (!blog.value) return [];
		const items = blog.value.excerpt?.children;
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

	const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }

    useHead({
        titleTemplate: `${blog.value.title} · مقالات احمد لتعلم البرمجة بسهولة`,
        meta: [
            { name: 'description', content: `${blog.value.description}` },
            { name: 'keywords', content: 'اراء الاشخاص في مدرب برمجة, طلاب احمد وليد مبرمج مواقع, برمجة الويب, فرونت اند, باك اند, جافاسكريبت, رياكت, فيو, نيكست, تايبسكريبت, معلم برمجة مواقع, افضل مبرمج مواقع في مصر' },
            { name: 'apple-mobile-web-app-title', content:`احمد وليد مدرب برمجة المواقع | ${blog.value.title}`},
            { name: 'application-name', content:`احمد وليد مدرب برمجة المواقع | ${blog.value.title}` },
            { name: 'og:url', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'og:site_name', content:`احمد وليد مدرب برمجة المواقع | ${blog.value.title}` },
            { name: 'og:title', content:`احمد وليد مدرب برمجة المواقع | ${blog.value.title}` },
            { name: 'og:description', content:`احمد وليد مدرب برمجة المواقع | ${blog.value.title}` },
            { name: 'twitter:description', content: 'احمد وليد افضل مبرمج مواقع في مصر' },
            { name: 'identifier-URL', content: 'https://ahmed.lineitsolutions.com' },
            { name: 'linkage', content: `https://ahmed.lineitsolutions.com${blog.value._path}` },
            { name: 'subject', content: ` ${blog.value.title} - أحمد وليد مدرب برمجة مواقع في مصر`},
            { name: 'note', content: ` ${blog.value.title} - أحمد وليد مدرب برمجة مواقع في مصر` },
            { name: 'msapplication-tooltip', content: ` ${blog.value.title} - أحمد وليد مدرب برمجة مواقع في مصر` },
        ],
        htmlAttrs: { lang: 'ar-EG' },
})


    useSchemaOrg([
    defineWebSite({
    name: 'احمد وليد مبرمج مواقع يساعد الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  definePerson({
    name: 'احمد وليد مدرب برمجة مواقع',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
  defineArticle({
    image: `https://res.cloudinary.com/drcfigqqr/image/upload/v1687822265/${blog.value.image}`,
    datePublished: `${formatDate(blog.value.createdAt)}`,
  }),
])
</script>

<style scoped>
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
	@media only screen and (min-width: 768px) and (max-width: 991px){
		.blog-content-wrapper p{
		font-size:15px
	}
	}
	
</style>
