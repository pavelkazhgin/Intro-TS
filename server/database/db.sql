CREATE DATABASE testtask;



\c testtask;

CREATE TABLE binds (
    id SERIAL PRIMARY KEY,
    currency text NOT NULL,
    email text NOT NULL,
    sum integer NOT NULL, 
    course integer NOT NULL,
);

INSERT INTO binds (currency, email, sum, course)
    VALUES ('bitcoin', 'trader@binance.com', 50, 20000),
    ('matic', 'trader2@binance.com', 100, 2);

select * from binds;
