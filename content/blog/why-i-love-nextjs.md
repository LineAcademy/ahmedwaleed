---
createdAt: 2023-07-07
slug: why-i-love-nextjs
title: ليه انا بحب اطار عمل NextJs
image: love-tech-stack_next
subImage: love-tech-stack_next
id: 12
category: next
description: انا عملت علي عدة مشاريع كبيرة ومتوسطة باستخدام nextjs وكان اختيار
  رائع , لماذا يجب عليك تعلم NextJs في وقتنا الحالي
---
> ***ايه هي Next.Js , وليه انا واقع في حبها ؟***

نيكست هو إطار عمل React لبناء المواقع باستخدام بنية JAM. و اختصار JAM إلى Javascript و APIs و Markup. بشكل فعال ، تقوم ببناء مواقع باستخدام Javascript ، وأيضا يمكن ان نبني بها موبايل ابليكيشن بأستخدام React Native.

> **الفرق بين React و Nuxt في عرض محتوي الويب سايت**

م﻿ثال : هنا React ابليكيشن كلو بيتعرض في div واحد اسمو app والمحتوي مش بيتحط لأنه Virtual Dom ودا وحش بالنسبة لوسائل البحث ومثلا google bot مش هيشوف محتوي ف هيفتكر ان الويب سايت فاضية ودا سئ...

