---
createdAt: 2023-07-05
slug: static-sites-are-back-in-2023
title: المواقع الثابتة تعود في 2023
image: ar-static-sites-back-2023_gyizd2
subImage: sub-static-sites-back_wd5gch
id: 6
category: Jamstack
description: المواقع الثابتة تعود في 2023 - جامستاك - تعلم جافاسكريبت مع احمد
  وليد وبرمجة المواقع
---
### المواقع الثابتة في التسعينيات

> عندما أنشأنا مواقع الويب لأول مرة منذ سنوات عديدة ، كانت ثابتة للغاية. كان كل ما نعرفه. Html مع بعض CSS وجزء صغير من JavaScript.

![المواقع الثابتة في التسعينات جامستاك - تعلم برمجة المواقع مع احمد وليد](https://res.cloudinary.com/drcfigqqr/image/upload/v1688518528/Screenshot_51_vcjvrj.webp "المواقع الثابتة في التسعينات جامستاك - تعلم برمجة المواقع مع احمد وليد")

طبعا ده كان جامد جدا وحلو يومها , بس بقي سئ مع مرور الوقت لأن ببساطة مفيش محتوي ديناميكي هيتحط وكل حاجة هتبقي ثابتة ودي حاجة هتتعب المبرمج جداا , مع ذلك طبعا الموقع كان بيسجل 100% ك أداء عشان يعتبر مفهوش غير شوية جافاسكريبت واتش تي ام ال.

### ظهور لغات جانب الخادم  - (Server-Side)

مع مرور الوقت ابتعدت كل الشركات عن الطريقة الثابتة وانتقلت لأستخدام بعض اللغات من جانب الخادم وطبعا دي طريقة حلوة جدا لمشاركة التعليمات والبينات بين الصفحات ووجود قاعدة بينات ولوحة تحكم كاملة للموقع يمكن تعديل المحتوي بشكل ديناميكي ,ولكن هذا يعني أيضًا أن الشفرة الأمامية والخلفية كانت مختلطة معًا. يعني تغيير الصفحة إجراء مكالمة أخرى إلى الخادم ويمكن رؤية الوميض الطفيف للصفحة حيث يتعين إعادة تحميل الصفحة بالكامل في كل مرة.

### تطبيقات الصفحة الواحدة - (Single-Page)

ب﻿عد كدا طهرت تطبيقات الصفحة الواحدة وبقينا نقدر نشارك المكونات عبر الصفحات وظهر مكاتب واطارات عمل كثيرة مثل `React , Vue` بس هنا فيه مشكلة لو حاولت مثلا تبيع مواقع الصفحة الواحدة لأي شركة كبيرة هيقولولك بس كدا محركات البحث مش هتقدر توصلها 

### المواقع الثابتة عادت

لذلك نحتاج حقًا إلى شيء يتميز بأداء وظيفته مثل مواقعنا الثابتة من التسعينيات ولكن ديناميكيًا وقويًا مثل تطبيق الصفحة الواحدة مع رمز قابل للفهرسة لتحسين محرك البحث بشكل أفضل. وهذا هو سبب عودة المواقع الثابتة. لكننا لن نعود إلى التسعينيات. أعني أننا نستطيع إذا أردنا ذلك. يمكننا فقط إنشاء HTML عادي وإضافة المزيد من CSS وجافا سكريبت ولدينا موقع ديناميكي ثابت للغاية. ولكن ما نريد فعله حقًا هو أن يكون لدينا موقع ثابت عالي الأداء بمظهر ومضمون تطبيق ديناميكي من صفحة واحدة. وهذا ما نعنيه عندما نتحدث عن المواقع الثابتة اليوم.

### ثابت لا يعني ثابت

ترى المشكلة التي نواجهها هي أن كلمة ثابت هي مجرد كلمة فظيعة لأنها تعني قلة الحركة والمواقع الثابتة حقًا لا تنقص الحركة على الإطلاق. لكن هذا ليس هو الحال على الإطلاق. يمكن أن تكون المواقع الثابتة ديناميكية كما تريد. لإعطائك مثالاً باستخدام مواقع Nuxt.js الثابتة بشكل أساسي ، بمجرد أن يطلب المستخدم الصفحة يتم إرسالها إليهم من مزود استضافة ثابت ، استضافة بدون خادم كما نسميها. تم تقديم هذه الصفحة بالفعل ويشاهد العميل الصفحة على الفور تقريبًا. ثم يتولى Vue hydration وتبدأ تطبيقاتك في التصرف كما لو كانت تطبيقًا من صفحة واحدة ، ويتم التوجيه من جانب العميل على سبيل المثال وهذا هو السبب في أننا لا نرى وميض الصفحة عند تغيير الصفحات. يتم تخزين جميع المكالمات إلى واجهات برمجة التطبيقات الخاصة بك مؤقتًا بحيث لا تكون هناك حاجة للاتصال بواجهة برمجة التطبيقات للحصول على تلك البيانات كما هي موجودة بالفعل عند حدوث التوجيه من جانب العميل. هذا حقا يحسن الأداء. ولكن بالطبع ، لا يتم تخزين كل شيء مؤقتًا ولا يزال بإمكاننا استدعاء واجهات برمجة التطبيقات في أحداث المستخدم لإرسال النماذج على سبيل المثال ، أو حتى إجراء مدفوعات. تمنح واجهات برمجة التطبيقات (API) للمواقع الثابتة قوة هائلة وهي التي تلعب دورًا كبيرًا في جعل المواقع الثابتة اليوم قوية للغاية.

> ***ل﻿ذلك انا اقول لك عيد بناء موقعك الثابت وخليه بتقنية ال JamStack وهي احدي المفاهيم الي بتطبق الموقع ثابت ولكن يمكننا التحكم به بشكل ديناميكي وبكدا نكون كسبنا نقط كتير ف إذا موقعك مش كبير اوي استخدم هذه التقنية الرائعة وهديك ليها مصادر!***

<div style="width:100%;max-width:800px;box-shadow:6px 6px 10px hsl(206.5,0%,75%)"><div style="position:relative;padding-bottom:56.15%;height:0;overflow:hidden"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" loading="lazy" srcdoc="<style>* {padding: 0;margin: 0;overflow: hidden;}body, html {height: 100%;}img, svg {position: absolute;width:100%;top: 0;bottom: 0;margin: auto;}svg {filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));transition: all 250ms ease-in-out;}body:hover svg {filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));transform: scale(1.2);}</style><a href='https://www.youtube.com/embed/4wD00RT6d-g?autoplay=1'><img src='https://img.youtube.com/vi/4wD00RT6d-g/hqdefault.jpg' alt='جامستاك في موقع احمد وليد وبرمجة المواقع'>
<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg></a>" src="https://www.youtube.com/embed/4wD00RT6d-g" title="جامستاك في موقع احمد وليد وبرمجة المواقع" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>

