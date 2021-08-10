# Backend-list

BackEnd to list products according to their relevance

## Project Structure
```
    |-data
        |-77f7e692-73f3-4676-a4ce-8576dd99ca0c.json
        |-26029c20-0eb4-43b1-b8ba-871384052fc7.json
    |-Responses
        |-response.http
        |-response.json
    |-src
        |-api
            |-api.js
        |-controller
            |-index.controller.js
        |-libs
            |-createProducts.js
            |-functions.js
        |-models
            |-products.js
        |-routes
            |-index.routes.js
        |-app.js
        |-index.js
    |-.babelrc
    |-package-lock.json
    |-package.json
    |-README.md

    8 directories, 16 files
```

## Clone the project and run
<!-- clone -->
```
$ git clone https://github.com/jcamilofarfan/Backend-list.git
cd Backend-list
npm install

for production enviroments
 - npm run build
 - npm start

 or

for development enviroments
 - npm run dev
```

### Dependencies
>   "express"\
>    "node-fetch"
### devDependencies
>    "@babel/cli"\
>    "@babel/core"\
>    "@babel/node"\
>    "@babel/preset-env"\
>    "nodemon"
## Test

Api tested whith the VSCode REST Client in the file
 > Response/response.http





