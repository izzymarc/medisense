export const apiResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300,
    message,
    data,
  });
};

export const apiError = (res, statusCode, message, details = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: details,
  });
};
