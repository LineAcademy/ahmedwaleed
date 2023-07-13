---
createdAt: 2023-07-04
slug: react-lite-youtube-embeds
title: Best way to add a YouTube iframe in react
image: blogen_1_q4omxf
subImage: sub-lite-yt-embed-react
id: 3
category: performance
description: The best way to add a youtube iframes in react - web programming
  with Ahmed Waleed
---
<div align="center">

  <h1>📺  React Lite YouTube Embed</h1>

  <blockquote>If you want to put an iframe from YouTube and use it as a YouTube embed, then you will have a big problem in the React project, which is that the iframe takes up a lot of space when you load it, and it will make your web site load slower and make the user experience bad</blockquote>

[![iFrame example](https://raw.githubusercontent.com/ibrahimcesar/react-lite-youtube-embed/HEAD/_example_lite.gif)]

</div>

***installation***

```javascript
// with Yarn
yarn add react-lite-youtube-embed

// with npm
npm install react-lite-youtube-embed -S
```

> ## 🕹️ Simple to use

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

> ## 💎 more use

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

> ## [🧰 Use your own items](https://ahmed.lineitsolutions.com/blog/react-lite-youtube-embeds#%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D9%85-%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%D9%83-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9)

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

> > ## [the problem](https://ahmed.lineitsolutions.com/blog/react-lite-youtube-embeds#%D8%A7%D9%84%D9%85%D8%B4%D9%83%D9%84%D8%A9)
>
> **Which one of you will do a test?**
>
> > ## [lighthouse](https://ahmed.lineitsolutions.com/blog/react-lite-youtube-embeds#lighthouse)
>
> **Regularly, you may have come across this warning:**
>
> ![warning lighthouse youtube iframe - easy coding with ahmed waleed](https://ahmed.lineitsolutions.com/assets/images/screenshot_2021-01-29_at_10.37.43_meeyhu.webp "warning lighthouse youtube iframe - easy coding with ahmed waleed")

You'll also see when testing on mobile how this page with many YouTube embeds underperformed with the largest content panel at 8.8 seconds and an interaction time of 6.3 seconds.

![Monster performance when loading the video frame in React](https://res.cloudinary.com/drcfigqqr/image/upload/v1688493637/Screenshot_47_qwe9lr.webp "Monster performance when loading the video frame in React")

> **The solution is the way we did it**

![Solving the problem of downloading a frame from YouTube in React](https://res.cloudinary.com/drcfigqqr/image/upload/v1688493637/Screenshot_48_uzjyui.webp "Solving the problem of downloading a frame from YouTube in React")

> ### [📝 Read more](https://ahmed.lineitsolutions.com/blog/react-lite-youtube-embeds#read-more)
>
> [ **Lite YouTube Embed-g﻿ithub**](https://github.com/ibrahimcesar/react-lite-youtube-embed)