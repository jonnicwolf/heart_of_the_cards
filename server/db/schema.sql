CREATE EXTENSION dblink;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'esperi_db') THEN
        PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE esperi_db');
    END IF;
END
$$;

\c esperi_db

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  public_key TEXT NOT NULL,
  private_key TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS history (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  question TEXT NOT NULL,
  tarot_cards JSON NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT REFERENCES users(id)
);
