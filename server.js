const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Load JSON files
const footballQuestions=require(path.join(__dirname,"football.json"));
const cricketQuestions=require(path.join(__dirname,"cricket.json"));
const olympicQuestions=require(path.join(__dirname,"olympics.json"));
const MixQuestions=require(path.join(__dirname,"Mixture.json"));
const gkQuestions=require(path.join(__dirname,"gk.json"));
const historyQuestions=require(path.join(__dirname,"history.json"));
const indiaQuestions=require(path.join(__dirname,"india.json"));
const mithologyQuestions=require(path.join(__dirname,"mithology.json"));
const politicsQuestions=require(path.join(__dirname,"politics.json"));
const scienceQuestions=require(path.join(__dirname,"science.json"));
const geographyQuestions=require(path.join(__dirname,"geography.json"));
// Home route
app.get("/", (req, res) => {
  res.send("Welcome to MyQuiz Backend!");
});

// Football API
app.get("/api/football", (req, res) => {
  res.status(200).json(footballQuestions);
});
app.get("/api/cricket",(req,res)=>{
    res.status(200).json(cricketQuestions);
})
app.get("/api/olympics",(req,res)=>{
    res.status(200).json(olympicQuestions);
})
app.get("/api/Mix",(req,res)=>{
    res.status(200).json(MixQuestions);
})
app.get("/api/geography",(req,res)=>{
  res.status(200).json(geographyQuestions);
})
app.get("/api/gk",(req,res)=>{
  res.status(200).json(gkQuestions);
})
app.get("/api/history",(req,res)=>{
  res.status(200).json(historyQuestions);
})
app.get("/api/india",(req,res)=>{
  res.status(200).json(indiaQuestions);
})
app.get("/api/mithology",(req,res)=>{
  res.status(200).json(mithologyQuestions);
})
app.get("/api/politics",(req,res)=>{
  res.status(200).json(politicsQuestions);
})
app.get("/api/science",(req,res)=>{
  res.status(200).json(scienceQuestions);
})
const port =  process.env.PORT ||5002;
app.listen(port, () => console.log(`✅ Backend running on port ${port}`));
