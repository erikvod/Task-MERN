// Desc: Error handler middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({ message: err.message });
}

module.exports = errorHandler;  // Export the error handler middleware