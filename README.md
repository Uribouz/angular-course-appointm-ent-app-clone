#### Useful Link
##### Mock API in seconds !!!
- [https://mockoon.com/](https://mockoon.com/)

##### Material Angular Doc (CSS styles)
- [https://material.angular.io/components/card](https://material.angular.io/components/card)


##### Angular Dev Tools
= [Chrome Extension](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh?pli=1)


##### Angular Unit Testing

###### Unit Testing Tools

1) **Jasmine** framework for writing and organizing unit-test in a clean and readable format
2) **Karmar** framework to run tests and receive test reports

Both of them are automatically included when we create a new Angular project
**Spec** file -> Test Specification


###### Step in writing Unit-test
1) writing test suites (collection of test cases)
2) defining specs (individual test case within suites)
3) making assertions (checking if a particular condition is met)

```javascript
import {AppComponent} from './app.component';
describe('AppComponent', () => {
    it('should have a defined title', () => {
        const component = new AppComponent();
        expect(component.title).toBeDefined();
    })
})
```

###### Command to run
Starts the **Karma** test runner and run all unit tests in the project
```bash
$ ng test
```


##### Angular Signals
Why using it 
- Because of 'Change Detection' (eg. OnClick, OnChange) cam be expensive (events fires top-down from parents to every child component).
- Angular Signals Tells angular exactly where changes are happening
- Angular Signals is A clean reactive alternative/extension to observable
- Great for reactive UI parts

###### Angular Observable VS Angular Signals
- Use 'Observable' when handling http request or async operations.
- Use 'Signal' when handling reactive UI

###### How it works
1. Declare Signal
```typescript
DarMode Signal(string)
```
2. When signal value change
-> Update consumers
    -> Run Effect 
    or
    -> Re-render UI
    or both

###### Computed Signal
**Is 'Read-Only'**

1. Declare Computed Signal
```typescript
Price;
Signal Quantity;
Computed Signal = Price * Quantity(S);
```
2. When Signal Quantity value change
-> Update consumers
    -> Run Effect
    or
    -> Re-render UI 
        -> Re calculaed 'Computed Signal' (Price * Quantity(S));
        and update the value of the 'Computed Signal'