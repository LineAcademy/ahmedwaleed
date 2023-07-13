---
createdAt: 2023-07-04
slug: add-cypress-to-react-js
title: Add a test to the React application using Cypress 2023
image: blogen_3_p8mk5s
subImage: sub-add-cypress-react
id: 1
category: testing
description: Add a test to React application using Cypress 2023 - Ahmed Walid
  articles on web programming - Professional web development with Ahmed Walid
---
## Step 1: Installation

\- We will download Cypress using Npm / Yarn

```javascript
// With NPM
npm install cypress --save-dev

// With Yarn
yarn add cypress -D
```

> So you downloaded Cypress at the level of the whole project

## Step 2: Open Cypress

```javascript
npx cypress open
```

> This command will load all required project folders and then open the welcome window

## Step 3: Choose The Test Type

The welcome window shows two different types of tests, Extensive Test and Component Test In this case we do Extensive User Interface Testing so you can choose the test type as Final Tests

![Choose the type of testing - master programming with Ahmed Walid - cypress react - testing](https://res.cloudinary.com/drcfigqqr/image/upload/v1688467522/Choose-Test-Type-to-test-React-App-in-Cypress_wopbgv.webp "Choose the type of testing in Cypress")

## Step 4: Review The Configuration File

A window will appear with some files that Cypress will make so that you can use the type of test we chose, review it and follow-up

![Look in the configuration files - cypress react - testing](https://res.cloudinary.com/drcfigqqr/image/upload/v1688467528/Review-the-Configuration-File-to-test-React-in-Cypress_qej3gu.webp "Look in the configuration files - cypress react - testing")



## Step 5: Choose Your Browser

Cypress collects information from all browsers installed on your system. If it supports your browser type and browser version, it lists in the Choose a browser section. For simplicity, let's select the Chrome browser and click on Start End to end the test with Chrome.

![chose the browser - cypress reactive - testing](https://res.cloudinary.com/drcfigqqr/image/upload/v1688467529/Choose-Browser-to-test-React-in-Cypress_amlzye.webp "chose the browser - cypress reactive - testing")

## Step 6: Create The Initial Testing Window

1﻿- Click on Create New Spec

2﻿- Type any name - for example: react.demo.cy.js

3﻿- Click OK and then run the test

![We will create the initial test window - cypress react - testing](https://res.cloudinary.com/drcfigqqr/image/upload/v1688467526/Create-first-Spec-Window-to-test-React-in-Cypress_nl91ab.webp "We will create the initial test window - cypress react - testing")

*Note: By default, it adds the test script example, and we can modify it later according to the use case or test scenario.*

That's it, you are now able to do tests on your mind at your convenience, go to the site or watch videos for education

***\- Useful Links -***

<cite><a target="_blank" style="color: #0d6efd;" href="https://docs.cypress.io/guides/component-testing/react/quickstart">React Quickstart | Cypress</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://docs.cypress.io/guides/component-testing/react/examples">Components Test | Cypress</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=X6CoUHlnuoY">Cypress Unit Testing For React Developers (Crash course)</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=V-F80UzZAmA">Cypress Component vs E2E Testing | by Mark Noonan</a></cite><br>
                        <cite><a target="_blank" style="color: #0d6efd;" href="https://www.youtube.com/watch?v=Y-7WS2ykQMI">Instagram Clone - React & Cypress End to End Testing</a></cite><br>