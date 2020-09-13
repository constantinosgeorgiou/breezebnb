const express = require("express");
const router = express.Router();
const Admin = require("../controllers/admin");

const { isAuthenticated } = require("../middleware/authentication");

// Sign in route
router.post("/auth/signin", Admin.signin);

// Sign out route
router.post("/admin/:userName/signout", isAuthenticated, Admin.signout);

// Sign all out route
router.post("/admin/:userName/signoutall", isAuthenticated, Admin.signoutAll);



module.exports = router; 
