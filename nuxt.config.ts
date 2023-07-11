// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          link: [
            { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/images/favicon.png' },
            { rel: 'stylesheet', href: '/assets/css/vendor/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/feather.css' },
            { rel: 'stylesheet', href: '/assets/css/plugins/swiper.min.css' },
            { rel: 'stylesheet', href: '/assets/css/style.css' },
        ],
        meta: [
          { name: 'theme-color', content: '#0963de' },
          { name: 'HandheldFriendly', content: 'True' },
          { name: 'MobileOptimized', content: '320' },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
          { name: 'robots', content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
          { name: 'robots', content: 'index, follow' },
          { name: 'og:type', content: 'website' },
          { name: 'og:image', content: '/assets/images/logoo.png' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image:src', content: '/assets/images/logoo.png' },
          { name: 'distribution', content: 'global' },
          { name: 'classification', content: 'index, follow' },
          { name: 'owner', content: 'https://ahmed.lineitsolutions.com' },
          { name: 'copyright', content: 'https://lineitsolutions.com' },
          { name: 'web_author', content: 'Ahmed Waled' },
          { name: 'MSSmartTagsPreventParsing', content: 'true' },
          { name: 'contactStreetAddress1', content: 'haram' },
          { name: 'contactStreetAddress2', content: 'giza' },
          { name: 'contactOrganization', content: 'https://ahmed.lineitsolutions.com' },
          { name: 'contactCity', content: 'cairo' },
          { name: 'contactCountry', content: 'Egypt' },
          { name: 'contactPhoneNumber', content: '+201025338973' },
          { name: 'contactNetworkAddress', content: 'https://ahmed.lineitsolutions.com' },
          { name: 'msapplication-starturl', content: 'https://ahmed.lineitsolutions.com' },
          { name: 'DC.Creator', content: 'Developed By Ahmed Waled' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        script: [
          { src: '/assets/js/yt.js', body: true },
        ],
        },
      },
       image: {
        provider: 'cloudinary',
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/drcfigqqr/image/upload/v1687758537/',
        },
      },
       modules: ['@nuxt/image', '@nuxt/content', 'nuxt-schema-org'],
       schemaOrg: {
        meta: {
          host: 'https://ahmed.lineitsolutions.com'
        }
       },
       content: {
        markdown: {
          toc: {
            depth: 3,
            searchDepth: 3,
          },
        },
        highlight: {
          theme: "dracula-soft",
        },
      },
       extends: [
        'nuxt-seo-kit'
      ],
      runtimeConfig: {
        public: {
          siteName: ' احمد والبرمجة ',
           siteUrl: 'https://ahmed.lineitsolutions.com',
           titleSeparator: '·',
        }
      }
})
