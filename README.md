# Passage Example Angular App

This example application uses the Passage Element in a Angular application to authenticate users using biometrics or magic links. The server uses the 
[Passage Node.js SDK](https://www.npmjs.com/package/@passageidentity/passage-node) to verify users on authenticated endpoints. To run this example application, follow the instructions below to install and start the 
frontend and backend server.

## Configure Your Environment Variables

1. In the backend folder, copy the EXAMPLE.env file to your own .env file.
1. In the frontend folder open environment.ts to configure the Passage App ID.
1. Replace the example variables with your own Passage App ID and API Key. You can get these from the [Passage Console](https://console.passage.id).

## Building the Server

Navigate to the backend folder and do the following:

Install dependencies
```bash
npm install
```

Start the server in development mode
```bash
npm run start
```

The server will run on http://localhost:7001.


## Building the Client

Navigate to the frontend folder and do the following:

Install dependencies
```bash
npm install
```

Start the client in development mode
```bash
npm run start
```

The client will run on http://localhost:4200, which you can navigate to in your browser.

## Authenticate Requests With Passage

Navigate to [http://localhost:4200](http://localhost:4200) and see what it's like authenticating users using Passage with Angular and Express.js!

# Using Passage with Angular

## Importing and Using the Passage-Auth Custom Element
The easiest way to add authentication to a web frontend is with a Passage Auth custom element. First you'll need to install the [passage-auth](https://www.npmjs.com/package/@passageidentity/passage-auth) package from npm:
```
npm i --save @passageidentity/passage-auth
```
Then import the package in the module where you intend to use the custom element. In an Angular application this can be done at the application level, as in this example in [`app.module.ts`](https://github.com/passageidentity/example-angular/blob/main/frontend/src/app/app.module.ts) or in a sub-module that contains the login/registration page.
```
import '@passageidentity/passage-auth'
```
Importing this script will register the Passage custom element for use in your Angular components. For more information about custom elements refer to the [online documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

It's then just a matter of embedding the passage-auth element into your component template that will handle login. This is done in this example in [frontend/src/views/Home/home.component.html](https://github.com/passageidentity/example-angular/blob/main/frontend/src/views/Home/home.component.html):
```html
<div class="authContainer">
  <passage-auth [appId]="appId"></passage-auth>
</div>
```

## Configuring Angular to Recognize Custom Elements
For Angular to recongize a non-Angular component tag as a custom element the Angular module that uses the custom element must be configured with the custom element schema. This example only contains a single app module so the custom element schema is added to [app.module.ts](https://github.com/passageidentity/example-angular/blob/main/frontend/src/app/app.module.ts):
```javascript
@NgModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  ...
})
export class AppModule { }
```

## Getting Authentication Status and User Information
After the user has logged in with Passage, all requests to your backend need to be authenticated using the JWT provided by Passage. In this example, we set the JWT in an Authorization header to our API server. 

This project uses a simple [Express](https://expressjs.com/) backend and the [Passage Node.js SDK](https://www.npmjs.com/package/@passageidentity/passage-node) to authenticate requests and retrieve user data for your application. You can see how that runs in the [/backend](https://github.com/passageidentity/example-angular/tree/main/backend) folder of this repository.

This example handles communication with the backend API in the ngOnInit lifecyle method of [frontend/src/views/Dashboard/dashboard.component.ts](https://github.com/passageidentity/example-angular/blob/main/frontend/src/views/Dashboard/dashboard.component.ts).