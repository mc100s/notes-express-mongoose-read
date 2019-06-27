const express = require("express");
const router = express.Router();
const Company = require("../models/Company");

/* GET home page */
router.get("/", (req, res, next) => {
  let start = new Date();
  Company.find()
    .limit(1000)
    .then(companiesFromDb => {
      let end = new Date();
      console.log("Diff in ms:", end - start);
      res.render("index", { companies: companiesFromDb });
    });
});

// Example: http://localhost:3000/company/52cdef7c4bab8bd675297d94
router.get("/company/:companyId", (req, res, next) => {
  let companyId = req.params.companyId
  Company.findById(companyId)
    .then(company => {
      res.render("company-detail", { company: company });
    })
});

module.exports = router;
