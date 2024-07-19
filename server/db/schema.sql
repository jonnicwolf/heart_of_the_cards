CREATE EXTENSION dblink;

-- Step 1: Use dblink to create the database if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'esperi_db') THEN
        PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE esperi_db');
    END IF;
END
$$;

-- Step 2: Connect to the newly created database
\c esperi_db

-- Step 3: Create the users table if it does not exist
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  public_key TEXT NOT NULL,
  private_key TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 4: Create the history table if it does not exist
CREATE TABLE IF NOT EXISTS history (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  question TEXT NOT NULL,
  tarot_cards JSON NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT REFERENCES users(id)
);
