---
createdAt: 2023-07-06
slug: why-i-love-nuxtjs
title: ليه انا بحب اطار عمل NuxtJS
image: love-tech-stack_nuxt
subImage: sub-love-tech-stack_nuxtjs
id: 11
category: nuxt
description: انا عملت علي عدة مشاريع كبيرة ومتوسطة باستخدام nuxtjs وكان اختيار
  رائع , لماذا يجب عليك تعلم nuxtjs في وقتنا الحالي
---
> ***ملحوظة الموقع ده معمول ب Nuxt :)***

كنت أبحث عن أطار عمل في وظيفة سابقة وكنت أواجه مشكلات في العرض من جانب الخادم لأن SPA كانت شيئًا لا تريده أي شركة أو عميل. كان Vue رائعًا ولكنه لم يكن مناسبًا لنا و﻿من هنا اقترحت علي مديري تحويل المشروع ل Nuxt وحضرت محاضرة عشان اقول فيها ايه الي هنستفاد بيه لما نحول المشروع كلو ل Nuxt وكمان عشان الفريق كله عارف Vue ولم يكن علي دراية ب أطار عمل Nuxt , الحمدلله لقد وافق المدير وقال لي اني المسؤول عن تحويل المشروع وكمان مسؤول عن شخصين معايا في الفريق اني اخليهم يتعلمو Nuxt , واديهم تاسكات محددة عشان نعمل المشروع مع بعض .

> **الفرق بين Vue و Nuxt في عرض محتوي الويب سايت**

م﻿ثال : هنا Vueابليكيشن كلو بيتعرض في div واحد اسمو app والمحتوي مش بيتحط لأنه Virtual Dom ودا وحش بالنسبة لوسائل البحث ومثلا google bot مش هيشوف محتوي ف هيفتكر ان الويب سايت فاضية ودا سئ...

