module.exports = function (req, res, next) {
  if (req.method === "POST") {
    req.method = "GET";
    req.query = req.body;
    console.log(req.query);
  }
  setTimeout(function () {
    next();
  }, 1000);
};
