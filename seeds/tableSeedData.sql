-- Seed the 'User' table
INSERT INTO User (username, email, password)
VALUES
  ('johnA', 'johnA@gmail.com', 'abcdefg123'),
  ('BillyB', 'BillyB@gmail.com', 'password2'),
  ('CarlyC', 'CarlyC@gmail.com', 'CarlyC123'),
  ('DianaD', 'DianaD@gmail.com', 'password4'), 
  ('EmersonE', 'EmersonE@gmail.com', 'Emerson12'),
  ('FrankyF', 'FrankyF@gmail.com', 'Frankyf13'),
  ('GregG', 'GregG@gmail.com', 'GregG123'),
  ('HenryH', 'HenryH@gmail.com', 'password2'),
  ('IsabelI', 'IsabelI@gmail.com', 'IsabelI12'),
  ('JamesJ', 'JamesJ@gmail.com', 'password2');
  
-- Seed the 'Event' table
INSERT INTO Event (event_name, start_date, end_date, description, user_id)
VALUES
  ('Company Potluck', '2023-07-01', '2023-07-01', 'This is a bring your own dish potluck.', 1),
  ('Picnic', '2023-07-08', '2023-07-08', 'Have fun at the company picnic!', 2),
  ('Sporting Event Week', '2023-07-01', '2023-07-05', 'Time to have fun watching multiple sports games.', 3),
  ('Pig Racing', '2023-07-08', '2023-07-10', 'Watch some pigs get fast and muddy', 4),
  ('County Fair', '2023-07-01', '2023-08-01', 'Come to the county fair! It lasts all month and there are plenty of things to do!', 5),
  ('Company Sports Day', '2023-07-13', '2023-07-13', 'There will be many athletic competitions and prizes for you to win', 6),
  ('Hackathon Week', '2023-07-19', '2023-07-24', 'You have a week with a group to build an application in a fast paced environment.', 4),
  ('Wine Tasting', '2023-07-15', '2023-07-15', 'Wine Tasting for everyone over 21 to enjoy.', 7),
  ('Baby Shower', '2023-07-01', '2023-07-01', 'Ashley will be having her baby shower, come to celebrate!', 8),
  ('Networking Conference ', '2023-07-26', '2023-07-26', 'Come network with other companies and maybe even receive an offer!', 10);

-- Seed the 'Attendee' table
INSERT INTO Attendee (event_id, user_id)
VALUES
  (1, 2),
  (1, 3),
  (1, 4),
  (2, 6),
  (3, 5),
  (3, 1),
  (4, 7),
  (4, 8),
  (4, 9),
  (5, 9),
  (5, 10),
  (6, 2),
  (7, 4),
  (8, 1),
  (9, 6),
  (9, 10),
  (10, 6),
  (10, 8),
  (10, 9),
  (10, 10);
-- Seed the 'Budget' table
INSERT INTO Budget (event_id, item_name, amount)
VALUES
  (1, 'Catering', 1000),
  (1, 'Venue Rental', 1500),
  (2, 'Park Reservation', 500),
  (3, 'Venue Rental', 1500), 
  (4, 'Pig Company', 10000),
  (5, 'Venue Rental', 15000),  
  (5, 'Construction', 10000),
  (5, 'Food', 150000),
  (6, 'Fields', 1000),
  (7, 'Building', 25000), 
  (7, 'Coffee', 10000),
  (8, 'Venue Rental', 1500),  
  (9, 'Wine', 20000),
  (9, 'Venue Rental', 5000),
  (9, 'Catering', 10000),
  (10, 'Venue Rental', 30000), 
  (10, 'Catering', 25000),
  (10, 'Sales Booths', 1500),
  (10, 'Security', 10000);
