const db = require("../DBConnection/dbConn");

module.exports = {
  createDoner: (data, callback) => {
    db.query(
      `insert into donation  (Firstname, Lastname, Email, MobileNumber, Address, Zipcode, Country, recognition, Anonymous, Amount) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        data.Firstname,
        data.Lastname,
        data.Email,
        data.MobileNumber,
        data.Address,
        data.Zipcode,
        data.Country,
        data.recognition,
        data.Anonymous,
        data.Amount,
      ],
      (err, result, fileds) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
