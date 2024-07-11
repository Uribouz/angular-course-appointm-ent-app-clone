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