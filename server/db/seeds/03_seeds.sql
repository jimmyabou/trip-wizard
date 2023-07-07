INSERT INTO users (username, password, email, address, phone_number)
VALUES 
  ('john_doe', 'password123', 'john@example.com', '123 Main St', '555-123-4567'),
  ('jane_smith', 'password456', 'jane@example.com', '456 Oak St', '987-654-3210'),
  ('mike_johnson', 'password789', 'mike@example.com', '789 Elm St', '555-555-5555'),
  ('sarah_wilson', 'password123', 'sarah@example.com', '123 Maple St', '111-222-3333'),
  ('alex_davis', 'password456', 'alex@example.com', '456 Pine St', '444-555-6666'),
  ('lisa_smith', 'password789', 'lisa@example.com', '789 Oak St', '777-888-9999');

INSERT INTO attractions (name, description, picture_link, location, category, rating, price, duration, featured, booking_url)
VALUES
  ('Eiffel Tower', 'Iconic landmark and symbol of Paris', 'https://example.com/eiffel_tower.jpg', 'Paris, France', 'Landmarks', 4.5, 10, 2.5, true, 'http://www.partner.viator.com/eiffel_tower'),
  ('Louvre Museum', 'World-famous art museum housing Mona Lisa', 'https://example.com/louvre_museum.jpg', 'Paris, France', 'Museums', 4.2, 15, 3.5, false, 'http://www.partner.viator.com/louvre_museum'),
  ('Notre-Dame Cathedral', 'Gothic masterpiece and religious landmark', 'https://example.com/notre_dame.jpg', 'Paris, France', 'Religious Sites', 4.8, 12, 2.0, false, 'http://www.partner.viator.com/notre_dame'),
  ('Montmartre', 'Charming neighborhood with artists and Sacré-Cœur Basilica', 'https://example.com/montmartre.jpg', 'Paris, France', 'Neighborhoods', 4.3, 18, 4.0, true, 'http://www.partner.viator.com/montmartre'),
  ('Seine River Cruise', 'Scenic boat tour along the Seine River', 'https://example.com/seine_cruise.jpg', 'Paris, France', 'Boat Tours', 4.6, 14, 3.0, true, 'http://www.partner.viator.com/seine_cruise'),
  ('Colosseum', 'Ancient amphitheater in Rome', 'https://example.com/colosseum.jpg', 'Rome, Italy', 'Historical Sites', 4.7, 11, 2.8, false, 'http://www.partner.viator.com/colosseum'),
  ('Vatican Museums', 'Art collections in the Vatican City', 'https://example.com/vatican_museums.jpg', 'Rome, Italy', 'Museums', 4.4, 16, 3.2, true, 'http://www.partner.viator.com/vatican_museums'),
  ('Trevi Fountain', 'Famous Baroque fountain in Rome', 'https://example.com/trevi_fountain.jpg', 'Rome, Italy', 'Landmarks', 4.9, 13, 2.3, false, 'http://www.partner.viator.com/trevi_fountain'),
  ('Spanish Steps', 'Iconic stairway in Rome', 'https://example.com/spanish_steps.jpg', 'Rome, Italy', 'Landmarks', 4.1, 17, 3.8, true, 'http://www.partner.viator.com/spanish_steps'),
  ('Piazza Navona', 'Historic square with fountains and artwork', 'https://example.com/piazza_navona.jpg', 'Rome, Italy', 'Landmarks', 4.7, 14, 2.6, false, 'http://www.partner.viator.com/piazza_navona'),
  ('Great Wall of China', 'Ancient wall spanning across China', 'https://example.com/great_wall.jpg', 'Beijing, China', 'Landmarks', 4.2, 12, 2.2, true, 'http://www.partner.viator.com/great_wall'),
  ('Forbidden City', 'Imperial palace complex in Beijing', 'https://example.com/forbidden_city.jpg', 'Beijing, China', 'Historical Sites', 4.5, 18, 3.7, false, 'http://www.partner.viator.com/forbidden_city'),
  ('Terracotta Army', 'Ancient clay army in Xi''an', 'https://example.com/terracotta_army.jpg', 'Xi''an, China', 'Historical Sites', 4.9, 15, 2.5, true, 'http://www.partner.viator.com/terracotta_army'),
  ('The Bund', 'Waterfront area in Shanghai', 'https://example.com/the_bund.jpg', 'Shanghai, China', 'Landmarks', 4.4, 11, 2.9, false, 'http://www.partner.viator.com/the_bund'),
  ('Statue of Liberty', 'Iconic symbol of freedom in New York', 'https://example.com/statue_of_liberty.jpg', 'New York, USA', 'Landmarks', 4.6, 14, 3.1, true, 'http://www.partner.viator.com/statue_of_liberty'),
  ('Central Park', 'Vast urban park in the heart of Manhattan', 'https://example.com/central_park.jpg', 'New York, USA', 'Parks', 4.3, 10, 2.7, true, 'http://www.partner.viator.com/central_park'),
  ('Times Square', 'Famous entertainment hub and commercial intersection', 'https://example.com/times_square.jpg', 'New York, USA', 'Landmarks', 4.8, 12, 2.3, false, 'http://www.partner.viator.com/times_square'),
  ('Grand Canyon', 'Spectacular natural wonder in Arizona', 'https://example.com/grand_canyon.jpg', 'Arizona, USA', 'Nature', 4.9, 20, 4.5, true, 'http://www.partner.viator.com/grand_canyon'),
  ('Golden Gate Bridge', 'Iconic suspension bridge in San Francisco', 'https://example.com/golden_gate_bridge.jpg', 'San Francisco, USA', 'Landmarks', 4.7, 16, 3.2, false, 'http://www.partner.viator.com/golden_gate_bridge'),
  ('Niagara Falls', 'Magnificent waterfalls on the border of USA and Canada', 'https://example.com/niagara_falls.jpg', 'USA and Canada', 'Natural Wonders', 4.5, 18, 3.8, true, 'http://www.partner.viator.com/niagara_falls');

INSERT INTO favorite_attractions (user_id, attraction_id)
VALUES
  (1, 2),
  (1, 5),
  (2, 1),
  (2, 3),
  (3, 4);

-- Custom Packages
INSERT INTO custom_packages (user_id, name, total_cost, total_days, created_at)
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
