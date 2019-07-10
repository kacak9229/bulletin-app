# Bulletin Board application

### Tech Stack - Node.js + React + Redux + PostgreSQL + AWS S3 + Ant Design

##### There are two folders one is bulletin-api and the other one is client-react

1. bulletin-api -> Node.js + Express + Sequelize
2. client-react -> React + Redux using the create-react-app

Steps to run the application locally

#### 1. bulletin-api (Backend)

1. `cd bulletin-api`
2. `npm install`
3. `node server.js`

#### 1. client-react (Frontend)

1. `cd client`
2. `npm install`
3. `npm start`

- The api is running on port 3000 -> `http://localhost:3000`
- The client is running on port 300x -> `http://localhost:300x`

### List of the APIS

```
    1. /api/posts - GET
    2. /api/posts - POST
    3. /api/posts/:post_id - GET
    4. /api/posts/:post_id/comments - POST
    5. /api/posts/:post_id/comments - POST
    6. /api/upload - POST

```

### How does I store the pictures?

1. AWS S3 bucket is being used
2. User uploads an image
3. S3 process it and return the URL
4. The URL then will be stored in PostgreSQL using Sequelize.

### What database is being used?

1. PostgreSQL + Sequelize ORM for Node.js
2. Using AWS RDS for production
