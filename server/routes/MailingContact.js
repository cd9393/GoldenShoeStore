const express = require("express");
const router = express.Router();
const mailingContactController = require("../controllers/mailingContactController");

router.get("/", mailingContactController.getAllContacts);

router.get("/:mailingContactID", mailingContactController.getOneContact);

router.post("/", mailingContactController.createNewContact);

router.put("/:mailingContactID", mailingContactController.updateOneContact);

router.delete("/:mailingContactID", mailingContactController.deleteOneContact);

module.exports = router;
