# test_2021
This is an application about api crud with nodejs, express, sequalize(ORM) and ansyc/await + PostgreSQL database.

Setting up an Express.js server

## first step
 To set up a Express.js app server, create a directory for the project

 mkdir test_2021
 cd test_2021
  


## second step
We are going to install body-parser cors express pg pg-hstore sequelize.

npm install body-parser cors express pg pg-hstore sequelize
and 
npm init -y or npm init 



 ## SCREENSHOOT
 * [x] tasks is table
 
<img src="https://github.com/bedsongultom/test_2021/blob/master/images/tasks.png" width="800" height="500"> 

* [x] users is table

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/users.png" width="800" height="500">

* [x] view_users_tasks is view

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/view.png" width="800" height="500">

* [x] to run node server.js

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/noderun.png" width="800" height="500">


* [x] POST /api/users https://localhost:3000/api/users

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/api_users.png" width="800" height="500">

* [x] POST /api/assign https://localhost:3000/api/assign

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/post_assign.png" width="800" height="500">

* [x] DELETE /api/unassign https://localhost:3000/api/unassign

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/delete_ussign.png" width="800" height="500">

* [x] GET /api/tasks/common  https://localhost:3000/api/tasks/common

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/common.png" width="800" height="500">


## How to test
```

git clone https://github.com/bedsongultom/test_2021.git
or 
git clone git@github.com:bedsongultom/test_2021.git

C:\Program Files\PostgreSQL\9.6\bin>psql -U postgres
Password for user postgres:
psql (9.6.5)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=#



CREATE DATABASE test2012db;

CREATE TABLE tasks
(
    tasks_id SERIAL,
    tasks character varying(30),
    users_id integer
)

CREATE TABLE users
(
    users_id SERIAL,
    users character varying(30)
    
)

CREATE OR REPLACE VIEW public.view_users_tasks AS
 SELECT tasks.tasks_id,
    tasks.tasks,
    tasks.users_id,
    users.users
   FROM tasks
     JOIN users ON tasks.users_id = users.users_id;
     
     


