-- Table for Active Clients
CREATE TABLE active_clients (
    id SERIAL PRIMARY KEY,
    broker_name VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    clients INT NOT NULL
);

-- Table for Complaints
CREATE TABLE complaints (
    id SERIAL PRIMARY KEY,
    broker_name VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    complaints INT NOT NULL
);

-- Table for Shareholders
CREATE TABLE shareholders (
    id SERIAL PRIMARY KEY,
    broker_name VARCHAR(50) NOT NULL,
    type VARCHAR(20) NOT NULL, -- Public or Private
    percentage DECIMAL(5, 2) NOT NULL
);

-- Table for Financials
CREATE TABLE financials (
    id SERIAL PRIMARY KEY,
    broker_name VARCHAR(50) NOT NULL,
    revenue DECIMAL(12, 2) NOT NULL,
    profit_loss DECIMAL(12, 2) NOT NULL
);

-- Table for Charges
CREATE TABLE charges (
    id SERIAL PRIMARY KEY,
    broker_name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL, -- Account Opening, Maintenance, Auto Square-off, DP Charges, Call & Trade
    amount DECIMAL(10, 2) NOT NULL
);

-- Table for Pros and Cons
CREATE TABLE pros_cons (
    id SERIAL PRIMARY KEY,
    broker_name VARCHAR(50) NOT NULL,
    pros TEXT NOT NULL,
    cons TEXT NOT NULL
);

-- Table for Ratings
CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    broker_name VARCHAR(50) NOT NULL,
    rating DECIMAL(3, 2) NOT NULL
);


-- Active Clients
INSERT INTO active_clients (broker_name, year, clients)
VALUES
('Broker A', 2020, 1200),
('Broker A', 2021, 1500),
('Broker A', 2022, 1800),
('Broker A', 2023, 2100),
('Broker B', 2020, 1300),
('Broker B', 2021, 1600),
('Broker B', 2022, 1700),
('Broker B', 2023, 2000);

-- Complaints
INSERT INTO complaints (broker_name, year, complaints)
VALUES
('Broker A', 2020, 5),
('Broker A', 2021, 7),
('Broker A', 2022, 4),
('Broker A', 2023, 6),
('Broker B', 2020, 6),
('Broker B', 2021, 8),
('Broker B', 2022, 5),
('Broker B', 2023, 7);

-- Shareholders
INSERT INTO shareholders (broker_name, type, percentage)
VALUES
('Broker A', 'Public', 55),
('Broker A', 'Private', 45),
('Broker B', 'Public', 60),
('Broker B', 'Private', 40);

-- Financials
INSERT INTO financials (broker_name, revenue, profit_loss)
VALUES
('Broker A', 1200000, 300000),
('Broker B', 1100000, 280000);

-- Charges
INSERT INTO charges (broker_name, type, amount)
VALUES
('Broker A', 'Account Opening', 500),
('Broker A', 'Maintenance', 300),
('Broker A', 'Auto Square-off', 50),
('Broker A', 'DP Charges', 40),
('Broker A', 'Call & Trade', 30),
('Broker B', 'Account Opening', 600),
('Broker B', 'Maintenance', 350),
('Broker B', 'Auto Square-off', 60),
('Broker B', 'DP Charges', 45),
('Broker B', 'Call & Trade', 35);

-- Pros and Cons
INSERT INTO pros_cons (broker_name, pros, cons)
VALUES
('Broker A', 'Low fees, Great platform', 'Limited global markets'),
('Broker B', 'Comprehensive research', 'Higher fees');

-- Ratings
INSERT INTO ratings (broker_name, rating)
VALUES
('Broker A', 4.7),
('Broker B', 4.6);

SELECT year, broker_name, clients
FROM active_clients
ORDER BY year, broker_name;

SELECT year, broker_name, complaints
FROM complaints
ORDER BY year, broker_name;

SELECT broker_name, type, percentage
FROM shareholders
ORDER BY broker_name;

SELECT broker_name, revenue, profit_loss
FROM financials;

SELECT broker_name,
       SUM(CASE WHEN type = 'Account Opening' THEN amount ELSE 0 END) AS account_opening,
       SUM(CASE WHEN type = 'Maintenance' THEN amount ELSE 0 END) AS maintenance
FROM charges
GROUP BY broker_name;

SELECT broker_name,
       SUM(CASE WHEN type = 'Auto Square-off' THEN amount ELSE 0 END) AS auto_square_off,
       SUM(CASE WHEN type = 'DP Charges' THEN amount ELSE 0 END) AS dp_charges,
       SUM(CASE WHEN type = 'Call & Trade' THEN amount ELSE 0 END) AS call_trade
FROM charges
GROUP BY broker_name;

SELECT broker_name, pros, cons
FROM pros_cons;

SELECT broker_name, rating
FROM ratings
ORDER BY rating DESC;

