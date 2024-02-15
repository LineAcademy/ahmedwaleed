---
createdAt: 2024-02-15
slug: javascript-print-message
title: print a message Project using JavaScript
image: print-message-en_kywcjy
subImage: sub_message_print_en_szlww2
id: 20
category: javascript
description: Project to print a message using JavaScript
---
## Project definition :

The project is easy and simple. We will write a message in input, then when we click create, it prints the message and we can put more than one message - in two ways in JavaScript: Append Child & inner html

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

> Thus, we made the inputs, the visitors, and also the outputs

#### **Secondly CSS :**

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

> And congratulations on our design work

#### **Third, think about JavaScrip :**

```javascript
// First, all the variables that we will use
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let output = document.querySelector(".output")
```

## First method Append Child :

```javascript
// Append Child
btn.addEventListener("click", function(){
    let value = input.value
    let createEle = document.createElement("div")
    createEle.innerHtml = value
    input.appendChild(createEle)
})
```

## Second method Inner HTML :

```javascript
// Inner HTML
btn.addEventListener("click", function(){
    let value = input.value
    if(value != ""){
        output.innerHTML += `<div>${value}</div>`
    }
})
```

You just created a project to print a message in two ways in JavaScript.