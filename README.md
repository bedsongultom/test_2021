# test_2021

Setting up an Express.js server

## first step
 To set up a Express.js app server, create a directory for the project

 mkdir test_2021
 cd test_2021
  


## second step
We are going to install body-parser cors express pg pg-hstore sequelize.

npm i body-parser cors express pg pg-hstore sequelize



 ## SCREENSHOOT
 [x] tasks is table
 
<img src="https://github.com/bedsongultom/test_2021/blob/master/images/tasks.png" width="800" height="500"> 

[x] users is table

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/users.png" width="800" height="500">

[x] view_users_tasks is view

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/view.png" width="800" height="500">



<img src="https://github.com/bedsongultom/test_2021/blob/master/images/api_users.png" width="800" height="500">

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/post_assign.png" width="800" height="500">

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/delete_ussign.png" width="800" height="500">

<img src="https://github.com/bedsongultom/test_2021/blob/master/images/common.png" width="800" height="500">






``` 
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
     
     


