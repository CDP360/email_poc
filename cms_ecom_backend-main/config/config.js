const TABLE_NAME = "cdp360";
const config = {
  PORT: process.env.PORT || 8080,
  //DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
  DB_CONNECTION: `mongodb+srv://samdev:Password%40123@chessthambi.vllen.mongodb.net/ecomCDP`,
  SECRET: "badumts",
  SALT: 10,
  COOKIE_NAME: "USER_SESSION",
  CLOUDINARY_NAME: "silenceiv",
  CLOUDINARY_API_KEY: 626847416757451,
  CLOUDINARY_API_SECRET: "3NzQ5GbrcSjW0EERTJd5XZvfcT8",
  CLOUDINARY_STORAGE: "pza5zln6",
};

module.exports = config;
