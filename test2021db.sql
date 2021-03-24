--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.5
-- Dumped by pg_dump version 9.6.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tasks (
    tasks_id integer NOT NULL,
    tasks character varying(30),
    users_id integer
);


ALTER TABLE tasks OWNER TO postgres;

--
-- Name: tasks_tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tasks_tasks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tasks_tasks_id_seq OWNER TO postgres;

--
-- Name: tasks_tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE tasks_tasks_id_seq OWNED BY tasks.tasks_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    users_id integer NOT NULL,
    users character varying(30),
    createdat text,
    updatedat text
);


ALTER TABLE users OWNER TO postgres;

--
-- Name: users_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_users_id_seq OWNER TO postgres;

--
-- Name: users_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_users_id_seq OWNED BY users.users_id;


--
-- Name: view_users_tasks; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW view_users_tasks AS
 SELECT tasks.tasks_id,
    tasks.tasks,
    tasks.users_id,
    users.users
   FROM (tasks
     JOIN users ON ((tasks.users_id = users.users_id)));


ALTER TABLE view_users_tasks OWNER TO postgres;

--
-- Name: tasks tasks_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tasks ALTER COLUMN tasks_id SET DEFAULT nextval('tasks_tasks_id_seq'::regclass);


--
-- Name: users users_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN users_id SET DEFAULT nextval('users_users_id_seq'::regclass);


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY tasks (tasks_id, tasks, users_id) FROM stdin;
1	Buy eggs	1
2	Buy milk	1
3	Buy milk	2
4	Buy sugar	4
\.


--
-- Name: tasks_tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tasks_tasks_id_seq', 4, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (users_id, users, createdat, updatedat) FROM stdin;
1	example1@email.com	2021-03-24 14:26:51.947281+00	2021-03-24 14:26:51.947281+00
2	example2@email.com	2021-03-24 14:38:39.876 +00:00	2021-03-24 14:38:39.876 +00:00
4	example3@email.com	2021-03-24 17:28:42.255 +00:00	2021-03-24 17:28:42.255 +00:00
\.


--
-- Name: users_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_users_id_seq', 4, true);


--
-- PostgreSQL database dump complete
--

