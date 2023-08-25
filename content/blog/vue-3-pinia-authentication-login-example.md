---
createdAt: 2023-08-25
slug: vue-3-pinia-auth-login
title: اضافة login - pinia - vue3
image: vue3-auth_1_nkirtr
subImage: sub_ar_vue_login_ns62cg
id: 19
category: vue
description: ازاي تعمل صفحة دخول باستخدام Vue3 + Pinia
---
## الخطوة 1 : انشئ تطبيق فيو 3

```javascript
// With vue cli
vue create login
```
Choose Vuex-Router-3.x
> كدا مبروك عليك حملت فيو مع جافاسكريبت
## الخطوة 2 - تحميل الأضافات

```javascript
npm i axios cors vuex pinia
```
> ملحوظة : بعد متحمل كل ده يا زعيم لازم تشغلو مع ال app.use("plugin")
```javascript
// Here src/main.ts
import { createApp } from  'vue'
import { createPinia } from  'pinia'
import  App  from  './App.vue'
import  router  from  './router'

const  app  =  createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
```
## الخطوة 3 - ضيف فايل في ال ستور

src/stores/auth.js
```javascript
import { defineStore } from  "pinia";
import  axios  from  "axios";

export  const  useAuthStore  =  defineStore("auth", {

state: () => ({
token:  null  ||  localStorage.getItem("token"),
didLogOut:  false ,
error:  null,
}),
mutations: {
setAdmin(state, payload) {
state.token  =  payload.tenant_id;
state.didLogOut  =  false;
},
setError(state, payload) {
state.error  =  payload;
},
},
getters: {
isAuthenticated(state) {
return  state.token  !==  null;
},
getErrorMessage(state) {
return  state.error;
},
},
actions: {
async  login(data) {
const  response  =  await  axios.post("your Rest API", {
login:  data.email,
password:  data.password,
});
if (response.data.status  ===  200  &&  response.data.message  ===  "success") {
let  dataResponse  =  response.data.data;
localStorage.setItem("lang", dataResponse.local);
localStorage.setItem("token", dataResponse.token);
commit("setAdmin", {
idToken:  dataResponse.token,
});
commit("setError", null);
// localStorage.setItem("token", response.data.idToken);
} else {
commit("setError", response.data.message);
console.log("setError", response.data.status);
}
},
},
});
```
## الخطوة 4 - صفحة الدخول

src/views/login.vue
```javascript
<script  setup>
import { ref } from  "vue";
import { useAuthStore } from  "../stores/auth";

const  authStore  =  useAuthStore();
const  form  =  ref({
email:  "",
password:  "",
});
</script>

<template>
<form @submit.prevent="authStore.login(form)"  class="form">
	<input  v-model="form.email"  type="email"  placeholder="email"  name="email"  id="email"  autofocus  autocomplete="off"  />
	<input  v-model="form.password"  type="password"  placeholder="password"  autocomplete="off"  name="password"  id="password"  />
	<button  type="submit">sign in</button>
</form>
</template>
```
> كدا مبروك عليك صفحة الدخول جاهزة واول ما تدوس علي sign in
> هيحطلك الداتا في ال localstorage 

*\- لينكات مفيدة -*

<cite><a target="_blank" style="color: #0d6efd;" href="https://pinia.vuejs.org/core-concepts/">Pinia Core Concepts</a></cite>
