<template>
    <div>

<!-- Start Arabic Footer -->
    <div v-if="route.href.includes(langEn) == false">
        <div class="rbt-separator-mid">
        <div class="container">
            <hr class="rbt-separator m-0">
        </div>
    </div>
    <div class="container-fluid">
        <div class="row g-3">
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/blog/why-i-love-nextjs">
                        <img src="/assets/images/blog/creative/4.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Next.JS</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/blog/why-i-love-nuxtjs-1">
                        <img src="/assets/images/blog/creative/5.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Nuxt.JS</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/blog/why-i-love-jamstack-1">
                        <img src="/assets/images/blog/creative/6.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@JamStack</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/blog/why-i-love-cypress-testing">
                        <img src="/assets/images/blog/creative/7.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Cypress</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/blog/why-i-love-fulltypescript">
                        <img src="/assets/images/blog/creative/8.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@FullTypeScript</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <a href="#">
                        <img src="/assets/images/blog/creative/9.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Myself</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <footer class="rbt-footer footer-style-1 overflow-hidden" style="background:rgb(9 26 40/1);">
        <div class="rbt-separator-mid">
            <div class="container">
                <hr class="rbt-separator m-0">
            </div>
        </div>
        <div class="copyright-area copyright-style-1 ptb--20">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                        <div class="rbt-btn-wrapper d-block">
                            <ul class="social-icon justify-content-center  d-flex justify-content-lg-start">
                                 <li><a href="https://dev.to/ahmedwaleed" aria-label="dev to" target="_blank" rel="nofollow noopener noreferrer" data-v-43922166=""><svg xmlns="http://www.w3.org/2000/svg" class="rainbow-logo h-10 w-10" preserveAspectRatio="xMinYMin meet" viewBox="0 0 235 234" data-v-43922166=""><g fill="none" fill-rule="evenodd"><path fill="#88AEDC" d="m234.04 175.67-75.69 58.28h47.18L234.04 212z"></path><path d="m234.04 140.06-121.93 93.89h.02l121.91-93.87zM133.25.95.04 103.51v.02L133.27.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95.04 31.11v35.9L85.84.95z"></path><path fill="#F3F095" fill-rule="nonzero" d="M85.84.95.04 67.01v36.5L133.25.95z"></path><path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95.04 103.53v35.59L179.49.95z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"></path><path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95.04 139.12v36.33L226.67.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2.04 211.38v22.57h18.03l215.97-166.3z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65 18.07 233.95H64.7l169.34-130.39z"></path><path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56 64.7 233.95h47.41l121.93-93.89z"></path><path fill="#55C1AE" fill-rule="nonzero" d="m234.04 140.08-121.91 93.87h46.22l75.69-58.28z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="m234.04 212-28.51 21.95h28.51z"></path><path fill="#FFF" d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75ZM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117Zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25Zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27Z"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.youtube.com/@ahmeedwaleed" target="_blank" rel="nofollow noopener noreferrer" aria-label="youtube" data-v-43922166=""><svg style="color: rgb(207 26 26)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="rgb(207 26 26)"></path> </svg></a>
                                </li>
                                <li><a href="https://www.linkedin.com/in/ahmeedwaleed/" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg id="linkedIn" enable-background="new 0 0 128 128" height="128px" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><circle cx="64" cy="64" fill="#0076B4" r="64"></circle></g><g><path d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z" fill="#FFFFFF"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.facebook.com/LiNePasha" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg style="color: rgb(8, 92, 170);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#085caa"></path> </svg></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                        <ul class="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                            <li><a :href="`/en-us${route.href}`">English</a></li>
                            <li><NuxtLink to="/blog">المدونة</NuxtLink></li>
                            <li><NuxtLink to="/half-of-fame">قاعة الأَثَر</NuxtLink></li>
                            <li><NuxtLink to="/line-stories">حكايات مؤثرة</NuxtLink></li>
                            <li><NuxtLink to="/courses">الكورسات</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
