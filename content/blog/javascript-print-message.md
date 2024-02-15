---
createdAt: 2024-02-15
slug: javascript-print-message
title: مشروع طباعة رسالة بأستخدام JavaScript
image: print-message_aefwwu
subImage: sub_message_print_movhav
id: 20
category: javascript
description: مشروع طباعة رسالة بأستخدام JavaScript
---
## ت﻿عريف المشروع :

ا﻿لمشروع سهل وبسيط هنكتب رسالة في input وبعدين لما ندوس create يطبع الرسالة ونقدر نحط اكتر من رسالة -بطريقتين في جافاسكريبت : Append Child & inner htm

#### **أ﻿ولا HTML :**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Element</title>
</head>
<body>
    <div class="create_element">
        <input type="text" id="input">
        <button>Create</button>

        <div class="output"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

> كدا احنا عملنا المدخلات والزورار وكمان المخرجات

#### **ثانيا CSS :**

```css
.create_element {
    width: 100%;
    height: 100vh;
    background-color: #3fbbff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.create_element input {
    padding: 15px;
    width: 80%;
}

.create_element button {
    padding: 10px;
    margin: 5px;
    cursor: pointer;
}

.create_element output {
    margin: 5px;
    border: 5px solid black;
    width: 80%;
    padding: 20px;
}
```

> و﻿كدا مبروك عليك عملنا الديزاين

#### **ثالثا التفكير JavaScript :**

```javascript
// اولا كل المتغيرات الي هنستخدمها
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let output = document.querySelector(".output")
```

## ا﻿ول طريقة Append Child :

```javascript
// Append Child
btn.addEventListener("click", function(){
    let value = input.value
    let createEle = document.createElement("div")
    createEle.innerHtml = value
    input.appendChild(createEle)
})
```

## ثاني طريقة Inner HTML :

```javascript
// Inner HTML
btn.addEventListener("click", function(){
    let value = input.value
    if(value != ""){
        output.innerHTML += `<div>${value}</div>`
    }
})
```

و﻿بكدا انت عملت مشروع طباعة رسالة بطريقتين في جافاسكريبت.