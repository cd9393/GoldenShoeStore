CREATE DATABASE golden_shoe_db;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT  gen_random_uuid(),
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    user_email varchar(250) NOT NULL,
    user_password varchar(250) NOT NULL
);

INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ('craig', 'dunlop', 'test@gmail.com', 'test12345');

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    user_id uuid,
    status varchar(50),
    created_at timestamp,
    last_updated timestamp
);

INSERT INTO orders (user_id, status, created_at, last_updated) VALUES ('dc2be86c-27f2-434e-a694-f342a8f78f0f', 'Processing', '2022-07-31T14:30:00.000', '2022-07-31T11:00:00.000');
INSERT INTO orders (user_id, status, created_at, last_updated) VALUES ('dc2be86c-27f2-434e-a694-f342a8f78f0f', 'Out For Delivery', '2022-07-28T14:30:00.000', '2022-07-31T11:00:00.000');
INSERT INTO orders (user_id, status, created_at, last_updated) VALUES ('dc2be86c-27f2-434e-a694-f342a8f78f0f', 'Delivered', '2022-07-26T14:30:00.000', '2022-07-28T11:00:00.000');
INSERT INTO orders (user_id, status, created_at, last_updated) VALUES ('dc2be86c-27f2-434e-a694-f342a8f78f0f', 'Delivered', '2022-07-23T11:30:00.000', '2022-07-28T11:00:00.000');
INSERT INTO orders (user_id, status, created_at, last_updated) VALUES ('dc2be86c-27f2-434e-a694-f342a8f78f0f', 'Dispatched', '2022-07-26T14:30:00.000', '2022-07-28T11:00:00.000');

CREATE TABLE order_items(
    order_item_id SERIAL PRIMARY KEY,
    order_id int ,
    product_name varchar(250),
    product_size varchar(10),
    product_price decimal(10,2),
    product_quantity int
);

INSERT INTO order_items (order_id, product_name,product_size, product_price, product_quantity) VALUES (4, 'Nike Air Zoom','7', 269.99, 2);
INSERT INTO order_items (order_id, product_name,product_size, product_price, product_quantity) VALUES (4, 'Adidas Gazelle','8', 199.99, 1);
INSERT INTO order_items (order_id, product_name,product_size, product_price, product_quantity) VALUES (4, 'Crepe Protect','No Size', 10.99, 1);

CREATE TABLE mailing_list(
    contact_id SERIAL PRIMARY KEY,
    email varchar(250),
    consent varchar(1),
    consent_how varchar(250)
);
