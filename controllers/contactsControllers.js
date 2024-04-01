import contactsService from "../services/contactsServices.js";

const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

export const listContact = async (req, res) => {
  const result = await contactsService.listContact();
  res.json(result)
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const createContact = async (req, res) => {
    const result = await contactsService.createContact(req.body);
    res.status(201).json(result);
}

const updateContactById = async (req, res) => {
    const { id } = req.params;
    const result = await contactsService.updateContactById(id, req.body);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
}
 const deleteContactById = async (req, res) => {
    const { id } = req.params;
    const result = await contactsService.deleteContactById(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    
    res.json({
        message: "Delete success"
    })
}
module.exports = {
  listContact: ctrlWrapper(listContact),
  getContactById: ctrlWrapper(getContactById), 
  createContact: ctrlWrapper(createContact),
  updateContactById: ctrlWrapper(updateContactById),
  deleteContactById: ctrlWrapper(deleteContactById),

}