![all Vue app in div app](https://res.cloudinary.com/drcfigqqr/image/upload/v1688710761/app_sgr362.webp "all Vue app in div app")

و﻿هنا دا Nuxt بيعرض كل المحتوي في ال Dom وبكدا نكون حلينا مشكلة تصدر وسائل البحث ودا اسمو SSR

![nuxt app ssr](https://res.cloudinary.com/drcfigqqr/image/upload/v1688710738/Screenshot_56_ykpp9y.webp "nuxt app ssr")

###### ت﻿عليم Nuxt

من السهل تعلم Nuxt حقًا ، لذا فقد استغرق الأمر وقتًا قصيرًا جدًا لتعليمهم وتوزيع التاسكات عشان هما كانو عارفين Vue واصلا الموضوع سهل علي اي مبرمج كأني بكتب Html,Css. الشيء الوحيد هو أنني لم أكن خبيرًا في Nuxt وفجأة كنت أقود فريقًا ومشاريع. واجهت الكثير من التحديات ولكن مع وجود الديكومنتيشن , الموارد , مجتمع Nuxt كان الأمر سهل شوية.

###### ج﻿امستاك مع Nuxt

ا﻿لمشروع كان كبير وكان فيه Ordering , Searching , SEO , BLOG and Hotel System

و﻿كان حاجة من الحاجات الي لازم تتعمل ان الموقع يكون سريع في تحميل الصفحات وكمان مناسب لمحركات البحث لان جزء كبير من المشروع بيشتغل بس علي البحث وان الناس تبحث عن اماكن معينة ولازم نتفوق علي منافسينا في البحث.

ق﻿ررت ان استخدم Nuxt نظام المحتوي بها مع Markdown Files وخليت كل الداتا ك MarkDown منها الفنادق والمقالات وحتي البحث كان يبحث في المحتوي المكتوب ب markdown وكان هذا جديد كليا علي فريقي لأنه اعتاد استخدام Full-Stack و Real Time Load لكن JamStack نكتب المحتوي في الداشبورد ويأخذ دقيقتين ويعيد بناء الموقع ثم يرفعه علي السيرفر ك موقع ثابت.

###### ا﻿لشكوك مع JamStack

ب﻿س جالي سؤال كده " هل تحاول إخباري أنه إذا قمت بتغيير بعض المحتوى ، يجب إعادة إنشاء الموقع ونشره؟ " وجوابي كان اه عادي كل الموضوع ان احنا هنستخدم CMS مع Git وكل ما نغير حاجة في ال CMS هيروح باني الموقع من اول وجديد وهنستني دقيقتين . ده طبعا هيكون ليه أستفادة ان الموقع سريع الأداء لأن بالفعل كل الصفحات ستكون موجودة وأكثر امانا لان مفيش تعامل مع باك اند خلال التصفح وهذا كان مفيد في المشروع الي كنت شغال عليه بالذات ودا الي خلاني ارشح Nuxt.

أنا لست جيدًا في الاستسلام ولم أكن أنوي خسارة هذه المعركة. كنت مقتنعًا بأن موقع Nuxt الثابت هو الحالة المثالية لموقع وكالة ، وموقع وكيل سفر ، ومواقع ترويج الفنادق. الشيء المضحك هو أن الفريق حارب الثابت لأنه كان عليك إعادة بناء الموقع ولم يكن له أي معنى في الواقع حيث يتم تحديث المحتوى مرة واحدة فقط كل بضعة أسابيع ، حتى لو كان ذلك.

###### N﻿uxt رائع

ل﻿و كنت عاوز تبني JamStack أو FullStack او ايا يكن بالتقنيات ف Nuxt رائع من السهل التعلم ومن السهل تعليم الناس. أعتقد أن أي شخص يمكنه  تعلمه بسهولة وإنشاء موقع وتشغيله بدون خبرة مطورة كبيرة  كأنك بتكتب Html, Css , JS Pure وهذا أمر رائع للغاية. باستخدام Nuxt ، يمكن أن يكون لديك أشخاص غير تقنيين مثل المصممين يساعدون في مشروع لأن قاعدة  الكود سهلة الفهم.

###### م﻿ميزات Nuxt

* تحسين SEO لـ SPA
* يأتي مع القدرة على إنشاء مواقع ويب ثابتة خارج الصندوق
* المواقع الثابتة ، مرة أخرى ، لديها أمان كبير
* جاهز للمؤسسات مقارنة بـ Vue.js
* تقسيم الكود التلقائي

###### شعبية Nuxt

\
أحد الأسباب التي دفعتنا إلى التعمق في Nuxt هو كيف قفزت من حيث الشعبية خلال العام الماضي.

 لو بصينا ورا شوية من عام 2021 إلى استطلاع JamStack.org ، لم يكن Nuxt.js مدرجًا حتى في قائمة  الأطارات الأكثر رواجًا. ولكن بالتقدم سريعًا لهذا العام ، فإن Nuxt "محبوب" بقوة في المرتبة التاسعة على القائمة مع 64.15٪ "محبوب" مقابل رقم مخيف.

![استطلاع في الويب وفيه مرتبة Nuxt ](https://res.cloudinary.com/drcfigqqr/image/upload/v1688671465/toz2ljccr6pvldvi19hb_vvltwp.webp "استطلاع في الويب وفيه مرتبة Nuxt ")

> **\- ر﻿وابط مفيدة -**

* [ ب﻿ناء مواقع جامستاك مع Nuxt - يوتيوب](https://www.youtube.com/results?search_query=Build+Jamstack+site+with+nuxt+js)
* [ ب﻿ناء مواقع فول ستاك مع Nuxt - يوتيوب](https://www.youtube.com/results?search_query=build+FullStack+site+with+nuxt+js)
* [تحسينات Nuxt Static](https://nuxtjs.org/blog/nuxt-static-improvements)
* [قناتي على يوتيوب](https://www.youtube.com/@ahmeedwaleed/videos)