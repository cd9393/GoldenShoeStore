module.exports = errorHandler = (error, req, res, next) => {
  res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
};