<!-- End Arabic Footer -->


    <!-- Start English Footer -->
    <div v-if="route.href.includes(langEn) == true">
        <div class="rbt-separator-mid">
        <div class="container">
            <hr class="rbt-separator m-0">
        </div>
    </div>
    <div class="container-fluid">
        <div class="row g-3">
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/en-us/blog/why-i-love-nextjs">
                        <img src="/assets/images/blog/creative/en3.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Next.JS</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/en-us/blog/why-i-love-nuxtjs">
                        <img src="/assets/images/blog/creative/en4.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Nuxt.JS</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/en-us/blog/why-i-love-jamstack">
                        <img src="/assets/images/blog/creative/en5.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@JamStack</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/en-us/blog/why-i-love-cypress-testing">
                        <img src="/assets/images/blog/creative/en6.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Cypress</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <nuxtLink to="/en-us/blog/why-i-love-fulltypescript">
                        <img src="/assets/images/blog/creative/en7.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@FullTypeScript</span>
                        </span>
                    </nuxtLink>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                <div class="instagram-grid">
                    <a href="#">
                        <img src="/assets/images/blog/creative/en8.png" alt="instagram">
                        <span class="user-info">
                        <span class="icon"><i class="icon-instagram"></i></span>
                        <span class="user-name">@Myself</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <footer class="rbt-footer footer-style-1 overflow-hidden" style="background:rgb(9 26 40/1);">
        <div class="rbt-separator-mid">
            <div class="container">
                <hr class="rbt-separator m-0">
            </div>
        </div>
        <div class="copyright-area copyright-style-1 ptb--20">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                        <ul class="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                            <li><a :href="`${route.href.replace('/en-us','')}`">العربية</a></li>
                            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                            <li><NuxtLink to="/half-of-fame">Half-OF-Fame</NuxtLink></li>
                            <li><NuxtLink to="/line-stories">Line-Stories</NuxtLink></li>
                            <li><NuxtLink to="/courses">Courses</NuxtLink></li>
                        </ul>
                    </div>

                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                        <div class="rbt-btn-wrapper d-block">
                            <ul class="social-icon justify-content-center  d-flex justify-content-lg-start">
                                 <li><a href="https://dev.to/ahmedwaleed" aria-label="dev to" target="_blank" rel="nofollow noopener noreferrer" data-v-43922166=""><svg xmlns="http://www.w3.org/2000/svg" class="rainbow-logo h-10 w-10" preserveAspectRatio="xMinYMin meet" viewBox="0 0 235 234" data-v-43922166=""><g fill="none" fill-rule="evenodd"><path fill="#88AEDC" d="m234.04 175.67-75.69 58.28h47.18L234.04 212z"></path><path d="m234.04 140.06-121.93 93.89h.02l121.91-93.87zM133.25.95.04 103.51v.02L133.27.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M.04.95v30.16L39.21.95z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M39.21.95.04 31.11v35.9L85.84.95z"></path><path fill="#F3F095" fill-rule="nonzero" d="M85.84.95.04 67.01v36.5L133.25.95z"></path><path fill="#55C1AE" fill-rule="nonzero" d="M133.27.95.04 103.53v35.59L179.49.95z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"></path><path fill="#88AEDC" fill-rule="nonzero" d="M179.49.95.04 139.12v36.33L226.67.95z"></path><path fill="#F58F8E" fill-rule="nonzero" d="M234.04 31.2.04 211.38v22.57h18.03l215.97-166.3z"></path><path fill="#FEE18A" fill-rule="nonzero" d="M234.04 67.65 18.07 233.95H64.7l169.34-130.39z"></path><path fill="#F3F095" fill-rule="nonzero" d="M234.04 103.56 64.7 233.95h47.41l121.93-93.89z"></path><path fill="#55C1AE" fill-rule="nonzero" d="m234.04 140.08-121.91 93.87h46.22l75.69-58.28z"></path><path fill="#F7B3CE" fill-rule="nonzero" d="m234.04 212-28.51 21.95h28.51z"></path><path fill="#FFF" d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75ZM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117Zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25Zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27Z"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.youtube.com/@ahmeedwaleed" target="_blank" rel="nofollow noopener noreferrer" aria-label="youtube" data-v-43922166=""><svg style="color: rgb(207 26 26)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="rgb(207 26 26)"></path> </svg></a>
                                </li>
                                <li><a href="https://www.linkedin.com/in/ahmeedwaleed/" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg id="linkedIn" enable-background="new 0 0 128 128" height="128px" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10" data-v-43922166=""><g><circle cx="64" cy="64" fill="#0076B4" r="64"></circle></g><g><path d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z" fill="#FFFFFF"></path></g></svg></a>
                                </li>
                                <li><a href="https://www.facebook.com/LiNePasha" target="_blank" rel="nofollow noopener noreferrer" aria-label="linkedIn" data-v-43922166=""><svg style="color: rgb(8, 92, 170);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#085caa"></path> </svg></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
<!-- End English Footer -->

    
    
    <div class="rbt-progress-parent">
        <svg class="rbt-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    </div>
</template>

<script setup>
const route = useRoute()
const langEn = '/en-us'
console.log(route.href.includes(langEn))
</script>
