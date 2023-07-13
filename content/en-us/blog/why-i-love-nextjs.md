---
createdAt: 2023-07-07
slug: why-i-love-nextjs
title: Why I love NextJs framework
image: blogen_6_nq8pev
subImage: blogen_6_nq8pev
id: 12
category: next
description: I worked on several large and medium projects using nextjs and it
  was a great choice, why should you learn NextJs at the present time
---
> ***What is Next.Js, and why am I in love with it?***

Next is a React framework for building websites using JAM architecture. JAM stands for Javascript, APIs, and Markup. Effectively, you can build websites using Javascript, and we can also build mobile applications using React Native.

> **The difference between React and Next in displaying web content**

For example: Here, React application is displayed in one div called app, and the content is not displayed because it is Virtual Dom, and this is bad in terms of search tools, and for example, the google bot will not see content, so it will think that the web site is empty, which is bad...

![all react app in div app](https://res.cloudinary.com/drcfigqqr/image/upload/v1688710761/app_sgr362.webp "all react app in div app")

And here, Next displays all the content in the Dom, and we are about to solve the problem of issuing search tools, and this is called SSR.

![next app ssr](https://res.cloudinary.com/drcfigqqr/image/upload/v1688710738/Screenshot_56_ykpp9y.webp "next app ssr")

##### 1. Seamless Server-Side Rendering (SSR) - Next.js

One of the most important advantages of Next.js is its support (SSR). SSR allows web pages to be viewed on the server before they are sent to the client, resulting in faster initial page loading and SEO. Next.js simplifies SSR by eliminating complexities, allowing developers to focus on building rich user interfaces without compromising performance.

##### 2. Since I mentioned JAM, Next has SSG technology.

Next has taken the meaning of the word static website building quite literally. By generating HTML at build time, Next.js enables super fast page loading, reduces server load, and provides an exceptional user experience. The framework intelligently pre-renderes pages, making them statically ready to display, while allowing for dynamic functionality when needed. This combination of static and dynamic capabilities is a huge game changer for content-heavy websites and blogs.

##### 3. Routing at Next

The nature and arrangement of the pages in Next will be ready for you, my friend. I mean, it is not like React, you will have to download something to do Routing, and this is an image that shows this ...

![Image showing the nature of routing in Next.js](https://res.cloudinary.com/drcfigqqr/image/upload/v1688705652/image-1024x534_uziqwi.webp "Image showing the nature of routing in Next.js")

##### 4. Fetch and display data

Next.js has two types of data rendering: Static generation and Server-side rendering. This fixed width is what makes you display your pages at the time of creating the website. With this you can create a bunch of HTML files and upload them to a static host and they can be opened via a CDN which makes it very fast to display the data visually. With this technology, you can generate all of your HTML files locally and even capture your data. This can be useful when the data does not change often.

In each page component, you can implement the getStaticProps function. Within this function, you can fetch data from the API. Then the result can be passed as Props in any Component.

```javascript
// This function shows, names of Ahmed Waleed team with getStaticProps
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

If your data changes often, you can implement server-side rendering using getServerSideProps where the page is rebuilt each time a user opens it. While getStaticProps is running and build time, getServerSideProps is running at request time. This means that the page will fetch the latest data from the server each time a new request is made. getServerSideProps should be implemented in the same way as getStaticProps.

##### 5. Design

There are many ways to use css in React in general, such as styled component, for example, and more and more...

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

Heavy images can slow down your site and lower its Google ranking. With Next.js, you can use the image component to automatically optimize images.

```javascript
import Image from 'next/image'
```

This component provides fixed-size images.  [](https://www.makeuseof.com/convert-webp-to-jpeg-png-other-image-formats/)I recommend that you convert all image formats to webp if your browser supports it. Images are also only loaded when the user swipes them to view. This improves page speed and saves space on the user's device.

##### 7. A great and helpful community

Since Next.js is built on React, it is gaining popularity very quickly. So, there is a growing community of developers ready to help if you get stuck. This, along with the excellent documentation, ensures that even beginners can easily get started with Next.js.

##### 8. A great and helpful community

One of the best things about Next.js are the display options. You are not tied to a CSR, SSR, SSG, or ISR and can choose which pages you want to serve on the server side, the client side, or which pages you want to be completely static.

Because of this, you can customize how each page in your app is displayed based on its needs. For example, you can display pages that are based on constantly changing data using SSR and display a static page such as a login page using SSG.

Next.js comes with many built-in features and additional configuration that allows you to start adding features right away. You don't have to worry about configuring your application paths, optimizing images, or splitting package files. It's all for you.

If you want to build React applications that consume dynamic content and don't want to spend time setting things up, installing packages, or configuring your application to be fast, Next.js is the best solution. However, if you are building a static one-page application, plain React is still a good option.

> **\- Useful links -**

* **[Start downloading Next - Official Website](https://nextjs.org/docs/getting-started/installation)**
* [Build a website using gamestack technology at Next - YouTube](https://www.youtube.com/results?search_query=build+a+jamstack+site+with+next+js)
* [Build a full stack website on Next - YouTube](https://www.youtube.com/results?search_query=build+a+fullstack+site+with+next+js)
* [NExt.js 13](https://nextjs.org/blog/next-13-4)
* [My YouTube channel](https://www.youtube.com/@ahmeedwaleed)