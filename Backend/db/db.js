const mongooose = require("mongoose");

const connectToDb = async () => {
  mongooose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((error) => {
      console.log("Error while connecting to db",error);
    });
};

module.exports = connectToDb;