![all react app in div app](https://res.cloudinary.com/drcfigqqr/image/upload/v1688710761/app_sgr362.webp "all react app in div app")

و﻿هنا دا Next بيعرض كل المحتوي في ال Dom وبكدا نكون حلينا مشكلة تصدر وسائل البحث ودا اسمو SSR

![all react app in div app](https://res.cloudinary.com/drcfigqqr/image/upload/v1688710761/app_sgr362.webp "all react app in div app")

##### 1. Seamless Server-Side Rendering (SSR) - Next.js![all react app in div app](https://res.cloudinary.com/drcfigqqr/image/upload/v1688710761/app_sgr362.webp "all react app in div app")

تتمثل إحدى أهم مزايا Next.js في دعمه (SSR) وهذا عكس React عشان كدا لما بنسئل حد هنبني موقع وعاوزينو يتصدر وسائل البحث بيقولنا نستخدمو. يسمح SSR بعرض صفحات الويب على الخادم قبل إرسالها إلى العميل ، مما يؤدي إلى تحميل أسرع للصفحات الأولية وتحسين محركات البحث. يبسط Next.js SSR من خلال التخلص من التعقيدات ، مما يسمح للمطورين بالتركيز على بناء واجهات مستخدم ثرية دون المساومة على الأداء.

##### 2. وبما إني ذكرت JAM ف Next بها تقنية (SSG)

نيكست طورت معني كلمة أنشاء موقع ثابت حرفيا بجدارة. من خلال إنشاء HTML في وقت الإنشاء ، يتيح Next.js تحميل الصفحات بسرعة فائقة ويقلل من تحميل الخادم ويوفر تجربة مستخدم استثنائية. يعمل إطار العمل على عرض الصفحات مسبقًا بذكاء ، مما يجعلها جاهزة للعرض بشكل ثابت ، مع السماح بالوظائف الديناميكية عند الحاجة. يُعد هذا المزيج من الإمكانات الثابتة والديناميكية عامل تغيير كبير في مواقع الويب والمدونات ذات المحتوى الثقيل.

##### 3. ال Routing في Next

ط﻿بيعة الصفحات وترتيبها في Next بتكون جاهزة ليك يا صديقي, يعني مش زي React هتحمل حاجة عشان تعمل Routing ودي صورة بتوضح كدا ...

![صورة توضح طبيعة ال Routing في Next.js](https://res.cloudinary.com/drcfigqqr/image/upload/v1688705652/image-1024x534_uziqwi.webp "صورة توضح طبيعة ال Routing في Next.js")

##### 4. جلب وعرض البيانات

يحتوي Next.js على نوعين من طرق عرض البيانات Static generation and Server-side rendering. العرض الثابت دا الي بيخليك تعرض صفحاتك في وقت انشاء الويب سايت. باستخدام هذا ، يمكنك إنشاء مجموعة من ملفات HTML وتحميلها على مضيف ثابت ويمكن فتحها عبر CDN مما يجعلها سريعة للغاية لعرض البيانات بشكل مرئي. باستخدام هذه التقنية ، يمكنك إنشاء كل ملفات HTML الخاصة بك محليًا وحتى التقاط بياناتك. يمكن أن يكون هذا مفيدًا عندما لا تتغير البيانات كثيرًا. 

في كل مكون من مكونات الصفحة ، يمكنك تنفيذ وظيفة getStaticProps. ضمن هذه الوظيفة ، يمكنك جلب البيانات من API. ثم يمكن تمرير النتيجة ك Props في اي Component.

```javascript
// دي فانكشن بتعرض مثلا اسماء فريق احمد وليد ب getStaticProps
function Ahmed({ teamAhmed }) {
  return (
    <ul>
      {teamAhmed.map((person) => (
        <li>{person.title}</li>
      ))}
    </ul>
  )
}

// هنا مرحلة جلب البيانات لفريق احمد لعرضها في الويب سايت
export async function getStaticProps() {
  const res = await fetch('https://.../teamahmed')
  const teamAhmed = await res.json()

  return {
    props: {
      teamAhmed,
    },
  }
}

export default Ahmed
```

في حالة تغير بياناتك في كثير من الأحيان ، يمكنك تنفيذ العرض من جانب الخادم باستخدام getServerSideProps حيث يتم إعادة بناء الصفحة في كل مرة يفتحها المستخدم. أثناء تشغيل getStaticProps وبناء الوقت ، يتم تشغيل getServerSideProps في وقت الطلب. هذا يعني أن الصفحة ستجلب أحدث البيانات من الخادم في كل مرة يتم فيها تقديم طلب جديد. يجب تنفيذ getServerSideProps تمامًا مثل getStaticProps.

##### 5. التصميم

ف﻿ي طرق كتير لاستخدام css في React عموما زي styled component مثلا واكثر واكثر...

```javascript
import styles from "../styles/animals.module.css"

function Animals({ animals }) {
    return (
        <ul className={styles.list}>
            {animals.map((animal) => (
                <li>{animal.title}</li>
            ))}
        </ul>
    )
}
```

##### 6. Image Optimization

يمكن للصور الثقيلة أن تبطئ موقعك وتخفض تصنيفه في Google. باستخدام Next.js ، يمكنك استخدام مكون الصورة لتحسين الصور تلقائيًا.

```javascript
import Image from 'next/image'
```

يقدم هذا المكون الصور ذات الحجم الثابت [](https://www.makeuseof.com/convert-webp-to-jpeg-png-other-image-formats/)انصحكم بان تحولو كل صيغ الصور لwebp إذا كان المستعرض يدعمها. يتم أيضًا تحميل الصور فقط عندما يقوم المستخدم بتمريرها لعرضها. يؤدي ذلك إلى تحسين سرعة الصفحة وتوفير مساحة على جهاز المستخدم.

##### 7. مجتمع كبير ومساعد

نظرًا لأن Next.js مبني على React ، فإنه يكتسب شعبية بسرعة كبيرة. لذلك ، هناك مجتمع متزايد من المطورين المستعدين للمساعدة إذا واجهتك مشكلة. هذا ، جنبًا إلى جنب مع الوثائق الممتازة ، يضمن أنه حتى المبتدئين يمكنهم بسهولة بدء استخدام Next.js.

##### 8. مجتمع كبير ومساعد

من أفضل الأشياء في Next.js هي خيارات العرض. أنت غير مرتبط بـ CSR أو SSR أو SSG أو ISR ويمكنك اختيار الصفحات التي تريد عرضها على جانب الخادم أو جانب العميل أو الصفحات التي تريد أن تكون ثابتة تمامًا.

لهذا السبب ، يمكنك تخصيص كيفية عرض كل صفحة في تطبيقك بناءً على احتياجاتها. على سبيل المثال ، يمكنك عرض الصفحات التي تعتمد على البيانات المتغيرة باستمرار باستخدام SSR وعرض صفحة ثابتة مثل صفحة تسجيل الدخول باستخدام SSG.

يأتي Next.js بالعديد من الميزات المضمنة والتكوين الإضافي الذي يسمح لك بالبدء في إضافة الميزات على الفور. لا داعي للقلق بشأن تكوين مسارات تطبيقك أو تحسين الصور أو تقسيم ملفات الحزم. كل ذلك من أجلك.

إذا كنت ترغب في إنشاء تطبيقات React التي تستهلك محتوى ديناميكيًا ولا ترغب في قضاء الوقت في إعداد الأشياء أو تثبيت الحزم أو تكوين التطبيق الخاص بك ليكون سريعًا ، فإن Next.js هو الحل الأفضل. ومع ذلك ، إذا كنت تنشئ تطبيقًا ثابتًا من صفحة واحدة ، فإن React العادي يظل خيارًا جيدًا.

> **\- ر﻿وابط مفيدة -**

* **[ا﻿بدء في تحميل Next - الموقع الرسمي](https://nextjs.org/docs/getting-started/installation)**
* [ابني موقع بتقنية الجامستاك في Next - يوتيوب](https://www.youtube.com/results?search_query=build+a+jamstack+site+with+next+js)
* [ا﻿بني موقع فول ستاك في Next - يوتيوب](https://www.youtube.com/results?search_query=build+a+fullstack+site+with+next+js)
* [N﻿ext.js 13](https://nextjs.org/blog/next-13-4)
* [ق﻿ناتي علي اليوتيوب](https://www.youtube.com/@ahmeedwaleed)