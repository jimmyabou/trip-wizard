DROP TABLE IF EXISTS favorite_attractions CASCADE;
DROP TABLE IF EXISTS line_items CASCADE;
DROP TABLE IF EXISTS package_attractions CASCADE;
DROP TABLE IF EXISTS days CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS custom_packages CASCADE;
DROP TABLE IF EXISTS attractions CASCADE;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar NOT NULL,
  password varchar NOT NULL,
  email varchar NOT NULL,
  address varchar NOT NULL,
  phone_number varchar NOT NULL
);

CREATE TABLE attractions (
  attraction_id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  description varchar NOT NULL,
  picture_link varchar NOT NULL,
  location varchar NOT NULL,
  category varchar NOT NULL,
  rating numeric NOT NULL,
  price integer NOT NULL,
  duration integer NOT NULL,
  featured boolean NOT NULL,
  booking_url text NOT NULL
);

CREATE TABLE favorite_attractions (
  user_id integer REFERENCES users (id) NOT NULL,
  attraction_id integer REFERENCES attractions (attraction_id) NOT NULL,
  PRIMARY KEY (user_id, attraction_id)
);

CREATE TABLE custom_packages (
  package_id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users (id) NOT NULL,
  name varchar NOT NULL,
  total_cost integer NOT NULL,
  total_days integer NOT NULL,
  created_at timestamp NOT NULL
);

CREATE TABLE package_attractions (
  attraction_id integer REFERENCES attractions (attraction_id) NOT NULL,
  day_id integer NOT NULL,
  PRIMARY KEY (attraction_id, day_id)
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users (id) NOT NULL,
  order_date timestamp NOT NULL,
  total_amount integer NOT NULL
);

CREATE TABLE line_items (
  lineitem_id SERIAL PRIMARY KEY,
  order_id integer REFERENCES orders (order_id) NOT NULL,
  attraction_id integer REFERENCES attractions (attraction_id) NOT NULL,
  quantity integer NOT NULL,
  price integer NOT NULL,
  created_at timestamp NOT NULL,
  number_of_people integer NOT NULL,
  attendance_date date NOT NULL
);

CREATE TABLE days (
  day_id SERIAL PRIMARY KEY,
  package_id integer REFERENCES custom_packages (package_id) NOT NULL,
  date date NOT NULL
);

-- ALTER TABLE "favorite_attractions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- ALTER TABLE "favorite_attractions" ADD FOREIGN KEY ("attraction_id") REFERENCES "attractions" ("attraction_id");

-- ALTER TABLE "custom_packages" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- ALTER TABLE "package_attractions" ADD FOREIGN KEY ("attraction_id") REFERENCES "attractions" ("attraction_id");

-- ALTER TABLE "package_attractions" ADD FOREIGN KEY ("day_id") REFERENCES "days" ("day_id");

-- ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- ALTER TABLE "line_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("order_id");

-- ALTER TABLE "line_items" ADD FOREIGN KEY ("attraction_id") REFERENCES "attractions" ("attraction_id");

-- ALTER TABLE "days" ADD FOREIGN KEY ("package_id") REFERENCES "custom_packages" ("package_id");
