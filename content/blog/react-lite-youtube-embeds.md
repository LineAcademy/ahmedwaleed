---
createdAt: 2023-07-04
slug: react-lite-youtube-embeds
title: افضل طريقة لاضافة YT iframe في رياكت
image: ar-lite-yt-embed-react_ujqog3
subImage: sub-lite-yt-embed-react
id: 3
category: performance
description: افضل طريقة لاضافة youtube iframe في رياكت - برمجة المواقع مع احمد وليد
---
<div align="center">

  <h1>📺  React Lite YouTube Embed</h1>

  <blockquote> لو انت حابب تحط iframe من اليوتيوب وهتستخدم الي حاطه اليوتيوب ف انت هيحصل معاك مشكلة كبيرة في مشروع رياكت وهي ان ال iframe بتستهلك مساحة كبيرة اعبال ما تحمل وكدا هتخلي الويب سايت بتاعتك يحمل ابطء وتجربة للمستخدم وحشة</blockquote>

[![iFrame example](https://raw.githubusercontent.com/ibrahimcesar/react-lite-youtube-embed/HEAD/_example_lite.gif)]

</div>

> ## 🚀 التحميل

```javascript
// with Yarn
yarn add react-lite-youtube-embed

// with npm
npm install react-lite-youtube-embed -S
```

> ## 🕹️ استخدام بسيط

```javascript
import React from "react";
import { render } from "react-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const App = () => (
  <div>
    <LiteYouTubeEmbed 
        id="L2vS_050c-M"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  </div>
);

render(<App />, document.getElementById("root"));
```

> ## 💎 استخدام اكثر

```javascript
const App = () => (
  <div>
    <LiteYouTubeEmbed
       id="L2vS_050c-M" // Default none, id of the video or playlist
       adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
       params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
       playlist={false} // Use  true when your ID be from a playlist
       playlistCoverId="L2vS_050c-M" // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
       poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
       title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
       noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
    />
  </div>
);
```

> ## 🧰 استخدم عناصرك الخاصة

```javascript
const App = () => (
  <div>
    <LiteYouTubeEmbed
       id="L2vS_050c-M"
       activeClass="lyt-activated" // Default as "lyt-activated", gives control to wrapper once clicked
       iframeClass="" // Default none, gives control to add a class to iframe element itself
       playerClass="lty-playbtn" // Default as "lty-playbtn" to control player button styles
       wrapperClass="yt-lite" // Default as "yt-lite" for the div wrapping the area, the most important class and needs extra attention, please refer to LiteYouTubeEmbed.css for a reference.
    />
  </div>
);
```

> > ## المشكلة
>
>  **ا لي منكم بيعمل اختبار** 
>
> > ## lighthouse
>
>  **بانتظام ، ربما تكون قد صادفت هذا التحذير:**
>
> ![warning lighthouse youtube iframe - easy coding with ahmed waleed](/assets/images/screenshot_2021-01-29_at_10.37.43_meeyhu.webp "warning lighthouse youtube iframe - easy coding with ahmed waleed")

سترى أيضًا عند الاختبار على الهاتف المحمول كيف أن هذه الصفحة التي تحتوي على العديد من تضمين YouTube كانت تعطي نتيجة أداء ضعيف مع أكبر لوحة محتوى تبلغ 8.8 ثانية ووقت تفاعلي قدره 6.3 ثانية.

![اداء وحش عند تحميل فريم الفيدوهات في رياكت](https://res.cloudinary.com/drcfigqqr/image/upload/v1688493637/Screenshot_47_qwe9lr.webp "اداء وحش عند تحميل فريم الفيدوهات في رياكت")

> **ا﻿لحل بالطريقة الي احنا عملناها**

![حل مشكلة تحذير تحميل فريم من اليوتيوب في رياكت](https://res.cloudinary.com/drcfigqqr/image/upload/v1688493637/Screenshot_48_uzjyui.webp "حل مشكلة تحذير تحميل فريم من اليوتيوب في رياكت")

> ### 📝 Read more
>
> [ **Lite YouTube Embed-g﻿ithub**](https://github.com/ibrahimcesar/react-lite-youtube-embed)