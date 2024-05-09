const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to verify working hours
app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send("Sorry, the website is only available during working hours (Monday to Friday, from 9 to 17).");
  }
});

// Serve static files
app.use(express.static(__dirname + "/Project"));

// Serve static files
app.use(express.static(__dirname + "/Project"));

// Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Project/home.html");
});

// Contact page
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Project/contact.html");
});

// Services page
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/Project/services.html");
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
