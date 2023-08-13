CREATE IF EXISTS DATABASE todo;

CREATE DOMAIN status_enum AS TEXT
   CHECK (VALUE IN ('created', 'doing', 'done', 'deleted'));

CREATE TABLE todos (
	id serial primary key,
	name varchar(255) not null,
	status status_enum not null,
	created date not null
);

INSERT INTO tasks (name, status, created) VALUES ('Read my book', 'doing', CURRENT_DATE);
