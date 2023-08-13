CREATE DOMAIN status_enum AS TEXT
   CHECK (VALUE IN ('created', 'doing', 'done', 'deleted'));

create table todos (
	id serial primary key,
	name varchar(255) not null,
	status status_enum not null,
	created date not null
);