const express = require("express");
const paymentController = require("../controllers/paymentControllers");

const router = express.Router();


router.post("/pay", paymentController.payment);

module.exports = router;
