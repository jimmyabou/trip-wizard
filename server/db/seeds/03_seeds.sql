INSERT INTO users (username, password, email, address, phone_number)
VALUES 
  ('john_doe', '$2a$10$NpHHzDL/qk3B08qbhUPf4eq21IO7rsfg/zxFngtLbw7oc8527nbNa', 'john@example.com', '123 Main St', '555-123-4567'),
  ('jane_smith', '$2a$10$CyDsHi0WmR2PBzMs1iT3JeOTiirmhy25RUW25IhosGWeByq9ijXze', 'jane@example.com', '456 Oak St', '987-654-3210'),
  ('mike_johnson', '$2a$10$4hG/UkS0jc/luOKveLb3t.rzo00UcPGVEQ1KTbEeMr/BAKty9SDPS', 'mike@example.com', '789 Elm St', '555-555-5555'),
  ('sarah_wilson', '$2a$10$NpHHzDL/qk3B08qbhUPf4eq21IO7rsfg/zxFngtLbw7oc8527nbNa', 'sarah@example.com', '123 Maple St', '111-222-3333'),
  ('alex_davis', '$2a$10$CyDsHi0WmR2PBzMs1iT3JeOTiirmhy25RUW25IhosGWeByq9ijXze', 'alex@example.com', '456 Pine St', '444-555-6666'),
  ('lisa_smith', '$2a$10$4hG/UkS0jc/luOKveLb3t.rzo00UcPGVEQ1KTbEeMr/BAKty9SDPS', 'lisa@example.com', '789 Oak St', '777-888-9999');



-- Entry 1
INSERT INTO attractions (name, description, latitude, longitude, category, rating, price, duration, featured, booking_url, pictures, city, country)
VALUES ('Compagnie des Bateaux Mouches Bastille Day Seine River Dinner Cruise',
        'Have a Champagne dinner cruise, taste a French traditional cooking, prepared on board by our own chef. Enjoy a 2h15 magic cruise with live music! At the end of the dinner, make yourself comfortable and watch the firework display from the upper-deck.',
        48.86401059999999,
        2.3059374,
        'Dining/Cruise',
        4.3,
        195.0,
        120,
        true,
        'http://www.partner.viator.com/en/13257/tours/Paris/Bastille-day-dinner-cruise/d479-23561P13?eap=prod-sRa7AtLuF4UkLYO6mKPY-13257&aid=vba13257en',
        ARRAY['https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/07/58.jpg'],
        'Paris',
        'France');

INSERT INTO attractions (name, description, latitude, longitude, category, rating, price, duration, featured, booking_url, pictures, city, country)
VALUES ('Paris: Full-Day Customized Private Walking Tour with a Local',
        'Discover the history and culture within Paris on this customized tour. Just let the guide know about your interests and all the legwork will be planned for you. Join a passionate, knowledgeable and engaging local as your guide around this immense city.',
        48.85693,
        2.3412,
        'Guided Tour',
        3.0,
        434.0,
        420,
        false,
        'https://www.getyourguide.com/paris-l16/paris-full-day-customized-private-tour-t226705/?partner_id=B9IC1H4&psrc=partner_api&currency=EUR',
        ARRAY['https://cdn.getyourguide.com/img/tour/5c9cca3309970.jpeg/21.jpg', 'https://cdn.getyourguide.com/img/tour/5c9cc9f6c6ddb.jpeg/21.jpg', 'https://cdn.getyourguide.com/img/tour/5c9cca02b0183.jpeg/21.jpg'],
        'Paris',
        'France');
INSERT INTO attractions (name, description, latitude, longitude, category, rating, price, duration, featured, booking_url, pictures, city, country)
VALUES ('Paris Dark Side Walking Tour',
        'Our Dark Paris private tour is the ideal way to unveil the most secret & mysterious legends of the City of Lights. From the Antic Latin Quarter to Notre Dame surroundings, and from the Marais to the Haunted Châtelet. It won’t leave you indifferent. Secure your spot now!<br><br>Enjoy a private Paris Evening Tour with a Local Expert Guide.<br><br>Explore the medieval heart of Paris, where each street corner hides stories to reveal.<br><br>Decipher hidden symbols & gothic statues by the churches where dreadful stories happened. <br><br>Discover back alleys where criminals & alchemists haunted for centuries.<br><br>From the Middle Ages to the 1960s, unveil the darkness behind the Parisian nightlife.<br><br>The iconic centre of Paris and Notre Dame cathedral will never look the same after this unique experience!',
        48.86514500000001,
        2.356986,
        'Guided Tour',
        5.0,
        124,
        120,
        true,
        'http://www.partner.viator.com/en/13257/tours/Paris/Dark-Paris-Myths-and-Legends-Small-Group-Walking-Tour-10-max/d479-19551P49?eap=prod-fxUokaxbikskDHdLPsA3-13257&aid=vba13257en',
        ARRAY['https://media.tacdn.com/media/attractions-splice-spp-674x446/09/4b/93/c1.jpg'],
        'Paris',
        'France');

INSERT INTO attractions (name, description, latitude, longitude, category, rating, price, duration, featured, booking_url, pictures, city, country)
VALUES ('Luxury private day tour to Champagne from Paris',
        'With this luxury day tour to Champagne, we make sure that you visit and taste only the best the region has to offer. We have crafted this trip with hand-picked partners so you can have a perfect experience from start to finish. From the discovery of one of the world’s most prestigious Champagne producers, like Champagne Dom Pérignon or Champagne Ruinart, to the visit of a confidential winery making rare & haute couture champagnes to the passion of your guide who will share his knowledge about wine and Champagne, which is the result of a perfect blend between the land, the climate and century-old craftsmanship, this is a perfect day around the world’s most illustrious drink, symbol of prestige and great achievements. Enjoy an exclusive gourmet lunch at a Michelin * restaurant, paired with wines. This tour includes hotel pick up and drop off by air-conditioned black car or minivan and your private wine expert guide.',
        48.8711057,
        2.3694001,
        'Sightseeing/Tasting',
        5.0,
        1000,
        660,
        true,
        'http://www.partner.viator.com/en/13257/tours/Paris/Luxury-private-day-tour-to-Champagne-from-Paris/d479-35428P6?eap=prod-xyxY1Y4tF3MsHDmXNout-13257&aid=vba13257en',
        ARRAY['https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/05/7b.jpg'],
        'Paris',
        'France');

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
