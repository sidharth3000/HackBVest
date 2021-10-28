const express = require("express");
const hospitalController = require("../controllers/controller.hospital");
const route = express.Router();

route.post("/login", hospitalController.login);
//route.post("/addHospital", hospitalController.addHospital);
route.post("/addPatientData", hospitalController.addPatientData);
route.get("/getPatientData", hospitalController.getPatientData);
<<<<<<< HEAD
=======
route.get("/getAllPatientData", hospitalController.getAllPatientData);
>>>>>>> 2884297c84263493d6079d27be3b12700968604a
route.get("/getHospital", hospitalController.getHospital);
//route.post("/signup", hospitalController.signup);

module.exports = route;
