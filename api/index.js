import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://api.sportradar.us/ncaamb/trial/v8/en/tournaments/56befd3f-4024-47c4-900f-892883cc1b6b/schedule.json?api_key=luKiaKnnuM5AyqYEimwuW2YnoRK9ks4F6wYPP307"],
  })
);

app.get("/schedule", function (req, res) {
  res.status(200).json({ success: true });
});

app.post("/test-cors-post", function (req, res) {
  res.status(200).json({ success: true });
});

// send the about.html file
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "static", "about.html"));
});

app.listen(4000, () => console.log("Server ready on port 4000."));
