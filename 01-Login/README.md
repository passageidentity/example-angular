# Passage Example Angular App

This example application uses the Passage Element in a Angular application to authenticate users using biometrics or magic links.

## Configure Your Environment Variables

1. Open environments/environment.ts to configure the Passage App ID.
2. Replace the example variables with your own Passage App ID. You can get yours by creating an app in the [Passage Console](https://console.passage.id).


## Build and Run

Install dependencies
```bash
npm install
```

Start the client in development mode
```bash
npm run start
```

The app will run on http://localhost:4200, which you can navigate to in your browser.

## Authenticate Requests With Passage

Navigate to [http://localhost:4200](http://localhost:4200) and see what it's like authenticating users using Passage with Angular!

# Using Passage with Angular

## Importing and Using the Passage-Auth Custom Element
The easiest way to add authentication to a web frontend is with a Passage Auth custom element. First you'll need to install the [passage-elements](https://www.npmjs.com/package/@passageidentity/passage-elements) package from npm:
```
npm i --save @passageidentity/passage-elements
```
Then import the package in the module where you intend to use the custom element. In an Angular application this can be done at the application level, as in this example in app.module.ts or in a sub-module that contains the login/registration page.
```
import '@passageidentity/passage-elements/passage-auth'
```
Importing this script will register the Passage custom element for use in your Angular components. For more information about custom elements refer to the [online documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

It's then just a matter of embedding the passage-auth element into your component template that will handle login. This is done in this example in home.component.html:
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

