function httpError(req, res, err) {
    console.error("Internal error: " + err.message);
    res.status(500).send({ status: "Internal error." });
  }
  
  module.exports = httpError;