CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT CHECK (
        year >= 1990
        AND year <= EXTRACT(
            YEAR
            FROM CURRENT_DATE
        )
    ),
    color VARCHAR(30) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price > 0),
    mileage INT NOT NULL CHECK (mileage >= 0),
    status VARCHAR(20) CHECK (status IN ('Available', 'Sold', 'Reserved')),
    added_on TIMESTAMP DEFAULT NOW()
);