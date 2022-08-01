const db = require("./db");

const getAllContacts = async () => {
  try {
    const contacts = await db.query("SELECT * FROM mailing_list");
    return contacts.rows;
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const getOneContact = async (contactId) => {
  try {
    const contact = await db.query(
      "SELECT * FROM mailing_list WHERE contact_id = $1",
      [contactId]
    );
    return contact.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const createNewContact = async (newContact) => {
  const { email, consent, consentHow } = newContact;
  try {
    const newContact = await db.query(
      "INSERT INTO mailing_list (email, consent, consent_how ) VALUES ($1, $2, $3) RETURNING *",
      [email, consent, consentHow]
    );
    return newContact.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneContact = async (contactId, contactFields) => {
  try {
    const { email, consent, consentHow } = contactFields;

    const updatedContact = await db.query(
      "UPDATE mailing_list SET email = $1, consent = $2, consent_how = $3 WHERE contact_id = $4 RETURNING *",
      [email, consent, consentHow, contactId]
    );
    return updatedContact.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneContact = async (contactId) => {
  try {
    await db.query("DELETE FROM mailing_list where contact_id = $1", [
      contactId,
    ]);
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllContacts,
  createNewContact,
  getOneContact,
  deleteOneContact,
  updateOneContact,
};
