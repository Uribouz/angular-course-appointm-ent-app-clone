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