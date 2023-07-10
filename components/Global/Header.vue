<template lang="">
    <div>

<!-- Header Arabic Section -->
<div v-if="route.href.includes('/en-us') == false">
    <header dir="rtl" class="rbt-header rbt-header-10">
<div class="rbt-sticky-placeholder"></div>
<div class="rbt-header-wrapper header-space-betwween header-sticky">
    <div class="container-fluid">
        <div class="mainbar-row rbt-navigation-center align-items-center">
            <div class="header-left rbt-header-content">
                <div class="header-info">
                    <div class="logo">
                        <NuxtLink to="/">
                            <nuxt-img
                        loading="lazy" 
                        fit="cover"
                        provider="cloudinary" 
                        src="logo_ar_yp2jlw"
                        alt="لوجو موقع احمد وليد أكبر موقع لتعلم برمجة المواقع في مصر - افضل مبرمج مواقع في مصر" />
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="rbt-main-navigation d-none d-xl-block">
                <nav class="mainmenu-nav">
                    <ul class="mainmenu">
                        <li class="with-megamenu has-menu-child-item position-static">
                            <NuxtLink to="/courses/">الكورسات <i class="feather-chevron-down"></i></NuxtLink>
                            <!-- Start Mega Menu  -->
                            <div class="rbt-megamenu grid-item-3">
                                <div class="wrapper">
                                    <div class="row row--15">
                                        <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                            <div class="rbt-ads-wrapper">
                                                <a class="d-block" href="/courses/"><nuxt-img
                        loading="lazy" 
                        fit="cover"
                        provider="cloudinary" 
                        src="learn_web"
                        alt="تعلم البرمجة جافاسكريبت ورياكت مع احمد وليد أكبر موقع لتعلم برمجة المواقع في مصر - افضل مبرمج مواقع في مصر" /></a>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                            <h3 class="rbt-short-title">المشاريع</h3>
                                            <ul class="mega-menu-item">
                                                <li><NuxtLink to="/courses/build-junior-site">بناء موقع جونيور [8 فديوهات]</NuxtLink></li>
                                                <li><NuxtLink to="/courses/javascript-projects">مشاريع جافاسكريبت للمبتدئين</NuxtLink></li>
                                                <li><NuxtLink to="/courses/upload-site-to-github">رفع المشروع علي جيتهب</NuxtLink></li>
                                                <li><NuxtLink to="/courses/upload-site-to-netlify">رفع المشروع علي نيتفلاي</NuxtLink></li>
                                                <li><NuxtLink class="rbt-btn hover-icon-reverse" to="/courses">كل الكورسات</NuxtLink></li>
                                            </ul>
                                        </div>

                                        <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                            <h3 class="rbt-short-title">التعليم</h3>
                                            <ul class="mega-menu-item">
                                                <li><NuxtLink to="/courses/javascript-before-react">دورة اهم الاشياء جافاسكريبت قبل رياكت</NuxtLink></li>
                                                <li><NuxtLink to="/courses/javascript-interview-qs">دورة أسئلة الانترفيو جافاسكريبت</NuxtLink></li>
                                                <li><NuxtLink to="/courses/react/">دورة شرح رياكت</NuxtLink></li>
                                                <li><NuxtLink to="/courses/javascript-basics">دورة شرح أساسيات جافاسكريبت </NuxtLink></li>
                                                <li><a to="#">دورة اتتش تي امل <span class="rbt-badge-card">قريبا</span></a></li>
                                                <li><a to="#">دورة سي اس اس <span class="rbt-badge-card">قريبا</span></a></li>
                                            </ul>
                                        </div>

                                       
                                    </div>
                                </div>
                            </div>
                            <!-- End Mega Menu  -->
                        </li>

                        <li class="has-menu-child-item">
                            <NuxtLink to="/students-projects">مشاريع الطلاب
                            </NuxtLink>
                        </li>

                        <li class="has-menu-child-item">
                            <NuxtLink to="/line-stories">حكايات مؤثرة
                            </NuxtLink>
                        </li>

                        <li class="has-menu-child-item">
                            <NuxtLink to="/hall-of-fame">قاعة الأَثَر
                            </NuxtLink>
                        </li>

                        <li class="has-menu-child-item">
				<a v-if="route.href === '/courses'" href="/blog"> المدونة
                                    </a>
                            <NuxtLink v-else="route.href === '/courses'" to="/blog"> المدونة
                            </NuxtLink>
				
                        </li>

                        <li class="has-menu-child-item">
                            <a v-if="route.href === '/'" href="/en-us"> EN
                                    </a>
                                    <nuxtLink v-else="route.href === '/'" :to="`/en-us${route.href}`"> EN
                                    </nuxtLink>
                        </li>

                    </ul>
                </nav>
            </div>

            <div class="header-right">


                <div class="rbt-btn-wrapper d-none d-xl-block">
                    <ul class="social-icon justify-content-center  d-flex justify-content-lg-start">
                        <li><a href="https://dev.to/ahmedwaleed" aria-label="dev to" target="_blank" rel="nofollow noopener noreferrer" data-v-43922166=""><svg xmlns="http://www.w3.org/2000/svg" class="rainbow-logo h-10 w-10" preserveAspectRatio="xMinYMin meet" viewBox="0 0 235 234" data-v-43922166=""><g fill="none" fill-rule="evenodd"><path fill="#88AEDC" d="m234.04 175.67-75.69 58.28h47.18L234.04 212z"></path><path d="m234.04 140.06-121.93 93.89h.02l121.91-93.87zM133.25.95.04 103.51v.02L133.27.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95.04 31.11v35.9L85.84.95z"></path><path fill="#F3F095" fill-rule="nonzero" d="M85.84.95.04 67.01v36.5L133.25.95z"></path><path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95.04 103.53v35.59L179.49.95z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"></path><path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95.04 139.12v36.33L226.67.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2.04 211.38v22.57h18.03l215.97-166.3z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65 18.07 233.95H64.7l169.34-130.39z"></path><path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56 64.7 233.95h47.41l121.93-93.89z"></path><path fill="#55C1AE" fill-rule="nonzero" d="m234.04 140.08-121.91 93.87h46.22l75.69-58.28z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="m234.04 212-28.51 21.95h28.51z"></path><path fill="#FFF" d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75ZM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117Zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25Zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27Z"></path></g></svg></a>
                        </li>
                        <li><a href="https://www.youtube.com/@ahmeedwaleed" target="_blank" rel="nofollow noopener noreferrer" aria-label="youtube" data-v-43922166=""><svg id="youTube" enable-background="new 0 0 512 512" height="512px" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="29.8503" x2="443.0858" y1="48.8522" y2="462.0877"><stop offset="0" style="stop-color:#dd272d;"></stop><stop offset="0.5153" style="stop-color:#ca2429;"></stop><stop offset="1" style="stop-color:#b22025;"></stop></linearGradient><polygon fill="url(#SVGID_1_)" points="217.949,313.149 313.196,256 217.949,198.851  "></polygon><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="39.3513" x2="452.5868" y1="39.3513" y2="452.5867"><stop offset="0" style="stop-color:#dd272d;"></stop><stop offset="0.5153" style="stop-color:#ca2429;"></stop><stop offset="1" style="stop-color:#b22025;"></stop></linearGradient><path d="M256,7.098C118.535,7.098,7.098,118.535,7.098,256c0,137.465,111.437,248.902,248.902,248.902   c137.465,0,248.902-111.437,248.902-248.902C504.902,118.535,393.465,7.098,256,7.098z M408.349,268.287   c0,26.307-3.048,52.605-3.048,52.605s-2.981,22.402-12.106,32.251c-11.592,12.935-24.574,13.011-30.527,13.773   C320.026,370.183,256,370.297,256,370.297s-79.227-0.771-103.601-3.267c-6.782-1.353-21.993-0.962-33.594-13.897   c-9.134-9.849-12.106-32.251-12.106-32.251s-3.048-26.289-3.048-52.605v-24.65c0-26.298,3.048-52.596,3.048-52.596   s2.981-22.412,12.106-32.279c11.601-12.935,24.574-13.011,30.527-13.744c42.633-3.305,106.592-3.305,106.592-3.305h0.143   c0,0,63.959,0,106.601,3.305c5.953,0.733,18.935,0.81,30.527,13.744c9.134,9.868,12.106,32.279,12.106,32.279   s3.048,26.298,3.048,52.605V268.287z" fill="url(#SVGID_2_)"></path></g></svg></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/ahmeedwaleed/" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg id="linkedIn" enable-background="new 0 0 128 128" height="128px" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><circle cx="64" cy="64" fill="#0076B4" r="64"></circle></g><g><path d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z" fill="#FFFFFF"></path></g></svg></a>
                        </li>
                        <li><a href="https://www.facebook.com/LiNePasha" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg style="color: rgb(8, 92, 170);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#085caa"></path> </svg></a>
                        </li>
                    </ul>
                </div>

                <!-- Start Mobile-Menu-Bar -->
                <div class="mobile-menu-bar d-block d-xl-none">
                    <div class="hamberger">
                        <button class="hamberger-button rbt-round-btn">
                            <i class="feather-menu"></i>
                        </button>
                    </div>
                </div>
                <!-- Start Mobile-Menu-Bar -->

            </div>
        </div>
    </div>
