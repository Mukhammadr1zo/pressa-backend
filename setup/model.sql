drop database if exists pressa;
create database pressa;
\c pressa;

create extension pgcrypto;

create type studyType as enum('online', 'offline');
create type personType as enum('yuridik', 'jismoniy');
create type checkType  as enum('verified', 'unverified', 'cancelled');

drop table if exists admins;
create table admins(
    user_id serial primary key,
    username varchar(64) not null,
    password varchar(60) not null
);

insert into admins(username, password) values ('Muhammadrizo', crypt('7397', gen_salt('bf')));
insert into admins(username, password) values ('Bobir', crypt('1122', gen_salt('bf')));

create table categories(
    category_id serial primary key,
    category_name varchar(64) not null
);

insert into categories(category_name) values ('IT'), ('Biznes');

create table subCategories(
    subCategory_id serial primary key,
    subCategory_name varchar(64) not null,
    category_id int references categories(category_id)
);

insert into subCategories(subCategory_name, category_id) values ('Frontend Developer', 1), ('Backend Developer', 1), ('UX/UI Dizayner', 1), ('Biznes Analitik', 2), ('Tadbirkor', 2);

drop table if exists publishers;
create table publishers(
    publisher_id serial primary key,
    publisher_name varchar(64) not null,
    publisher_job int references subCategories(subCategory_id),
    publisher_date date not null,
    publisher_time time not null,
    publisher_type studyType not null,
    publisher_link varchar(64),
    publisher_title varchar(128) not null,
    publisher_description text not null,
    publisher_text text,
    publisher_photos text,
    publisher_verify varchar(50) default 'unverified',
    contact1 text,
    contact2 text
);

create index verify_ind on publishers (publisher_verify) where publisher_verify = 'verified';

explain select * from publishers where publisher_verify = 'verified';