<div style="width:100%;max-width:800px;box-shadow:6px 6px 10px hsl(206.5,0%,75%)"><div style="position:relative;padding-bottom:56.15%;height:0;overflow:hidden"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" loading="lazy" srcdoc="<style>* {padding: 0;margin: 0;overflow: hidden;}body, html {height: 100%;}img, svg {position: absolute;width:100%;top: 0;bottom: 0;margin: auto;}svg {filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));transition: all 250ms ease-in-out;}body:hover svg {filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));transform: scale(1.2);}</style><a href='https://www.youtube.com/embed/LDkoWDYm3PI?autoplay=1'><img src='https://img.youtube.com/vi/LDkoWDYm3PI/hqdefault.jpg' alt='جامستاك في موقع احمد وليد وبرمجة المواقع'>
<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg></a>" src="https://www.youtube.com/embed/LDkoWDYm3PI" title="جامستاك في موقع احمد وليد وبرمجة المواقع" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>

> ***لينكات مفيدة***
>
> * [generators-next-jamstack](https://jamstack.org/generators/next/)﻿
> * [Nuxt static improvements](https://nuxtjs.org/blog/nuxt-static-improvements)
> * [Getting started with Nuxt](https://nuxtjs.org/guides/get-started/installation)
> * [Going full-stack with Nuxt](https://nuxtjs.org/blog/going-full-static)