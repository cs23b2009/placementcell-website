var express = require("express");
var route = express.Router();

// Load interview experiences data
var { companies: interviewCompanies } = require("../public/data/interviewExperiences.js");

//routes
route.get("/", (req, res) => {
  res.render("home");
});
route.get("/customhome", function (req, res) {
  res.render("home_old");
});
route.get("/contactUs", (req, res) => {
  res.render("contactUs");
});
route.get("/whyRecruit", (req, res) => {
  res.render("whyRecruit");
});
route.get("/recruiters", (req, res) => {
  res.render("recruiters");
});
route.get("/maps", (req, res) => {
  res.render("maps");
});
route.get("/devteam", (req, res) => {
  res.render("devteam");
});
route.get("/infrastructure", (req, res) => {
  res.render("infrastructure");
});
route.get("/login", (req, res) => {
  res.render("login");
});
route.post("/login", (req, res) => {
  console.log(req.body);
});
route.get("/facilities", (req, res) => {
  res.render("facilities");
});

route.get("/demographic", (req, res) => {
  res.render("demographic");
});
route.get("/demo", (req, res) => {
  res.render("demo");
});
route.get("/statistics", (req, res) => {
  res.render("statistics");
});
route.get("/extra", (req, res) => {
  res.render("extra");
});
route.get("/achieve", (req, res) => {
  res.render("achieve");
});
route.get("/placementprocedure", (req, res) => {
  res.render("placementProcedure");
});
route.get("/underConstruction", (req, res) => {
  res.render("underConstruction");
});
route.get("/blogs", (req, res) => {
  res.render("blogs");
});
route.get("/blog", (req, res) => {
  res.render("blogs");
});
route.get("/blogs/pragna-2026", (req, res) => {
  res.render("pragna2026");
});
route.get("/blog/pragna-2026", (req, res) => {
  res.render("pragna2026");
});

// Interview Experiences routes
route.get("/interview-experiences", (req, res) => {
  res.render("interviewExperiences", { companies: interviewCompanies });
});

route.get("/interview-experiences/:companyId", (req, res) => {
  const companyId = req.params.companyId;
  const company = interviewCompanies.find(function (c) {
    return c.id === companyId;
  });

  if (company) {
    res.render("interviewExperienceCompany", { company: company });
  } else {
    res.render("underConstruction");
  }
});

module.exports = route;
