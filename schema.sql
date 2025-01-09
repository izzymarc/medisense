-- Drop existing tables if they exist
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS preferences;

    -- Create the users table
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );

    -- Create the preferences table
    CREATE TABLE preferences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT NOT NULL,
      preference TEXT NOT NULL,
      value TEXT NOT NULL
    );
