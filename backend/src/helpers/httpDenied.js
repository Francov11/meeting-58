function httpDenied(req, res, err) {
    console.error(err);
    res.status(403).send({ status: "Access denied." });
  }
  
  module.exports = httpDenied;
  