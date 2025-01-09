CREATE TABLE IF NOT EXISTS preferences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT NOT NULL,
      preference TEXT NOT NULL,
      value TEXT NOT NULL
    );
