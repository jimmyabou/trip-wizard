INSERT INTO users (username, password, email, address, phone_number)
VALUES 
  ('john_doe', '$2a$10$NpHHzDL/qk3B08qbhUPf4eq21IO7rsfg/zxFngtLbw7oc8527nbNa', 'bryan@example.com', '123 Main St', '555-123-4567'),
  ('jane_smith', '$2a$10$CyDsHi0WmR2PBzMs1iT3JeOTiirmhy25RUW25IhosGWeByq9ijXze', 'jane@example.com', '456 Oak St', '987-654-3210'),
  ('mike_johnson', '$2a$10$4hG/UkS0jc/luOKveLb3t.rzo00UcPGVEQ1KTbEeMr/BAKty9SDPS', 'mike@example.com', '789 Elm St', '555-555-5555'),
  ('sarah_wilson', '$2a$10$NpHHzDL/qk3B08qbhUPf4eq21IO7rsfg/zxFngtLbw7oc8527nbNa', 'sarah@example.com', '123 Maple St', '111-222-3333'),
  ('alex_davis', '$2a$10$CyDsHi0WmR2PBzMs1iT3JeOTiirmhy25RUW25IhosGWeByq9ijXze', 'alex@example.com', '456 Pine St', '444-555-6666'),
  ('lisa_smith', '$2a$10$4hG/UkS0jc/luOKveLb3t.rzo00UcPGVEQ1KTbEeMr/BAKty9SDPS', 'lisa@example.com', '789 Oak St', '777-888-9999'),
  ('test', '$2b$10$HXW.LgKfwjoD2pPJz7AlVuNcfE15K5pqglT/Nl5vw4IjN4X2BhIhO', 'test@example.com', '789 Oak St', '777-888-9999');

INSERT INTO favorite_attractions (user_id, attraction_id)
VALUES
  (1, 2),
  (1, 5),
  (2, 1),
  (2, 3),
  (3, 4),
  (7,1),
  (7,2);

-- Packages
INSERT INTO packages (user_id, name)
VALUES
  (1, 'Paris Adventure'),
  (2, 'Beach Getaway'),
  (3, 'Germany Trip'),
  (4, 'Italy Tour'),
  (5, 'Beirut Excursion'),
  (6, 'Beach Escape'),
  (7, 'Mountain Retreat'),
  (7, 'City Explorer');

-- Days
INSERT INTO days (package_id, date, day_title, day_description)
VALUES
  (1, '2022-07-25', 'Exploring the City', 'Visit popular landmarks and attractions in the city.'),
  (1, '2022-07-26', 'Outdoor Adventure', 'Embark on an exciting outdoor adventure and enjoy nature activities.'),
  (2, '2022-08-20', 'Beach Relaxation', 'Relax and unwind on the beautiful sandy beaches.'),
  (2, '2022-08-21', 'Cultural Exploration', 'Immerse yourself in the local culture and traditions.'),
  (3, '2022-09-10', 'Historical Sites', 'Discover the rich history and architecture of Germany.'),
  (3, '2022-09-11', 'Culinary Delights', 'Indulge in delicious German cuisine and traditional dishes.'),
  (4, '2022-09-05', 'Art and Culture', 'Explore the artistic heritage and cultural treasures of Italy.'),
  (4, '2022-09-06', 'Scenic Landscapes', 'Marvel at the breathtaking landscapes and natural beauty of Italy.'),
  (5, '2022-09-15', 'City Highlights', 'Experience the vibrant city life and attractions of Beirut.'),
  (5, '2022-09-16', 'Local Cuisine', 'Taste the flavors of Lebanese cuisine and savor traditional dishes.'),
  (6, '2022-08-25', 'Beach Retreat', 'Enjoy a relaxing beach getaway and soak up the sun and sea.'),
  (6, '2022-08-26', 'Water Sports', 'Try thrilling water sports activities and enjoy beachside fun.'),
  (7, '2022-10-05', 'Mountain Hiking', 'Embark on a challenging hike and explore the stunning mountain trails.'),
  (7, '2022-10-06', 'Nature Photography', 'Capture breathtaking photos of the picturesque mountain landscapes.'),
  (8, '2022-10-15', 'City Landmarks', 'Discover iconic landmarks and attractions in the bustling city.'),
  (8, '2022-10-16', 'Street Food Tour', 'Savor the local street food and culinary delights of the city.');

-- Package Attractions
INSERT INTO day_attractions (attraction_id, day_id)
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
