const contacts = require("../database/mailingContact");

const getAllContacts = async () => {
  try {
    const allContacts = await contacts.getAllContacts();
    return allContacts;
  } catch (error) {
    throw error;
  }
};

const getOneContact = async (email) => {
  try {
    const contact = await contacts.getOneContact(email);
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

const updateOneContact = async (changes) => {
  try {
    const updatedContact = await contacts.updateOneContact(changes);
    return updatedContact;
  } catch (error) {
    throw error;
  }
};

const deleteOneContact = async (email) => {
  try {
    await contacts.deleteOneContact(email);
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
