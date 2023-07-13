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

```
// with Yarn
yarn add --dev @nuxt/image

// with NPM
npm install --save-dev @nuxt/image
```

> This step is important to enable nuxt-image in nuxt 13 in a file`nuxt.config.ts`

```
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/image']
})
```

> ### [Nuxt Image properties you can put in](https://ahmed.lineitsolutions.com/blog/nuxt-image-performance#nuxt-image-%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5-%D8%A7%D9%84%D9%8A-%D8%AA%D9%82%D8%AF%D8%B1-%D8%AA%D8%AD%D8%B7%D9%87%D8%A7-%D9%81%D9%8A)
>
> * src: The source of the image.
> * alt: The alt attribute of the image.
> * width: The width of the image.
> * height: The height of the image.
> * loading: The loading state of the image.
> * provider: The provider of the image if using Cloudinary/Unsplash etc.
> * Sizes: The sizes of the image for different screen sizes
> * presets: The presets you want to add to the image
> * class: The styles for the image.

### [use nuxt-img](https://ahmed.lineitsolutions.com/blog/nuxt-image-performance#%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-nuxt-img)

```
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

> ### [Use Cloudinary](https://ahmed.lineitsolutions.com/blog/nuxt-image-performance#%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D9%85-cloudinary)
>
> One of the most important things that will make you improve the performance of the web site is CloudNery, with your hands the comfort of downloading images, uploading them, or modifying them in any format, including the webp format, because this is one of the most important formats in which we upload all images in order to save space

```
// nuxt.config.ts
image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/drcfigqqr/image/upload/<your-id>/',
    },
 }
```

> **And ﻿I almost knew you how to use nuxt-img in the best way and put cloudinary and show you the results of solving the problem**

![nuxt js image size problem](https://res.cloudinary.com/drcfigqqr/image/upload/v1688500786/Screenshot_49_t8lync.webp "nuxt js image size problem")

> **After we downloaded nuxt-img and put cloudinary**
>
> Not only has the waterfall rendering improved, our images now only make up 30% of the page, down from 90%. This is a huge improvement. Load time has also been reduced to a total of 1167ms which means we're in the green a lot. Our page now costs a lot less to run and our Lighthouse tests show 100%. All this thanks to the use of nuxt-img

![Nuxt js image size problem](https://res.cloudinary.com/drcfigqqr/image/upload/v1688501041/Screenshot_50_hn9wjq.webp "Nuxt js image size problem")

> ***It's really time to start transferring your images to use Nuxt Image. This will greatly improve your performance and make your site more accessible to everyone. Don't forget to run tests on your more image-heavy pages and run tests regularly as things can change over time.***
>
> ### [📝 Browse nuxt-image homepage](https://ahmed.lineitsolutions.com/blog/nuxt-image-performance#%D8%AA%D8%B5%D9%81%D8%AD-%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-%D9%84-nuxt-image)
>
> ***[Optimized images for Nuxt · Nuxt Image](https://image.nuxtjs.org/)***