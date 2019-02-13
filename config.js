module.exports = {
  ENV: process.env.NODE_ENV || "",
  PORT: process.env.PORT || 5050,
  URL: process.env.BASE_URL || "http://localhost:5050",
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://<>:<>@ds063779.mlab.com:63779/customer_api",
  JWT_SECRET: process.env.JWT_SECRET || "secret497651"
};
