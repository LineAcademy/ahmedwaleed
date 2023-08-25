---
createdAt: 2023-08-25
slug: vue-3-pinia-auth-login
title: Add login - pinia - vue3
image: vue3-auth_1_nkirtr
subImage: sub_en_vue_login_jnbe22
id: 19
category: vue
description: Vue3 + Pinia authentication login example
---
## Add login - pinia - vue3
> Congratulations, you downloaded View with Javascript

## Step 2 - Download the plugins
```
npm i axios cors vuex pinia
```

> Note: After enduring all this, chief, you must turn it on with the app.use("plugin")

```
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

## Step 3 - Add a file to the 

src/stores/auth.js

```
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

## Step 4 - Login 

src/views/login.vue

```
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

> Congratulations, the login page is ready, and as soon as you click on sign in, the data will put you in the localstorage

_- Useful Links -_

<cite><a target="_blank" style="color: #0d6efd;" href="https://pinia.vuejs.org/core-concepts/">Pinia Core Concepts</a></cite>
