let checkerValidation = (err, req, res, next) => {
  res.json({
    succes: false,
    errMessage: err.message,
  });
  next();
};

export default checkerValidation;
