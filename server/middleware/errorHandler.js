module.exports = errorHandler = (error, request, response, next) => {
  res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
};
