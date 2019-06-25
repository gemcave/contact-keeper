const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Hello MF! Welcome to the Express!" })
);

app.use("/api/auth/", require("./routes/auth"));
app.use("/api/contacts/", require("./routes/contacts"));
app.use("/api/users/", require("./routes/users"));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
