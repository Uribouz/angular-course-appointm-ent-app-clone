
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

#### A reducer only take care of a segment of the app state (only its own data)
Eg. If you have two data 1) book 2) user 
-> You would need two separate reducer 'book reducer' and 'user reducer'.
-> but these two set of data are always inside the **"app.state"**
#### The way reducer works:
-> It copy current state segment 
-> Make some changes 
-> return the new state

## Setting Up application

### 1: Initiail project 'book-management'
```bash
$ ng new book-management
```

### 2: Install ngrx inside the project
```bash
$ npm install @ngrx/store@16.2 @ngrx/effects@16.2
```

### 3: create interface models/book
```bash
$ ng generate interface models/book
```


### 5: create interface app.state
```bash
$ ng generate interface app.state
```

### 6: Create component book-list
```bash
$ ng g component book-lis
```


## Note:
##### 1) Observable variable name convention '$'
```typescript
  books$: Observable<Book[]>;
```