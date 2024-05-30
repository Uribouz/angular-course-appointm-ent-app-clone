## Step 1: Init applcaition

### 1) Create project book-management-system

```bash
$ ng new book-management-system
```

### 2) Navigate to the project directory:

```bash
$ cd book-management-system
```

## Step 2: Create a Book Model


### 1. Create a models folder inside the src/app directory

### 2. Inside the models folder, create a file named book.model.ts

### 3. Define an interface for a book with the following properties:

```typescript
id: number
title: string
author: string
```

```bash
$ ng g interface models/book.model
```


## Step 3: Create the Book Component

Generate a new component named book:
```bash
$ ng generate component book
```

## Step 4: Design the Book Form

### 1. Inside the book.component.html, create a form with fields for the title and author.

### 2. Use Angular's two-way data binding to bind the form fields to properties in your component's class.

### 3. Add a button that will be used to add the book. Label it "Add Book".