INSERT INTO users (username, password, email, address, phone_number)
VALUES 
  ('john_doe', '$2a$10$NpHHzDL/qk3B08qbhUPf4eq21IO7rsfg/zxFngtLbw7oc8527nbNa', 'john@example.com', '123 Main St', '555-123-4567'),
  ('jane_smith', '$2a$10$CyDsHi0WmR2PBzMs1iT3JeOTiirmhy25RUW25IhosGWeByq9ijXze', 'jane@example.com', '456 Oak St', '987-654-3210'),
  ('mike_johnson', '$2a$10$4hG/UkS0jc/luOKveLb3t.rzo00UcPGVEQ1KTbEeMr/BAKty9SDPS', 'mike@example.com', '789 Elm St', '555-555-5555'),
  ('sarah_wilson', '$2a$10$NpHHzDL/qk3B08qbhUPf4eq21IO7rsfg/zxFngtLbw7oc8527nbNa', 'sarah@example.com', '123 Maple St', '111-222-3333'),
  ('alex_davis', '$2a$10$CyDsHi0WmR2PBzMs1iT3JeOTiirmhy25RUW25IhosGWeByq9ijXze', 'alex@example.com', '456 Pine St', '444-555-6666'),
  ('lisa_smith', '$2a$10$4hG/UkS0jc/luOKveLb3t.rzo00UcPGVEQ1KTbEeMr/BAKty9SDPS', 'lisa@example.com', '789 Oak St', '777-888-9999');

INSERT INTO favorite_attractions (user_id, attraction_id)
VALUES
  (1, 2),
  (1, 5),
  (2, 1),
  (2, 3),
  (3, 4);

-- Custom Packages
INSERT INTO packages (user_id, name, total_cost, total_days, created_at)
VALUES
  (1, 'Paris Adventure', 1500, 7, '2022-07-10'),
  (2, 'Beach Getaway', 2000, 5, '2022-08-15');

-- Days
INSERT INTO days (package_id, date)
VALUES
  (1, '2022-07-25'),
  (1, '2022-07-26'),
  (2, '2022-08-20'),
  (2, '2022-08-21');

-- Package Attractions
INSERT INTO package_attractions (attraction_id, day_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (5, 3),
  (6, 3),
  (7, 4),
  (8, 4);

-- Orders
INSERT INTO orders (user_id, order_date, total_amount)
VALUES
  (1, '2022-07-20', 500),
  (2, '2022-08-10', 800);

-- Line Items
INSERT INTO line_items (order_id, attraction_id, quantity, price, created_at, number_of_people, attendance_date)
VALUES
  (1, 1, 2, 100, '2022-07-20', 4, '2022-08-02'),
  (1, 2, 1, 50, '2022-07-20', 2, '2022-08-02'),
  (2, 3, 1, 150, '2022-08-10', 1, '2022-09-05'),
  (2, 4, 3, 100, '2022-08-10', 5, '2022-09-05');
