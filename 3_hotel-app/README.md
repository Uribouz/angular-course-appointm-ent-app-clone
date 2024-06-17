## Step 1: Init application

#### 1) Create project hotel-app

```bash
$ ng new hotel-app
```

#### 2) Navigate to the project directory:

```bash
$ cd hotel-app
```

#### 3) Start the application

```bash
$ ng serve -o
```

#### 4) CRUD Operations 
- C reate
- R ead
- U pdate
- D elete

#### 5) Generate module "home"
``` bash
$ ng g m home
```

#### 6) Generate component "home" and attached it to module "home"
``` bash
$ ng g component home --module="home"
```

#### 7) Generate module "reservation"
``` bash
$ ng g m reservation
```

#### 8) Generate component "reservation-form" and attached it to module "reservation"
``` bash
$ ng g component reservation-form --module="reservation"

```

#### 9) Generate component "reservation-list" and attached it to module "reservation"
``` bash
$ ng g component reservation-list --module="reservation"
```

#### 10) Generate service "reservation" inside folder "reservation"
``` bash
$ ng g service reservation/reservation
```


#### 11) Generate interface "reservation" inside folder "models"
``` bash
$ ng g interface models/reservation
```

## 2) Implementing the Application

#### 1) add routing to the homepage
File "app-routing.module.ts"
Below variable is the variable used to routing the path to the component your want.

Example 1): Below will route the "root" ("localhost:4200/") of the application to the "HomeComponent"
```typescript
const routes: Routes = [
  {path: "", component: HomeComponent}
];
```
Example 2): Below will route the "/list" path  ("localhost:4200/list") of the application to the "ReservationListComponent"
```typescript
const routes: Routes = [
  {path: "list", component: ReservationListComponent},
];
```

#### 2) Add routing "new" to the button to make it go to the path we specified in "app-routing.module.ts"

File: xxx.component.html
```html
<div>
    <button [routerLink]="['/new']"> Create a new reservation</button>
</div>
```

To be able to use tag "[routerLink]"
##### 1) We need to import "RouterModule"
File: xxx.module.ts
```typescript
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    XXXComponent
  ],
  imports: [
    RouterModule
  ]
})
export class XXXModule { }
```

##### 2) Also import the module in file "app.module.ts"
File: app.module.ts
```typescript
import { XXXModule} from './xxx/xxx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    XXXModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### 3) Two types of "Form" Validation
##### 1) Reactive Form Validation
  - Validate Form in  TypeScript class
##### 2) Template-Driven Form Validation
  - Validate Form in HTML template

Using import "ReactiveFormsModule" in reservation.module.ts
```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
```

#### 4) Usage of "ng-template" with hashtag (#)

One can use ng-template to handle the state of the website when there is no data to be shown like below example.

```typescript
<ul *ngIf="reservations.length; else noReservation">
    Hello World 111
</ul>

<ng-template #noReservation>
   Hello World 222
</ng-template>
```
####  5) Using 'routerLink' to navigate to another route

##### 1) Add button event when clicked, it will navigate user to route '/edit'
File: reservation-list.component.html
```html
<button [routerLink]="['/edit', reservation.id]"> Edit </button>
```

##### 2) Setup global route to be know to the whole application.
File: app-routing.module.ts
```typescript
const routes: Routes = [
  {path: "edit/:id", component: ReservationFormComponent}
];
```

##### 3) Inject import of "RouterModule" to the componenet "ReservationListComponent"
File: reservation.module.ts
```typescript
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReservationListComponent
  ],
  imports: [
    RouterModule
  ]
})
export class ReservationModule { }

```

##### 4) Get current route parameter

For example: want to get value from the paramter 'id'
```typescript
    import { ActivatedRoute } from '@angular/router';

    constructor(private activatedRoute: ActivatedRoute) {}

    let id = this.activatedRoute.snapshot.paramMap.get('id')
```

##### 5) Using the Module in multiple components
File A.component.ts
```typescript
@Component({
  selector: 'my-component-A'
})
export class Component_A {

}
```

File: A.module.ts
```typescript
@NgModule({
  declarations: [
    Component_A
  ],
  imports: [
  ],
  exports: [
    Component_A
  ]
})
export class Module_A { }
```

File: B.module.ts
```typescript
import { Module_A } from '../A/A.module';
import { Component_B1 } from '../B_1/B_1.component';
import { Component_B2 } from '../B_1/B_2.component';
@NgModule({
  declarations: [
    Component_B1,
    Component_B2
  ],
  imports: [
    Module_A
  ]
})
export class Module_B { }
```

File: B_1.component.html
```html
<my-component-A></my-component-A>
```

File: B_2.component.html
```html
<my-component-A></my-component-A>
```