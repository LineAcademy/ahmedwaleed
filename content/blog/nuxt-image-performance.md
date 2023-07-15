---
createdAt: 2023-07-04
slug: nuxt-image-performance
title: تحسين الأداء باستخدام Nuxt-Image
image: improve-performance-with-nuxt-Image_rwj5er
subImage: sub-nuxt-image-performance_kn7dso
id: 4
category: performance
description: تحسين الأداء باستخدام Nuxt-Image - تعلم البرمجة مع احمد وليد
---
>  ***🚀 تحميل Nuxt-Image***

```javascript
// with Yarn
yarn add --dev @nuxt/image

// with NPM
npm install --save-dev @nuxt/image
```

> ا﻿لخطوة دي مهمة عشان تشغل ال nuxt-image في nuxt 13 في فايل `nuxt.config.ts`

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/image']
})
```

##### Nuxt Image الخصائص الي تقدر تحطها في

1- src: The source of the image

2﻿- alt: The alt attribute of the image

3﻿- width: The width of the image

4﻿- height: The height of the image

5﻿- loading: The loading state of the image

6﻿- provider: The provider of the image if using Cloudinary/Unsplash etc

7﻿- sizes: The sizes of the image for different screen sizes

8﻿- presets: The presets you want to add to the image

9﻿- class: The styles for the image

### ا﻿ستخدام nuxt-img

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

### ا﻿ستخدم Cloudinary

م﻿ن اكتر الحاجات الي هتخليك تحسن أداء الويب سايت هو كلاودنيري بيديك اريحية تحمل الصور وترفعها او تعدل فيها لأي صيغة ومنها صيغة webp عشان دي من اهم الصيغ الي بنرفع بيها كل الصور عشان نحفظ مساحة

```javascript
// nuxt.config.ts
image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/drcfigqqr/image/upload/<your-id>/',
    },
 }
```

**و﻿بكدا اكون عرفتك ازاي تستخدم nuxt-img بأفضل طريقة وتحط cloudinary وهوريك نتايج حل المشكلة**

![مشكلة حجم الصور في nuxt js](https://res.cloudinary.com/drcfigqqr/image/upload/v1688500786/Screenshot_49_t8lync.webp "مشكلة حجم الصور في nuxt js")

**ب﻿عد ما نزلنا nuxt-img و حطينا cloudinary** 

لا يقتصر الأمر على تحسين عرض الشلال فحسب ، بل لا تشكّل صورنا الآن سوى 30٪ من الصفحة ، بانخفاض عن 90٪. هذا هو تحسنا كبيرا. كما تم تقليل وقت التحميل إلى إجمالي 1167 مللي ثانية مما يعني أننا باللون الأخضر كثيرًا. تكلف صفحتنا الآن أقل بكثير للتشغيل وتظهر اختبارات Lighthouse الخاصة بنا بنسبة 100٪. كل هذا بفضل استخدام nuxt-img

![حل مشكلة حجم الصور في nuxt js](https://res.cloudinary.com/drcfigqqr/image/upload/v1688501041/Screenshot_50_hn9wjq.webp "حل مشكلة حجم الصور في nuxt js")

***لقد حان الوقت حقًا لبدء نقل صورك لاستخدام Nuxt Image. سيؤدي ذلك إلى تحسين أدائك بشكل كبير وسيجعل موقعك في متناول الجميع. لا تنسَ إجراء اختبارات على صفحات موقعك الأكثر ثقلًا بالصور وإجراء الاختبارات بانتظام حيث يمكن أن تتغير الأشياء بمرور الوقت.***

### 📝 لينكات مفيدة

<cite><a target="_blank" style="color: #0d6efd;" href="https://image.nuxtjs.org/"> Optimized images for Nuxt · Nuxt Image</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://image.nuxtjs.org/providers/cloudinary">C﻿loudinary Nuxt Image</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=X6CoUHlnuoY">Cypress Unit Testing For React Developers (Crash course)</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://cloudinary.com/guides/front-end-development/integrating-cloudinary-with-nuxt">Integrating Cloudinary with Nuxt</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/results?search_query=add+cloudinary+with+nuxt+3">C﻿loudinary-Nuxt Youtube Search</a></cite><br>