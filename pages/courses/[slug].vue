<template>
	<div>
        <main style="background-color: #F3F5F4;">
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
								:src="blog.subImage"
								:alt="blog.description" 
							/>
                      </div>
                  </div>
                  <!-- End Dashboard Top  -->

                  <div class="rbt-categories-area">
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div dir="rtl" class="section-title text-center">
                                      <h2 class="title">{{ blog.title }}</h2>
                                  </div>
                              </div>
                          </div>
                          <div dir="rtl" class="row g-5 mt-2">
                            <template
							v-for="(p, i) in blog.videos"
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

                  <div class="row g-5 mt-2">
                      <div class="col-lg-12">
                          <!-- Start Dashboard Sidebar  -->
                          <div class="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                              <div class="inner">
                                  <div class="content-item-content text-center">

                                    <article>
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
                          <!-- End Dashboard Sidebar  -->
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </div>
  <!-- End Card Style -->
        </main>
	</div>
</template>

<script setup>
	const slug = useRoute().params.slug;
	const { data: blog } = await useAsyncData(slug, () => {
		return queryContent(`courses/${slug}`).findOne();
	});

	console.log(blog.value)

	if (!blog.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
		console.log(errjj)
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

    useSchemaOrg([
  defineWebSite({
    name: 'موقع احمد وليد لمساعدة الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد',
  }),
  defineWebPage({
    name: `${blog.value.title} - موقع احمد وليد مبرمج يساعد الأخرين في تعلم جافاسكريبت , رياكت , فيو والمزيد`,
  }),
  definePerson({
    name: 'احمد وليد مدرب برمجة مواقع',
    image: '/profile-image.png',
    sameAs: ['https://ahmed.lineitsolutions.com'],
  }),
])

    useHead({
        titleTemplate: `${blog.value.title} · كورسات احمد لتعلم البرمجة`,
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
</script>

<style scoped>
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
