const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const coursesRoutes = require("./routes/courses");
const usersRoutes = require("./routes/users");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(cors());

server.use("/courses", coursesRoutes);
server.use("/users", usersRoutes);

if (process.env.NODE_ENV === "production") {
    // Serve any static files
    server.use(express.static(path.join(__dirname, "frontend/build")));
    // Handle React routing, return all requests to React app
    server.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
    });
  }
  const whitelist = ["http://localhost:3000", "http://localhost:5000", "https://tr-react-project.herokuapp.com/"];
  const corsOptions = {
    origin: function (origin, callback) {
      console.log("** Origin of request " + origin);
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        console.log("Origin acceptable");
        callback(null, true);
      } else {
        console.log("Origin rejected");
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

// server.listen(8000, () => console.log('Server for course is started...'));
server.listen(PORT, () => console.log("Server for course is started..."));


