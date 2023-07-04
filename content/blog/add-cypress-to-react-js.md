---
createdAt: 2023-07-04
slug: add-cypress-to-react-js
title: أضافة أختبار لتطبيق رياكت بأستخدام Cypress 2023
image: add-cypress-to-react
subImage: sub-add-cypress-react
id: 1
category: testing
description: أضافة أختبار لتطبيق رياكت بأستخدام Cypress 2023 - مقالات احمد وليد
  في برمجة المواقع - احترف البرمجة مع احمد وليد
---
## الخطوة 1 : التثبيت

\-هنحمل Cypress بأستخدام Npm / Yarn

```javascript
// With NPM
npm install cypress --save-dev

// With Yarn
yarn add cypress -D
```

> كدا أنت حملت Cypress علي مستوي المشروع كله

## الخطوة 2 : فتح Cypress

```javascript
npx cypress open
```

> الأمر ده عشان يحمل جميع مجلدات المشروع المطلوبة وبعد كدا هيفتح معاك نافذة الترحيب

## الخطوة 3 : أختار نوع التيست

تُظهر نافذة الترحيب نوعين مختلفين من الاختبارات ، اختبار شامل واختبار المكونات في هذه الحالة ، نقوم بإجراء اختبار شامل لواجهة المستخدم حتى تتمكن من اختيار نوع الاختبار كاختبارات نهائية

![ أختار نوع التيست - احترف البرمجة مع احمد وليد - cypress react - testing](/assets/images/choose-test-type-to-test-react-app-in-cypress.png "أختار نوع التيست في cypress")

## الخطوة 4 : راجع علي ملفات التكوين

ستظهر لك نافذة بها بعض الملفات الي هيعملها Cypress عشان تقدر تستخدم نوع الأختبار الي اخترناه راجع عليها ودوس متابعة

![راجع علي ملفات التكوين - cypress react - testing](/assets/images/review-the-configuration-file-to-test-react-in-cypress.png "راجع علي ملفات التكوين")

## الخطوة 5 : أختار المتصفح

، يقوم Cypress بجمع المعلومات من جميع المتصفحات المثبتة في نظامك. إذا كان يدعم نوع المتصفح وإصدار المتصفح ، فإنه يسرد في قسم اختيار متصفح. للتبسيط ، دعنا نختار متصفح Chrome وانقر على Start End لإنهاء الاختبار باستخدام Chrome.

![أختار المتصفح - cypress react - testing](/assets/images/choose-browser-to-test-react-in-cypress.png "أختار المتصفح")

## الخطوة 6 : هنعمل نافذة الأختبار الأولي

1. أضغط علي أنشاء New Spec
2. أكتب أي أسم - مثالا: react.demo.cy.js
3. انقر فوق موافق وثم قم بتشغيل الأختبار

![هنعمل نافذة الأختبار الأولي - cypress react - testing](/assets/images/create-first-spec-window-to-test-react-in-cypress.png "## هنعمل نافذة الأختبار الأولي")

*ملاحظة: بشكل افتراضي ، تضيف مثال البرنامج النصي للاختبار ، ويمكننا تعديلها لاحقًا وفقًا لحالة الاستخدام أو سيناريو الاختبار*

#### كدا خلاص انت دلوقتي قادر تعمل اختبارات علي رياكت براحتك خش الموقع او شوف فديوهات للتعليم



*\- لينكات مفيدة -*

<cite><a target="_blank" style="color: #0d6efd;" href="https://docs.cypress.io/guides/component-testing/react/quickstart">React Quickstart | Cypress</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://docs.cypress.io/guides/component-testing/react/examples">Components Test | Cypress</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=X6CoUHlnuoY">Cypress Unit Testing For React Developers (Crash course)</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=V-F80UzZAmA">Cypress Component vs E2E Testing | by Mark Noonan</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=Y-7WS2ykQMI">Instagram Clone - React & Cypress End to End Testing</a></cite><br>