</div>
<a class="rbt-close_side_menu" href="javascript:void(0);"></a>
</header>
<div class="popup-mobile-menu">
<div class="inner-wrapper">
    <div class="inner-top">
        <div class="content">
            <div class="logo">
                <a href="/">
                            <nuxt-img
                        loading="lazy" 
                        fit="cover"
                        provider="cloudinary" 
                        src="logo_ar_yp2jlw"
                        alt="لوجو موقع احمد وليد أكبر موقع لتعلم برمجة المواقع في مصر - افضل مبرمج مواقع في مصر" />
                        </a>
            </div>
            <div class="rbt-btn-close">
                <button class="close-button rbt-round-btn"><i class="feather-x"></i></button>
            </div>
        </div>
        <p class="description">أحمد وليد والبرمجة أتعمل عشان أشارك الناس معرفتي بشكل لطيف ومرتب</p>
        <ul class="navbar-top-left rbt-information-list">
            <li>
                <a target="_blank" href="mailto:hello@example.com"><i class="feather-mail"></i>ahmedalkpeer.v2@gmail.com</a>
            </li>
            <li>
                <a target="_blank" href="https://wa.link/k92hsq"><i class="feather-phone"></i>(+20) 1025338973</a>
            </li>
        </ul>
    </div>

    <nav dir="rtl" class="mainmenu-nav">
        <ul class="mainmenu">
            <li class="with-megamenu has-menu-child-item position-static">
                <NuxtLink to="/courses">الكورسات <i class="feather-chevron-down"></i></NuxtLink>
                <!-- Start Mega Menu  -->
                <div class="rbt-megamenu menu-skin-dark">
                    <div class="wrapper">
                        <div dir="rtl" class="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                            <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                <h3 class="rbt-short-title">المشاريع</h3>
                                <ul class="mega-menu-item">
                                    <li><NuxtLink to="/courses/build-junior-site">بناء موقع جونيور [8 فديوهات]</NuxtLink></li>
                                    <li><NuxtLink to="/courses/javascript-projects">مشاريع جافاسكريبت للمبتدئين</NuxtLink></li>
                                    <li><NuxtLink to="/courses/upload-site-to-github">رفع المشروع علي جيتهب</NuxtLink></li>
                                    <li><NuxtLink to="/courses/upload-site-to-netlify">رفع المشروع علي نيتفلاي</NuxtLink></li>
                                </ul>
                            </div>

                            <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                <h3 class="rbt-short-title">التعليم</h3>
                                <ul class="mega-menu-item">
                                    <li><NuxtLink to="/courses/javascript-before-react">دورة اهم الاشياء جافاسكريبت قبل رياكت</NuxtLink></li>
                                    <li><NuxtLink to="/courses/javascript-interview-qs">دورة أسئلة الانترفيو جافاسكريبت</NuxtLink></li>
                                    <li><NuxtLink to="/courses/react/">دورة شرح رياكت</NuxtLink></li>
                                    <li><NuxtLink to="/courses/javascript-basics">دورة شرح أساسيات جافاسكريبت </NuxtLink></li>
                                    <li><a href="#">دورة اتتش تي امل <span class="rbt-badge-card">قريبا</span></a></li>
                                    <li><a href="#">دورة سي اس اس <span class="rbt-badge-card">قريبا</span></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="load-demo-btn text-center">
                            <a class="rbt-btn-link color-white" href="#">أنزل عشان تشوف زيادة <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg></a>
                        </div>
                    </div>
                </div>
                <!-- End Mega Menu  -->
            </li>

            <li>
                <NuxtLink to="/students-projects">مشاريع الطلاب</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/line-stories">حكايات مؤثرة</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/hall-of-fame">قاعة الأَثَر</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/blog">المدونة</NuxtLink>
            </li>

        </ul>
    </nav>

    <div class="mobile-menu-bottom">
        <divt class="rbt-btn-wrapper mb--20">
                                    <a v-if="route.href === '/'" href="/en-us" class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center" > 
                                        <span> اللغة الإنجليزية | English 🇬🇧</span>
                                    </a>
                                    <nuxtLink v-else="route.href === '/'" :to="`/en-us${route.href}`" class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center" > 
                                        <span> اللغة الإنجليزية | English 🇬🇧</span>
                                    </nuxtLink>
        </divt>

        <div class="social-share-wrapper mt-4">
            <span class="rbt-short-title d-block text-center">تابعني</span>
            <ul class="social-icon justify-content-center  d-flex justify-content-lg-start">
                        <li><a href="https://dev.to/ahmedwaleed" aria-label="dev to" target="_blank" rel="nofollow noopener noreferrer" data-v-43922166=""><svg xmlns="http://www.w3.org/2000/svg" class="rainbow-logo h-10 w-10" preserveAspectRatio="xMinYMin meet" viewBox="0 0 235 234" data-v-43922166=""><g fill="none" fill-rule="evenodd"><path fill="#88AEDC" d="m234.04 175.67-75.69 58.28h47.18L234.04 212z"></path><path d="m234.04 140.06-121.93 93.89h.02l121.91-93.87zM133.25.95.04 103.51v.02L133.27.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95.04 31.11v35.9L85.84.95z"></path><path fill="#F3F095" fill-rule="nonzero" d="M85.84.95.04 67.01v36.5L133.25.95z"></path><path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95.04 103.53v35.59L179.49.95z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"></path><path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95.04 139.12v36.33L226.67.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2.04 211.38v22.57h18.03l215.97-166.3z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65 18.07 233.95H64.7l169.34-130.39z"></path><path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56 64.7 233.95h47.41l121.93-93.89z"></path><path fill="#55C1AE" fill-rule="nonzero" d="m234.04 140.08-121.91 93.87h46.22l75.69-58.28z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="m234.04 212-28.51 21.95h28.51z"></path><path fill="#FFF" d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75ZM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117Zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25Zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27Z"></path></g></svg></a>
                        </li>
                        <li><a href="https://www.youtube.com/@ahmeedwaleed" target="_blank" rel="nofollow noopener noreferrer" aria-label="youtube" data-v-43922166=""><svg style="color: rgb(207 26 26)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="rgb(207 26 26)"></path> </svg></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/ahmeedwaleed/" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg id="linkedIn" enable-background="new 0 0 128 128" height="128px" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><circle cx="64" cy="64" fill="#0076B4" r="64"></circle></g><g><path d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z" fill="#FFFFFF"></path></g></svg></a>
                        </li>
                        <li><a href="https://www.facebook.com/LiNePasha" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg style="color: rgb(8, 92, 170);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#085caa"></path> </svg></a>
                        </li>
                    </ul>
        </div>
    </div>

