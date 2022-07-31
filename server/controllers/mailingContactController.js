const contactService = require("../services/mailingContactService");

const getAllContacts = async (req, res) => {
  try {
    const allContacts = await contactService.getAllContacts();
    res.send({ status: "OK", data: allContacts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneContact = async (req, res) => {
  const { contactId } = req.params;
  if (!contactId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':contactId' can not be empty" },
    });
  }

  try {
    const contact = await contactService.getOneContact(contactId);
    res.send({ status: "OK", data: contact });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewContact = async (req, res) => {
  const { email, consentHow } = req.body;
  if (![email, consentHow].every(Boolean)) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or empty: 'email', 'consentHow'",
      },
    });
  }

  const newContact = {
    email,
    consent: "Y",
    consentHow,
  };

  try {
    const createdContact = await contactService.createNewContact(newContact);
    res.status(201).send({ status: "OK", data: createdContact });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneContact = async (req, res) => {
  const { consent, consentHow, email } = req.body;
  const { contactId } = req.params;

  if (!contactId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':email' can not be empty" },
    });
  }

  if (![consent, consentHow, email].every(Boolean)) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or empty: 'consent', 'consentHow', 'email",
      },
    });
  }

  try {
    const updatedContact = await contactService.updateOneContact(
      contactId,
      req.body
    );
    res.send({ status: "OK", data: updatedContact });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneContact = async (req, res) => {
  const {
    params: { contactId },
  } = req;
  if (!contactId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':email' can not be empty" },
    });
  }

  try {
    await contactService.deleteOneContact(contactId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllContacts,
  getOneContact,
  createNewContact,
  updateOneContact,
  deleteOneContact,
};
