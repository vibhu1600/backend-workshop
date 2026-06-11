const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const dns = require("dns");
const profileRoutes = require("./routes/profileRoutes");

dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config();
const helloRoutes = require("./routes/helloRoutes..js");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(express.json());


//routes 
app.use("/api", helloRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
const PORT = process.env.PORT || 5000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });
};

connectDB();
startServer();