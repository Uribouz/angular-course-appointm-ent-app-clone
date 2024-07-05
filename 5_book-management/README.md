
## Learning
### NgRx: Building reactive applications with a single state.
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


## Setting Up application

### 1: Initiail project 'book-management'
```bash
$ ng new book-management
```

### 2: Install ngrx inside the project
```bash
$ npm install @ngrx/store@16.2 @ngrx/effects@16.2
```
