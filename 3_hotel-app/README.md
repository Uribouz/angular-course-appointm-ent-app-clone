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