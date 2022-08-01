const express = require("express");
const router = express.Router();
const mailingContactController = require("../controllers/mailingContactController");

router.get("/", mailingContactController.getAllContacts);

router.get("/:contactId", mailingContactController.getOneContact);

router.post("/", mailingContactController.createNewContact);

router.put("/:contactId", mailingContactController.updateOneContact);

router.delete("/:contactId", mailingContactController.deleteOneContact);

module.exports = router;
