let errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({ success: false, error_message: err.message });
  next();
};

export { errorHandler };
