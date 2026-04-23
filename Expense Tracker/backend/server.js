require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes");
const incomeRoute = require("./routes/incomeRoutes");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

connectDB().then();

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/income", incomeRoute)

// Serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));