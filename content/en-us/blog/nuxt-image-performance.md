---
createdAt: 2023-07-13
slug: nuxt-image-performance
title: Performance improvement with Nuxt-Image
image: improve-performance-with-nuxt-Image_rwj5er
subImage: sub-nuxt-image-performance_kn7dso
id: 4
category: performance
description: Improving Performance Using Nuxt-Image - Learn Programming with Ahmed Waleed
---
> ***🚀 Add Nuxt-Image***

```javascript
// with Yarn
yarn add --dev @nuxt/image

// with NPM
npm install --save-dev @nuxt/image
```

> This step is important to enable nuxt-image in nuxt 13 in a file`nuxt.config.ts`

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/image']
})
```

##### Nuxt Image properties you can put in

* src: The source of the image.
* alt: The alt attribute of the image.
* width: The width of the image.
* height: The height of the image.
* loading: The loading state of the image.
* provider: The provider of the image if using Cloudinary/Unsplash etc.
* Sizes: The sizes of the image for different screen sizes
* presets: The presets you want to add to the image
* class: The styles for the image.

##### use nuxt-img

```javascript
<nuxt-img
  provider="cloudinary"
  src="image-of-my-site"
  alt="image of my site"
  loading="lazy"
  preset="blog"
  width="640"
  height="480"
  sizes="sm:355px md:320px lg:480px"
  class="images"
/>
```

### Use Cloudinary

One of the most important things that will make you improve the performance of the web site is CloudNery, with your hands the comfort of downloading images, uploading them, or modifying them in any format, including the webp format, because this is one of the most important formats in which we upload all images in order to save space

```javascript
// nuxt.config.ts
image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/drcfigqqr/image/upload/<your-id>/',
    },
 }
```

**And ﻿I almost knew you how to use nuxt-img in the best way and put cloudinary and show you the results of solving the problem**

![nuxt js image size problem](https://res.cloudinary.com/drcfigqqr/image/upload/v1688500786/Screenshot_49_t8lync.webp "nuxt js image size problem")

**After we downloaded nuxt-img and put cloudinary**

Not only has the waterfall rendering improved, our images now only make up 30% of the page, down from 90%. This is a huge improvement. Load time has also been reduced to a total of 1167ms which means we're in the green a lot. Our page now costs a lot less to run and our Lighthouse tests show 100%. All this thanks to the use of nuxt-img

![Nuxt js image size problem](https://res.cloudinary.com/drcfigqqr/image/upload/v1688501041/Screenshot_50_hn9wjq.webp "Nuxt js image size problem")

***It's really time to start transferring your images to use Nuxt Image. This will greatly improve your performance and make your site more accessible to everyone. Don't forget to run tests on your more image-heavy pages and run tests regularly as things can change over time.***

##### 📝 UseFul Links

<cite><a target="_blank" style="color: #0d6efd;" href="https://image.nuxtjs.org/"> Optimized images for Nuxt · Nuxt Image</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://image.nuxtjs.org/providers/cloudinary">C﻿loudinary Nuxt Image</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=X6CoUHlnuoY">Cypress Unit Testing For React Developers (Crash course)</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://cloudinary.com/guides/front-end-development/integrating-cloudinary-with-nuxt">Integrating Cloudinary with Nuxt</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/results?search_query=add+cloudinary+with+nuxt+3">C﻿loudinary-Nuxt Youtube Search</a></cite><br>