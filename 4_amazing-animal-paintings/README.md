### 1 Init applcaition
```bash
$ ng new amazing-animal-paintings
```

### 2 new product module.
```bash
$ ng g m product
```

### 3 new product service
```bash
$ ng g s product/product
```

### 4 new product-list component
```bash
$ ng g c product/product-list
```

### 5 new product class
```bash
$ ng g class models/product
```
### 6 generate envionments
```bash
$ ng g environments
```
### 7 run application with setting configuration devlopment.
```bash
$ ng serve -o --configuration=development
```

### 8 Go to this following website and use an example source code in out product-list.component.html
[material angular] (https://material.angular.io/components/card/examples)

### 9 To apply angula material theme

##### Add following line to file 'src/style.css'
```css
@import "@angular/material/prebuilt-themes/indigo-pink.css";
```
##### "@angular/material/prebuilt-themes/indigo-pink.css" is getting from "angular.json" under "styles"
```json
 "styles": [
              "@angular/material/prebuilt-themes/indigo-pink.css",
],
```

### 10 Add angular flex layout
```bash
$ npm i @angular/flex-layout
```

### 11 Init cart module, service, and component
```bash
$ ng g module cart
$ ng g service cart/cart
$ ng g component cart/cart-view
```

### 12 NgRx: Building reactive applications with a single state.
##### Store: 
Hold the applcation state (immutable cannot get changed directly)
##### **Actions**: 
Events that modify state in the store.
##### Reducers:
Functions that take **actions** and modify the state base on the action type.
##### Effects: 
Handle asynchronous operations (like fetching data from a server) and then trigger new **actions**.

#### One-way data flow
##### Actions -> Reducers -> Updated State -> Selectors share updates
The updated state is automatically passed to the components via **selectors**(component subscribe to the selector)

