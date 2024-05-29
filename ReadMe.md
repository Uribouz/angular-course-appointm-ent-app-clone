## 1 Init applcaition

```bash
$ ng new appointment-app
```

## 2 Change directory into new Project

```bash
$ cd appointment-app
code .
```

## 3 Running project
```bash
ng serve -o
```


## 4 Config files
### angular.json
- contains the configuration of our project on each environment we gotta run
### package.json
- contains our dependencies (3rd party libraries)

## 5 Starter files in the project
### File: src/index.html
Angular inject only one component to the application 'app-root'
"<app-root></app-root>"

### File: src/app/app.component.ts
- selector: name of the component (to be use explicitly)
- templateUrl: content of the component template.
- styleUrls: styles css of the component.

## 6 Create new component 'appointment-list'
```bash
$ ng g component appointment-list
```

## 7 Typescript tend to use 'Type' in initalization of variables
- Example: var myAge: number = 20;

## 8 One-way data binding syntax (Use in .html files)
### MyComponent.ts
```typescript
export class AppointmentListComponent {
    myVariableName: string = 'Take a dog for a walk';
}
```
### MyComponent.html
```html
- {{ myVariableName}}
```
#### Result will show 'Take a dog for a walk' on the screen.

## 9 Create interface 'models/appointment'
```bash
$ ng generate interface models/appointment
```
## 10 Two-way data binding syntax (Use in .html files)
### Import built-in library "FormsModule" ("https://angular.io/api/forms/FormsModule")
Import in "app.module.ts" and it also can be every module that got declared(will beused in "AppointmentListComponent")
### Usage Example:
#### MyModule.html
```html
<input [(ngModel)]="myNewTitle" placeholder="My description">
```
#### MyModule.ts
```typescript
export class MyModule {
  myNewTitle : string = "";
}
```
#### variable 'myNewTitle' is now "Two-way binding".

## 11 Event binding syntax ("https://angular.io/guide/event-binding")
### Usage Example:
#### MyModule.html
```html
<button (click)="myFunction()"> Add </button>
```
#### MyModule.ts
```typescript
export class MyModule {
  myFunction() {
    console.log('Hello World');
  }
}
```
#### ! When use click the button it will log 'Hello World' to the console.

## 12 Life Cycle Hooks
### ngOnInit() method, a function to run when the class is instantiated.

```typescript
export class MyClass implements OnInit{
  ngOnInit(): void {
    //! Implement your initialization here ...
    throw new Error('Method not implemented.');
  }
```

## 13 Bootstrap
Install bootstrap using command line

```bash
$ npm i bootstrap@5.3.3
```