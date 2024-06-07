const testController = (req, res) => {
  res.status(200).send({
    message: "Welcome User",
    success: true,
  });
};

module.exports = { testController };
