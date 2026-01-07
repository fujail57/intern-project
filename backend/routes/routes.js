const express = require("express");
const router = express.Router();

const contactControllers = require("../controller/contactControllers");

router.post("/add-contact", contactControllers.handleAddNewContact);
router.delete("/delete-contact", contactControllers.handleDeleteContact);
router.get("/view-contact", contactControllers.handleViewContact);

module.exports = router;
