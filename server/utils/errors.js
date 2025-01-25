// Custom error classes
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}

export class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
    this.status = 401;
  }
}

// Error handler middleware
export const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof ValidationError || err instanceof AuthenticationError) {
    return res.status(err.status).json({ error: err.message });
  }

  res.status(500).json({ 
    error: 'Something went wrong',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};