</div>
</div>
<a class="close_side_menu" href="javascript:void(0);"></a>
</div>
<!-- Header Arabic Section -->


<!-- Header English Section -->
<div v-if="route.href.includes('/en-us') == true">
    <header class="rbt-header rbt-header-10">
        <div class="rbt-sticky-placeholder"></div>
        <div class="rbt-header-wrapper header-space-betwween header-sticky">
            <div class="container-fluid">
                <div class="mainbar-row rbt-navigation-center align-items-center">
                    <div class="header-left rbt-header-content">
                        <div class="header-info">
                            <div class="logo">
                                <NuxtLink to="/en-us">
                                    <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="logo_en_2_gexgxm"
								alt="logo of Ahmed Waleed website - the largest website for learning web development in Egypt - the best web developer in Egypt" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="rbt-main-navigation d-none d-xl-block">
                        <nav class="mainmenu-nav">
                            <ul class="mainmenu">
                                <li class="with-megamenu has-menu-child-item position-static">
                                    <NuxtLink to="/en-us/courses/">Courses <i class="feather-chevron-down"></i></NuxtLink>
                                    <!-- Start Mega Menu  -->
                                    <div class="rbt-megamenu grid-item-3">
                                        <div class="wrapper">
                                            <div class="row row--15">
                                                <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                                    <div class="rbt-ads-wrapper">
                                                        <a class="d-block" href="/en-us/courses/"><nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="learn_web_en_q9f0ad"
								alt="learn web development , javascript , typescript, react with Ahmed Waleed website - the largest website for learning web development in Egypt - the best web developer in Egypt" /></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                                    <h3 class="rbt-short-title">Projects</h3>
                                                    <ul class="mega-menu-item">
                                                        <li><NuxtLink to="/en-us/courses/build-junior-site"> Build Junior Website [8 Videos] </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/javascript-projects"> JavaScript Beginner Projects </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/upload-site-to-github"> Deploy On Github </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/upload-site-to-netlify"> Deploy On Vercel </NuxtLink></li>
                                                        <li><NuxtLink class="rbt-btn hover-icon-reverse" to="/en-us/courses">All Videos</NuxtLink></li>
                                                    </ul>
                                                </div>

                                                <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                                    <h3 class="rbt-short-title">Learning</h3>
                                                    <ul class="mega-menu-item">
                                                        <li><NuxtLink to="/en-us/courses/javascript-before-react"> Modern JS Before React.js Course </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/javascript-interview-qs"> JavaScript Interview Questions </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/react/"> Course React.js For Beginners </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/javascript-basics"> JavaScript Basics Course </NuxtLink></li>
                                                        <li><a to="#"> HTML Course <span class="rbt-badge-card">SOON</span></a></li>
                                                        <li><a to="#"> CSS Course <span class="rbt-badge-card">SOON</span></a></li>
                                                    </ul>
                                                </div>

                                               
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Mega Menu  -->
                                </li>

                                <li class="has-menu-child-item">
                                    <NuxtLink to="/en-us/students-projects"> Students-Projects
                                    </NuxtLink>
                                </li>

                                <li class="has-menu-child-item">
                                    <NuxtLink to="/en-us/line-stories"> Stories
                                    </NuxtLink>
                                </li>

                                <li class="has-menu-child-item">
                                    <NuxtLink to="/en-us/hall-of-fame"> Hall-Of-Fame
                                    </NuxtLink>
                                </li>

                                <li class="has-menu-child-item">
                                    <NuxtLink to="/en-us/blog"> Blog
                                    </NuxtLink>
                                </li>

                                <li class="has-menu-child-item">
                                    <a v-if="route.href === '/en-us'" href="/"> عربي
                                    </a>
                                    <nuxtLink v-else="route.href === '/en-us'" :to="`${route.href.replace('/en-us','')}`"> عربي
                                    </nuxtLink>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div class="header-right">


                        <div class="rbt-btn-wrapper d-none d-xl-block">
                            <ul class="social-icon justify-content-center  d-flex justify-content-lg-start">
                                <li><a href="https://dev.to/ahmedwaleed" aria-label="dev to" target="_blank" rel="nofollow noopener noreferrer" data-v-43922166=""><svg xmlns="http://www.w3.org/2000/svg" class="rainbow-logo h-10 w-10" preserveAspectRatio="xMinYMin meet" viewBox="0 0 235 234" data-v-43922166=""><g fill="none" fill-rule="evenodd"><path fill="#88AEDC" d="m234.04 175.67-75.69 58.28h47.18L234.04 212z"></path><path d="m234.04 140.06-121.93 93.89h.02l121.91-93.87zM133.25.95.04 103.51v.02L133.27.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95.04 31.11v35.9L85.84.95z"></path><path fill="#F3F095" fill-rule="nonzero" d="M85.84.95.04 67.01v36.5L133.25.95z"></path><path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95.04 103.53v35.59L179.49.95z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"></path><path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95.04 139.12v36.33L226.67.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2.04 211.38v22.57h18.03l215.97-166.3z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65 18.07 233.95H64.7l169.34-130.39z"></path><path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56 64.7 233.95h47.41l121.93-93.89z"></path><path fill="#55C1AE" fill-rule="nonzero" d="m234.04 140.08-121.91 93.87h46.22l75.69-58.28z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="m234.04 212-28.51 21.95h28.51z"></path><path fill="#FFF" d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75ZM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117Zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25Zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27Z"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.youtube.com/@ahmeedwaleed" target="_blank" rel="nofollow noopener noreferrer" aria-label="youtube" data-v-43922166=""><svg id="youTube" enable-background="new 0 0 512 512" height="512px" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="29.8503" x2="443.0858" y1="48.8522" y2="462.0877"><stop offset="0" style="stop-color:#dd272d;"></stop><stop offset="0.5153" style="stop-color:#ca2429;"></stop><stop offset="1" style="stop-color:#b22025;"></stop></linearGradient><polygon fill="url(#SVGID_1_)" points="217.949,313.149 313.196,256 217.949,198.851  "></polygon><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="39.3513" x2="452.5868" y1="39.3513" y2="452.5867"><stop offset="0" style="stop-color:#dd272d;"></stop><stop offset="0.5153" style="stop-color:#ca2429;"></stop><stop offset="1" style="stop-color:#b22025;"></stop></linearGradient><path d="M256,7.098C118.535,7.098,7.098,118.535,7.098,256c0,137.465,111.437,248.902,248.902,248.902   c137.465,0,248.902-111.437,248.902-248.902C504.902,118.535,393.465,7.098,256,7.098z M408.349,268.287   c0,26.307-3.048,52.605-3.048,52.605s-2.981,22.402-12.106,32.251c-11.592,12.935-24.574,13.011-30.527,13.773   C320.026,370.183,256,370.297,256,370.297s-79.227-0.771-103.601-3.267c-6.782-1.353-21.993-0.962-33.594-13.897   c-9.134-9.849-12.106-32.251-12.106-32.251s-3.048-26.289-3.048-52.605v-24.65c0-26.298,3.048-52.596,3.048-52.596   s2.981-22.412,12.106-32.279c11.601-12.935,24.574-13.011,30.527-13.744c42.633-3.305,106.592-3.305,106.592-3.305h0.143   c0,0,63.959,0,106.601,3.305c5.953,0.733,18.935,0.81,30.527,13.744c9.134,9.868,12.106,32.279,12.106,32.279   s3.048,26.298,3.048,52.605V268.287z" fill="url(#SVGID_2_)"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.linkedin.com/in/ahmeedwaleed/" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg id="linkedIn" enable-background="new 0 0 128 128" height="128px" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><circle cx="64" cy="64" fill="#0076B4" r="64"></circle></g><g><path d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z" fill="#FFFFFF"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.facebook.com/LiNePasha" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg style="color: rgb(8, 92, 170);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#085caa"></path> </svg></a>
                                </li>
                            </ul>
                        </div>

                        <!-- Start Mobile-Menu-Bar -->
                        <div class="mobile-menu-bar d-block d-xl-none">
                            <div class="hamberger">
                                <button class="hamberger-button rbt-round-btn">
                                    <i class="feather-menu"></i>
                                </button>
                            </div>
                        </div>
                        <!-- Start Mobile-Menu-Bar -->

                    </div>
                </div>
            </div>
        </div>
        <a class="rbt-close_side_menu" href="javascript:void(0);"></a>
    </header>
    <div class="popup-mobile-menu">
        <div class="inner-wrapper">
            <div class="inner-top">
                <div class="content">
                    <div class="logo">
                        <a href="/en-us">
                                    <nuxt-img
                                loading="lazy" 
                                fit="cover"
                                provider="cloudinary" 
								src="logo_en_2_gexgxm"
								alt="learn web development , javascript , typescript, react with Ahmed Waleed website - the largest website for learning web development in Egypt - the best web developer in Egypt" />
                                </a>
                    </div>
                    <div class="rbt-btn-close">
                        <button class="close-button rbt-round-btn"><i class="feather-x"></i></button>
                    </div>
                </div>
                <p class="description"> Ahmed Waleed Coding is used to share my knowledge with people in a nice and tidy manner</p>
                <ul class="navbar-top-left rbt-information-list">
                    <li>
                        <a target="_blank" href="mailto:hello@example.com"><i class="feather-mail"></i>ahmedalkpeer.v2@gmail.com</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://wa.link/k92hsq"><i class="feather-phone"></i>(+20) 1025338973</a>
                    </li>
                </ul>
            </div>

            <nav class="mainmenu-nav">
                <ul class="mainmenu">
                    <li class="with-megamenu has-menu-child-item position-static">
                        <NuxtLink to="/en-us/courses">Courses <i class="feather-chevron-down"></i></NuxtLink>
                        <!-- Start Mega Menu  -->
                        <div class="rbt-megamenu menu-skin-dark">
                            <div class="wrapper">
                                <div class="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                                    <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                        <h3 class="rbt-short-title">Projects</h3>
                                        <ul class="mega-menu-item">
                                                        <li><NuxtLink to="/en-us/courses/build-junior-site"> Build Junior Website [8 Videos] </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/javascript-projects"> JavaScript Beginner Projects </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/upload-site-to-github"> Deploy On Github </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/upload-site-to-netlify"> Deploy On Vercel </NuxtLink></li>
                                                    </ul>
                                                </div>

                                                <div class="col-lg-12 col-xl-3 col-xxl-4 single-mega-item">
                                                    <h3 class="rbt-short-title">Learning</h3>
                                                    <ul class="mega-menu-item">
                                                        <li><NuxtLink to="/en-us/courses/javascript-before-react"> Modern JS Before React.js Course </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/javascript-interview-qs"> JavaScript Interview Questions </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/react/"> Course React.js For Beginners </NuxtLink></li>
                                                        <li><NuxtLink to="/en-us/courses/javascript-basics"> JavaScript Basics Course </NuxtLink></li>
                                                        <li><a to="#"> HTML Course <span class="rbt-badge-card">SOON</span></a></li>
                                                        <li><a to="#"> CSS Course <span class="rbt-badge-card">SOON</span></a></li>
                                                    </ul>
                                    </div>
                                </div>

                                <div class="load-demo-btn text-center">
                                    <a class="rbt-btn-link color-white" href="#"> Down To Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Mega Menu  -->
                    </li>

                    <li>
                        <NuxtLink to="/en-us/students-projects"> Students Projects </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/en-us/line-stories">Stories</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/en-us/hall-of-fame">Hall-Of-Fame</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/en-us/blog">Blog</NuxtLink>
                    </li>

                </ul>
            </nav>

            <div class="mobile-menu-bottom">
                <divt class="rbt-btn-wrapper mb--20">
                    <a v-if="route.href === '/en-us'" href="/" class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"> 
                        <span> اللغة العربية | Arabic 🇪🇬</span>
                                    </a>
                                    <nuxtLink v-else="route.href === '/en-us'" :to="`${route.href.replace('/en-us','')}`" class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"> 
                                        <span> اللغة العربية | Arabic 🇪🇬</span>
                                    </nuxtLink>
                </divt>

                <div class="social-share-wrapper mt-4">
                    <span class="rbt-short-title d-block text-center">Follow Me</span>
                    <ul class="social-icon justify-content-center  d-flex justify-content-lg-start">
                                <li><a href="https://dev.to/ahmedwaleed" aria-label="dev to" target="_blank" rel="nofollow noopener noreferrer" data-v-43922166=""><svg xmlns="http://www.w3.org/2000/svg" class="rainbow-logo h-10 w-10" preserveAspectRatio="xMinYMin meet" viewBox="0 0 235 234" data-v-43922166=""><g fill="none" fill-rule="evenodd"><path fill="#88AEDC" d="m234.04 175.67-75.69 58.28h47.18L234.04 212z"></path><path d="m234.04 140.06-121.93 93.89h.02l121.91-93.87zM133.25.95.04 103.51v.02L133.27.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95.04 31.11v35.9L85.84.95z"></path><path fill="#F3F095" fill-rule="nonzero" d="M85.84.95.04 67.01v36.5L133.25.95z"></path><path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95.04 103.53v35.59L179.49.95z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"></path><path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95.04 139.12v36.33L226.67.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2.04 211.38v22.57h18.03l215.97-166.3z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65 18.07 233.95H64.7l169.34-130.39z"></path><path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56 64.7 233.95h47.41l121.93-93.89z"></path><path fill="#55C1AE" fill-rule="nonzero" d="m234.04 140.08-121.91 93.87h46.22l75.69-58.28z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="m234.04 212-28.51 21.95h28.51z"></path><path fill="#FFF" d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75ZM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117Zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25Zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27Z"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.youtube.com/@ahmeedwaleed" target="_blank" rel="nofollow noopener noreferrer" aria-label="youtube" data-v-43922166=""><svg style="color: rgb(207 26 26)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="rgb(207 26 26)"></path> </svg></a>
                                </li>
                                <li><a href="https://www.linkedin.com/in/ahmeedwaleed/" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg id="linkedIn" enable-background="new 0 0 128 128" height="128px" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><circle cx="64" cy="64" fill="#0076B4" r="64"></circle></g><g><path d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z" fill="#FFFFFF"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.facebook.com/LiNePasha" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg style="color: rgb(8, 92, 170);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#085caa"></path> </svg></a>
                                </li>
                            </ul>
                </div>
            </div>

        </div>
    </div>
    <a class="close_side_menu" href="javascript:void(0);"></a>
</div>
<!-- Header English Section -->
    </div>
</template>

<script setup>
const route = useRoute(); 
useHead({
        meta: [
            { name: 'twitter:site', content: '@ahmedwaleed_coding' },
            { name: 'twitter:creator', content: '@ahmedwaleed_coding' },
            { name: 'twitter:title', content: '@ahmedwaleed_coding' },
            { name: 'author', content: 'ahmed waleed best web developer in egypt' },
            { name: 'operator', content: 'ahmed waleed' },
        ],
        script: [
            
          ],
}) 

</script>
