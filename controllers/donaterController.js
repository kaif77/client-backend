const { createDoner } = require("../models/donaterModel");

module.exports = {

  createNewDoner: (req, res) => {
    console.log(req.body.Donation);
    const body = req.body.Donation;
    createDoner(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        created: true,
        // data: result
        success: { message: "donation saved successfully" },
      });
    });
  },
};
