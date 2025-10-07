const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Load JSON files
const footballQuestions = require(path.join(__dirname, "football.json"));
const cricketQuestions = require(path.join(__dirname, "cricket.json"));
const olympicQuestions = require(path.join(__dirname, "olympics.json"));
const MixQuestions = require(path.join(__dirname, "mixture.json"));
const gkQuestions = require(path.join(__dirname, "gk.json"));
const historyQuestions = require(path.join(__dirname, "history.json"));
const indiaQuestions = require(path.join(__dirname, "india.json"));
const mithologyQuestions = require(path.join(__dirname, "mithology.json"));
const politicsQuestions = require(path.join(__dirname, "politics.json"));
const scienceQuestions = require(path.join(__dirname, "science.json"));
const geographyQuestions = require(path.join(__dirname, "geography.json"));

// Home route
app.get("/", (req, res) => {
  res.send("✅ Welcome to Tanmoy's MyQuiz Backend!");
});

// APIs
app.get("/api/football", (req, res) => res.json(footballQuestions));
app.get("/api/cricket", (req, res) => res.json(cricketQuestions));
app.get("/api/olympics", (req, res) => res.json(olympicQuestions));
app.get("/api/Mix", (req, res) => res.json(MixQuestions));
app.get("/api/geography", (req, res) => res.json(geographyQuestions));
app.get("/api/gk", (req, res) => res.json(gkQuestions));
app.get("/api/history", (req, res) => res.json(historyQuestions));
app.get("/api/india", (req, res) => res.json(indiaQuestions));
app.get("/api/mithology", (req, res) => res.json(mithologyQuestions));
app.get("/api/politics", (req, res) => res.json(politicsQuestions));
app.get("/api/science", (req, res) => res.json(scienceQuestions));

// ✅ Export app for Vercel
const port=5001;
app.listen(port,console.log(`server is running on ${port}✅`));
// module.exports = app;
