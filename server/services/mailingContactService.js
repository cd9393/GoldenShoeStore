const contacts = require("../database/mailingContact");

const getAllContacts = async () => {
  try {
    const allContacts = await contacts.getAllContacts();
    return allContacts;
  } catch (error) {
    throw error;
  }
};

const getOneContact = async (contactId) => {
  try {
    const contact = await contacts.getOneContact(contactId);
    return contact;
  } catch (error) {
    throw error;
  }
};

const createNewContact = async (newContact) => {
  try {
    const createdContact = await contacts.createNewContact(newContact);
    return createdContact;
  } catch (error) {
    throw error;
  }
};

const updateOneContact = async (contactId, changes) => {
  try {
    const updatedContact = await contacts.updateOneContact(contactId, changes);
    return updatedContact;
  } catch (error) {
    throw error;
  }
};

const deleteOneContact = async (contactId) => {
  try {
    await contacts.deleteOneContact(contactId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllContacts,
  getOneContact,
  createNewContact,
  updateOneContact,
  deleteOneContact,
};
